"use client";

import AddComment from "@/components/AddComment";
import Form from "@/components/Form";
import { ParamsProps, PostType } from "@/utils/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";

const fetchDetails = async (id: string) => {
  const response = await axios.get(`/api/posts/${id}`);
  return response.data;
};

export default function PostDetail(url: ParamsProps) {
  const { data, isLoading } = useQuery<PostType[]>({
    queryKey: ["detail-post"],
    queryFn: () => fetchDetails(url.params.id),
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <Form
        id={data.id}
        name={data.user.name}
        avatar={data.user.image}
        postTitle={data.title}
        comments={data.Comment}
      />
      <AddComment id={data?.id} />
      {data?.Comment?.map((comment) => (
        <div key={comment.id} className="my-6 rounded-md bg-white p-8">
          <div className="flex items-center gap-2">
            <Image
              width={24}
              height={24}
              src={comment.user?.image}
              alt="avatar"
            />
            <h3 className="font-bold">{comment?.user?.name}</h3>
            <h2 className="text-sm">{comment?.createdAt}</h2>
          </div>
          <div className="py-4">{comment.content}</div>
        </div>
      ))}
    </div>
  );
}
