import mongoose from 'mongoose'

const Schema = mongoose.Schema
const Mockups = new Schema({
    name: {
        type: String,
        required: true,
    },
    dir: String,
    position: {
        x: Number,
        y: Number
    },
    resize: Number,
    price: Number,
    type: String
}, { collection: 'mockup' })

export default mongoose.model('mockup', Mockups)
