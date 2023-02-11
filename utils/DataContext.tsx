"use client"

import { useState, createContext, Dispatch, SetStateAction, ReactNode } from "react";
import { PostProps } from "./types";

export interface FormContextInterface {
    form: PostProps;
    setForm: Dispatch<SetStateAction<PostProps>>
}

const defaultState = {
    form: {
        id: 0,
        title: "",
        content: ""
    },
    setForm: (form: PostProps) =>{}
} as FormContextInterface

export const FormContext = createContext(defaultState)

type FormProviderProps = {
    children: ReactNode
}

export default function FormProvider({ children }: FormProviderProps) {
    const [form, setForm] = useState<PostProps>({
        id: 0,
        title: "",
        content: ""
    })

    return (
        <FormContext.Provider value={{ form, setForm }}>
            { children }
        </FormContext.Provider>
    )
}