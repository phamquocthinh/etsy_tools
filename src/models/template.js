import mongoose from 'mongoose'
import Keywords from './keyword'
import Mockups from './mockup'

const Schema = mongoose.Schema
const Templates = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: String,
    createdBy: { type: String, default: 'app' },
    createdAt: { type: Date, default: new Date() },
    keywords: [{ type: Schema.Types.ObjectId, ref: Keywords }],
    mockup: { type: Schema.Types.ObjectId, ref: Mockups },
}, { collection: 'template' });

export default mongoose.model('template', Templates);
