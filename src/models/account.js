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
    is_disabled: {type: Boolean, default: true},
    shipping_template: Schema.Types.Mixed
}, { collection: 'account' });

export default mongoose.model('account', Accounts);
