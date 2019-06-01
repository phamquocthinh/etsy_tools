import express from 'express';
import cheerio from 'cheerio'
import request from 'request-promise'
import Promise from 'bluebird'
import {exec} from 'child_process'
import _ from 'lodash'

const browserAgents = [
    'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2227.1 Safari/537.36',
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2227.0 Safari/537.36',
    'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko',
    'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; WOW64; Trident/6.0)',
    'Mozilla/5.0 (Windows NT 6.3; rv:36.0) Gecko/20100101 Firefox/36.0',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10; rv:33.0) Gecko/20100101 Firefox/33.0'
]

let amzImg = express.Router();

amzImg.route('/')
	.get(async (req, res) => {
		return res.render('amz-img');
    });

amzImg.route('/')
	.post(async (req, res) => {
        let {links} = req.body
        let arrLinks = links.split('\n')
        arrLinks = _.uniq(arrLinks)
        let arrRes = []

        return Promise.map(arrLinks, link => {
            let browserAgent = _.sample(browserAgents)
                let cmd = "curl -sfL --compressed -H 'User-Agent: " + browserAgent + "' --max-time 10 "

                cmd += "-L '" + link + "'"

                return new Promise((resolve, reject) => {
                    exec(cmd, {maxBuffer: 10*1024*1024}, (err, html) => {
                        if (err && !html) {
                            console.log(err)
                            return resolve()
                        }

                        return resolve(html)
                    })
                })
                .then((html) => {
                    let $ = cheerio.load(html)
                    let imgUrl = $('#imgTagWrapperId img').attr('src')
                    let name = $('#imgTagWrapperId img').attr('alt')
                    imgUrl = decodeURI(imgUrl)
                    let pattern = /^(.*?amazon.com\/images\/I\/)(.*?\|)(.*?\|)(.*?\.png)(\|.*?)$/
                    let matches = imgUrl.match(new RegExp(pattern))

                    let resUrl = ''

                    if (matches && matches.length) {
                        if (matches[1] && matches[4]) resUrl = matches[1] + matches[4]
                    }

                    if (!resUrl) return

                    arrRes.push({
                        name: name,
                        url: resUrl
                    })
                })
        }, { concurrency: 16 })
        .then(() => {
            return res.json({result: arrRes})
        })
    });


module.exports = amzImg;