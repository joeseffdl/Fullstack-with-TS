"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchDetails = async (slug: string) => {
  const response = await axios.get(`/api/posts/${slug}`);
  return response.data;
};

export default function PostDetail() {
  return <div></div>;
}
