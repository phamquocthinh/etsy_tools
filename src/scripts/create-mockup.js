
import Items from '../models/item'
import { open } from '../db/mongoDB'
import { createMockup, sleep } from './libs/utils'

const execute = async() => {
    let item = await getItem()
    
    if (!item) process.exit()

    try {
        await createMockup(item)
        await Items.findByIdAndUpdate(item._id, {createdMockup: 1})
    } catch(e) {
        console.log('Create mockups error')
        console.log(e)
        await Items.findByIdAndUpdate(item._id, {createdMockup: 2, error: e})
    }
    
    console.log('Done')
    await sleep(10000)
    process.exit()
}

const getItem = () => {
    return Items.findOne({ createdMockup: {$ne: 1} })
        .populate('mockup')
        .exec()   
}

open().then(execute())