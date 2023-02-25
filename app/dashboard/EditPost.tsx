"use client";

import Image from "next/image";
import { useState } from "react";
import Toggle from "./Toggle";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-hot-toast";

type EditProps = {
  id: string;
  avatar: string;
  name: string;
  title: string;
  content: string;
  comments?: {
    createdAt: string;
    id: string;
    content?: string;
    postId: string;
    userId: string;
  }[];
};

export default function EditPost({
  avatar,
  name,
  title,
  content,
  comments,
  id,
}: EditProps) {
  const [toggle, setToggle] = useState(false);
  const queryClient = useQueryClient();
  let deleteToastID: string;

  const { mutate } = useMutation(
    async (id: string) =>
      await axios.delete("/api/posts/deletePost", { data: { id } }),
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries(["auth-posts"]);
        toast.success("Post deleted!", { id: deleteToastID });
      },
      onError: (err) => {
        toast.error("Something went wrong!", { id: deleteToastID });
        console.error(err);
      },
    }
  );

  const deletePost = () => {
    toast.loading("Deleting post...", { id: deleteToastID });
    mutate(id);
  };

  return (
    <>
      <div className="my-8 rounded-lg bg-white p-8">
        <div className="flex items-center gap-2">
          <Image
            width={32}
            height={32}
            src={avatar}
            alt="avatar"
            className="rounded-full"
          />
          <h3 className="font-bold text-gray-700">{name}</h3>
        </div>
        <div className="my-8">
          <p className="break-all">{title}</p>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-sm font-bold text-gray-700">
            {comments?.length} Comments
          </p>
        </div>
        <button
          className="text-sm font-bold text-red-500"
          onClick={(e) => setToggle(!toggle)}
        >
          Delete
        </button>
      </div>
      {toggle && <Toggle deletePost={deletePost} setToggle={setToggle} />}
    </>
  );
}
