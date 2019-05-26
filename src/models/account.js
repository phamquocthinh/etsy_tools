import mongoose from 'mongoose'

const Schema = mongoose.Schema
const Accounts = new Schema({
    name: {
        type: String,
        required: true,
    },
    consumer_key: String,
    consumer_secret: String,
    token: String,
    token_secret: String,
    shipping_template_id: Number
}, { collection: 'account' });

export default mongoose.model('account', Accounts);
