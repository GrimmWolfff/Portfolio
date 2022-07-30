import Connect from '../../../../config/db';
import Post from '../../../../models/post';

export default async function handler(req, res) {
    await Connect();
    const { method, body: { title, text } } = req;
    switch(method) {
        case 'GET':
            try {
                const posts = await Post.find();
                res.json({ posts })
            } catch (error) {
                res.json({ error })
            }
            break;
        case 'POST':
            const publishedAt = new Date();
            const newPost = new Post({ title, text, publishedAt});
            try {
                await newPost.save();
                res.json({ newPost })
            } catch (error) {
                res.json({ error })
            }
            break;    
    }
}