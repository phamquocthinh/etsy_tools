
import Items from '../models/item'
import { open } from '../db/mongoDB'
import { processItem, sleep } from './libs/utils'

const execute = async() => {
    let item = await getItem()
    console.log(item)
    if (!item) process.exit()

    try {
        await processItem(item)

        await Items.findByIdAndUpdate(item._id, { pushedToEtsy: 1, status: 'success' })
    } catch(e) {
        console.log('Push item error...')
        console.log(e)
        await Items.findByIdAndUpdate(item._id, { pushedToEtsy: 2, status: 'error', error: e })
    }
    
    await sleep(10000)
    process.exit()
}

const getItem = () => {
    return Items.findOne({ pushedToEtsy: {$ne: 1}, createdMockup: 1 })
        .populate('mockup')
        .populate('keywords')
        .populate('account')
        .exec()
}

open().then(execute())