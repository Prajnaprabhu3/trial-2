import PostMessage from "../models/postMessage.js";


export const getPosts = async (request, response) => {
    try {
        const postMessage = await PostMessage.find();
        // console.log(postMessage);
        response.status(200).json(postMessage);
    } catch (error) {
        response.status(404).json({ message: error });
    }
}

export const createPost = async (request, response) => {
    const post = request.body();
    const newPost = new PostMessage(post);

    try {
        await newPost.save();

        response.status(201).json(newPost);
    } catch (error) {
        response.status(409).json({ message: error });
    }

}
