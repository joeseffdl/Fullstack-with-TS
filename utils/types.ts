export interface BaseType {
    title: string
    content: string
}

// HOME
export interface PostProps extends BaseType {
    id: string
}

export interface GetPostProps extends PostProps { 
    createdAt: string
    user: {
        name: string
        image: string
    }
    comments?: {
        createdAt: string
        id: string
        postId: string
        userId: string
    }[]
}

export interface DisplayPostProps extends PostProps {
    key: string
    name: string
    avatar: string
    Comment?: {
        createdAt: string
        id: string
        postId: string
        userId: string
    }[]
}

export interface ParamsProps {
    params: {
        id: string
    }
}