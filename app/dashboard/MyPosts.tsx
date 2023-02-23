"use client"

import { AuthPosts } from "@/utils/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import EditPost from "./EditPost";

const fetchAuthPosts = async () => {
    const response = await axios.get("/api/posts/authPosts")
    return response.data
}

export default function MyPosts(){
    const { data, isLoading } = useQuery<AuthPosts>({
        queryFn: fetchAuthPosts,
        queryKey: ["auth-posts"]
    })
    if (isLoading) return <div>Posts are loading...</div>
    return (
        <div>
            {data?.Post?.map((post) => (
                <EditPost
                    id={post.id}
                    key={post.id}
                    avatar={data.image}
                    name={data.name}
                    title={post.title}
                    comments={post.Comment}
                />
            ))}
        </div>
    )

};
