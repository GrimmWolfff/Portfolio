import { Schema, model, models } from 'mongoose';

const PostSchema = new Schema({
    title: {
        required: true,
        type: String,
        max: 256
    },
    text: {
        required: true,
        type: String
    },
    publisheddAt: {
        type: Date,
        default: new Date()
    }
})

module.exports = models.Post || model('Post', PostSchema);