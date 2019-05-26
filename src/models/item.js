import mongoose from 'mongoose';
import Keywords from './keyword'
import Accounts from './account'
import Mockups from './mockup'

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
    keywords: [{ type: Schema.Types.ObjectId, ref: Keywords }],
    account: { type: Schema.Types.ObjectId, ref: Accounts },
    mockup: { type: Schema.Types.ObjectId, ref: Mockups },
    mockupDir: String,
    status: String,
    error: Schema.Types.Mixed
}, { collection: 'item' });

export default mongoose.model('item', Items);
