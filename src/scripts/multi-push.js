
import Product from '../models/product'
import { open } from '../db/mongoDB'

import { processItem } from '../controller/product'

const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}

const execute = async() => {
    let item = await getItem()

    if (!item) {
        console.log('Not found any items to process. Exitting...')
        await sleep(5 * 60 * 1000)
        return process.exit()
    }

    try {
        await processItem(item)
        console.log('Update item status')
        await Product.findByIdAndUpdate(item.id, { pushedToEtsy: 1, status: 'success' })
    } catch(e) {
        console.log(e)
        await Product.findByIdAndUpdate(item.id, { pushedToEtsy: 1, status: 'error', error: JSON.stringify(e) })
    }
    
    console.log('Sleeping')
    await sleep(5 * 60 * 1000)
    console.log('Re-execute')
    return execute()
}

const getItem = () => {
    return Product.findOne({ pushedToEtsy: {$ne: 1} })
}

open().then(execute())