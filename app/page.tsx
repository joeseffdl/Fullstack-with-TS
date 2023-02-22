import DisplayPosts from "@/components/DisplayPosts"
import FormProvider from "@/utils/DataContext"
import { GetPostProps, PostProps } from "@/utils/types"
import axios from "axios"
import Form from "../components/Form"
import { useQuery } from "@tanstack/react-query"

const getPosts = async () => { 
  const response = await axios.get("/api/posts/getPosts")
  return response.data
}

export default function Home() {
  const data = getPosts()
  // const { data, isLoading, error } = useQuery<GetPostProps[]>({
  //   queryKey: ["posts"],
  //   queryFn: getPosts,
  // })
  // if (error) return error
  // if (isLoading) return "Loading..."
  console.log(data)
  return (
    <FormProvider>
        <div className="">
          <h1 className="text-center text-lg font-bold text-gray-900 mb-3">
            Post It
          </h1>
          <Form />
          <div className="grid grid-cols-4 gap-y-8 drop-shadow-2xl justify-items-center">
            {/* {data?.map((post: PostProps) => (
              <DisplayPosts 
                key = {post.id} 
                name = {post.user.name} 
                avatar = {post.user.image} 
                title = {post.title} 
                content = {post.content} 
                id = {post.id}
                comments= {post.Comment}
                />
            ))} */}
          </div>
        </div>
    </FormProvider>
  )
}
