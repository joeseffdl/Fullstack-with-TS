"use client";

import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import { PostProps } from "@/utils/types";

export default function AddComment({ id }: Pick<PostProps, "id">) {
    const [comment, setComment] = useState("");
    const [isDisabled, setIsDisabled] = useState(false);
    const queryClient = useQueryClient()
    let commentToastId: string

    const { mutate } = useMutation(
        async (data:{comment: string, postId: string}) => axios.post("/api/posts/addComment", { data }),
        {
            onSuccess: data => {
                setComment("");
                setIsDisabled(false);
                queryClient.invalidateQueries(["detail-post"])
                toast.success("Comment added successfully", { id: commentToastId })
            },
            onError: error => {
                setIsDisabled(false);
                if (error instanceof AxiosError) {
                    toast.error(error?.response?.data.message, { id: commentToastId })
                }
            }
        }
    )

    const submitComment = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsDisabled(true)
        commentToastId = toast.loading("Adding comment...", { id: commentToastId })
        mutate({ comment, postId: id})
    }
  return (
      <form onSubmit={submitComment} className="my-8">
      <h3>Add a comment</h3>
      <div className="my-2 flex flex-col">
        <input
          onChange={(e) => setComment(e.target.value)}
          value={comment}
          type="text"
          placeholder="Comment"
          className="rounded-md p-4 text-lg"
        />
          </div>
          <div className="flex items-center gap-2">
              <button
                  disabled={isDisabled}
                  className="text-sm bg-teal-600 text-white py-2"
                  type="submit"
              >
                  Add Comment 🚀
              </button>
          </div>
    </form>
  );
}
