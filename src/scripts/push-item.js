
import Items from '../models/item'
import { open } from '../db/mongoDB'
import { processItem, sleep } from './libs/utils'

const execute = async() => {
    let item = await getItem()

    if (!item) {
        await sleep(60000)
        return process.exit()
    }

    try {
        await processItem(item)

        await Items.findByIdAndUpdate(item._id, { pushedToEtsy: 1, status: 'success' })
    } catch(e) {
        console.log('Push item error...')
        console.log(e)
        await Items.findByIdAndUpdate(item._id, { pushedToEtsy: 2, status: 'error', error: e })
    }
    
    console.log('Done')
    await sleep(60000)
    process.exit()
}

const getItem = () => {
    return Items.findOne({ pushedToEtsy: 0, createdMockup: 1 })
        .populate({
            path: 'template',
            populate: [
                { path: 'mockup' },
                { path: 'keywords' }
            ]
        })
        .populate('account')
        .exec()
}

open().then(execute())