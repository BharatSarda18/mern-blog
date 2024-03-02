import { Button, Select, TextInput } from "flowbite-react";
import { useState } from "react";
import PostCard from "../components/PostCard";

export default function SearchPage() {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [form,setForm]=useState({
        searchTerm:"",
        sort:"desc",
        catogery:"uncategorized"
    });


    const handleFormChange=(event)=>{
        setForm({ ...form, [event.target.id]: event.target.value });
    }

    const handleFormSubmit=()=>{

    }

    return (
        <div className="flex flex-col md:flex-row">
            <div>
                <form action="" onSubmit={handleFormSubmit}>
                    <div className="flex items-center ">
                        <label>Search Term:</label>
                        <TextInput
                            type="text"
                            id={form.searchTerm}
                            placeholder="Search..."
                            value={form.searchTerm}
                            onChange={handleFormChange}
                        />
                    </div>
                    <div className="flex items-center ">
                        <label htmlFor="">Sort:</label>
                        <Select id={form.sort} value={form.sort} onChange={handleFormChange}>
                            <option value='desc'>Latest</option>
                            <option value='asc'>Oldest</option>
                        </Select>

                    </div>
                    <div className="flex items-center ">
                        <label htmlFor="">Category:</label>
                        <Select id={form.catogery} value={form.catogery} onChange={handleFormChange}>
                            <option value='uncategorized'>Uncategorized</option>
                            <option value='reactjs'>React.js</option>
                            <option value='nextjs'>Next.js</option>
                            <option value='javascript'>JavaScript</option>
                        </Select>

                    </div>

                    <Button type='submit' outline gradientDuoTone='purpleToPink'>Apply Filters</Button>
                </form>
            </div>
            <div>
                <h1>Posts results:</h1>
                {posts.map((post) => (
                    <PostCard key={post._id} post={post} />
                ))}
            </div>
        </div>
    )
}
