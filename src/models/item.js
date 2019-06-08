import mongoose from 'mongoose'
import Accounts from './account'
import Templates from './template'

const Schema = mongoose.Schema
const Items = new Schema({
    name: {
        type: String,
        required: true,
    },
    dir: {
        type: String,
        required: true,
    },
    title: String,
    pushedToEtsy: { type: Number, default: 0 },
    createdMockup: { type: Number, default: 0 },
    createdBy: { type: String, default: 'app' },
    createdAt: Date,
    template: { type: Schema.Types.ObjectId, ref: Templates },
    account: { type: Schema.Types.ObjectId, ref: Accounts },
    status: String,
    error: Schema.Types.Mixed
}, { collection: 'item' });

export default mongoose.model('item', Items);
