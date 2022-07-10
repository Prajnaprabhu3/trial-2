import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }

});

// the schema is converted into a model
const PostMessage = mongoose.model('PostMessage', postSchema);

// we export the schema model 
export default PostMessage; 