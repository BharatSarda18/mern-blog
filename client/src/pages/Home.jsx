import { useEffect, useState } from "react"
import PostCard from "../components/PostCard"
import { Link } from "react-router-dom";
import { getHomePagePosts } from "../services/HomeService";

export default function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await getHomePagePosts();
               // setPosts(response?.data);
            } catch (error) {
                console.log(error,"error");   
            }
        }
        fetchPosts();
    }, [])

    return (
        <>
            <div className="">
                <h1 className="">Welcome to my Blog</h1>
                <p className="">
                    Here you'll find a variety of articles and tutorials on topics such as
                    web development, software engineering, and programming languages.
                </p>
                <Link to={"/search"} className="">
                    View all posts
                </Link>
            </div>
            <div className="">
                {
                    (posts.length > 0) && (
                        <div className="">
                            <h2 className="">Recent Posts</h2>
                            <div className="">
                                {posts.map((post) => (
                                    <PostCard key={post._id} post={post} />
                                ))}
                            </div>
                            <Link to={"/search"}>
                                View all posts
                            </Link>
                        </div>
                    )
                }

            </div>
        </>
    )
}
