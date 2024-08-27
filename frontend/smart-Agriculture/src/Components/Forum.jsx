import { useState } from 'react';
import './styles/Forum.css';

const Forum = () => {
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState('');

    const handlePostSubmit = () => {
        setPosts([...posts, newPost]);
        setNewPost('');
    };

    return (
        <div className="forum" id="forum">
            <h2>Farmers Forum</h2>
            <input
                type="text"
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                placeholder="Share your knowledge or ask a question..."
            />
            <button onClick={handlePostSubmit}>Post</button>
            <ul>
                {posts.map((post, index) => (
                    <li key={index}>{post}</li>
                ))}
            </ul>
        </div>
    );
};

export default Forum;
