"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactNode } from "react"
import { Toaster } from "react-hot-toast"

const queryClient = new QueryClient()

const QueryWrapper = ({ children }: { children?: ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    <Toaster position="top-right" reverseOrder={false} />
    {children}
  </QueryClientProvider>
)

export default QueryWrapper