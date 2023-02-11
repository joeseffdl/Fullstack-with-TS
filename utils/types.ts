export interface BaseType {
    title: string
    content: string
}

// HOME
export interface PostProps extends BaseType {
    id: number
}

export interface ParamsProps {
    params: {
        id: string
    }
}