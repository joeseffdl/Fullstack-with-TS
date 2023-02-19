import DisplayPosts from "@/components/DisplayPosts"
import FormProvider from "@/utils/DataContext"
import { PostProps } from "@/utils/types"
import axios from "axios"
import Form from "../components/Form"
import { useQuery } from "@tanstack/react-query"

const getPosts = async () => { 
  const response = await axios.get("/api/posts/getPosts")
  return response.data
}

export default function Home() {
  const { data, isLoading, error } = useQuery({
    queryFn: getPosts,
    queryKey: ["posts"],
  })
  if (error) return error
  if (isLoading) return <div>Loading...</div>
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
              <DisplayPosts {...post} />
            ))} */}
          </div>
        </div>
    </FormProvider>
  )
}
