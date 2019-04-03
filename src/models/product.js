import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    dir: {
        type: String,
        required: true,
    },
    pushedToEtsy: { type: Number, default: 0 },
    createdBy: { type: String, default: 'app' },
    createdAt: Date,
    title: String,
    description: String,
    tags: Array
}, { collection: 'product' });

export default mongoose.model('product', schema);
