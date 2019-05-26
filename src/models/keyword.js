import mongoose from 'mongoose'

const Schema = mongoose.Schema
const Keywords = new Schema({
    name: {
        type: String,
        required: true,
    },
    keywords: [String]
}, { collection: 'keyword' })

export default mongoose.model('keyword', Keywords)
