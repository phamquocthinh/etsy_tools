import Promise from "bluebird"
import request from "request"
import fs from "fs"
import path from 'path'
import jimp from 'jimp'
import { getVariations } from '../config/variations'
import {
    DESCRIPTION,
    TAXONOMY_ID
} from '../config/defaulValues'
import Items from '../models/item'
import Accounts from '../models/account'
import Mockups from '../models/mockup'
import Keywords from '../models/keyword'

const saveItems = async(files, data) => {
    let {
        accountId,
        mockupId,
        keywordId
    } = data

    try {
        for (let file of files) {
            let title = ''
            let match = file.filename.match(new RegExp(/^(\d+)-(.*?).png$/, 'i'))
    
            if (match && match.length) {
                title = match[2]
            }
    
            await Items.create({
                name: file.filename,
                title: title,
                dir: '/images/uploads/' + file.filename,
                account: accountId,
                keywords: [keywordId],
                mockup: mockupId,
                createdAt: new Date()
            })
        }
    } catch(e) {
        throw e
    }
}

export { saveItems }