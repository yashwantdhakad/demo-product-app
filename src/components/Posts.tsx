import React, { useEffect, useState } from 'react'

export default function Posts() {
    const [posts, setPosts] = useState<any[]>([]);
    const [errors, setErrors] = useState<any>({});
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        const getPosts = async () => {
            setIsLoading(true);
            try {
                const response = await fetch('https:jsonplaceholder.typicode.com/posts');
                setPosts(await response.json());
            } catch(e) {
                setErrors(e);
            } finally {
                setIsLoading(false);
            }
        }

        getPosts();
    }, []);


    if (isLoading) {
        return (<div>Loading...</div>)
    }

    if (errors && errors.message) {
        return (<div>{errors.message}</div>)
    }

    return (
        <div>
            <h3>Posts</h3>
            <ul className='list-group'>
                {posts && posts.length > 0 && posts.map((post: any) =>
                    <li className='list-group-item' key={post.id}>
                        <h3>{post.id} : {post.title}</h3>
                        <p>{post.body}</p>
                    </li>
                )}
            </ul>
        </div>
    )
}
