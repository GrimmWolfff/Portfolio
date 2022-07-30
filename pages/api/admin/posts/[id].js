import Connect from '../../../../config/db';
import Post from '../../../../models/post';

export default async function handler(req, res) {
    await Connect();
    const { method, params: { id }, body: { title, text } } = req;
    switch(method) {
        case 'GET':
            try {
                const posts = await Post.findById(id);
                res.json({ posts })
            } catch (error) {
                res.json({ error })
            }
            break;
        case 'PUT':
            try {
                const editedPost = await Post.findByIdAndUpdate(id, { $set: { title, text } });
                res.json({ editedPost })
            } catch (error) {
                res.json({ error })
            }
            break;
        case 'DELETE':
            try {
                const deletedPost = await Post.findOneAndDelete(id);
                res.json({ deletedPost })
            } catch (error) {
                res.json({ error })
            }
            break;
    }
}