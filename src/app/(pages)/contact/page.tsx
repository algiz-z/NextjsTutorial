"use client"

import {FormEvent, useState} from "react"

const ContactPage = () => {
    const [content, setContent] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const postContent = async (e: FormEvent) => {
        e.preventDefault()

        if(!content){
            return null
        }

        setIsLoading(true)

        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                "Content-Type": "applicaion/json",
            },
            body: JSON.stringify({content: content})
        })

        setContent('')
        setIsLoading(false)
    }

    return (
        <div className="container mx-auto py-5">
            <h2 className="text-[50px]">Inquiry</h2>
            <form onSubmit={postContent}>
                <div>
                    <textarea disabled={isLoading} value={content} placeholder="Type in text" className="p-2 w-[600px] h-[400px] border border-white resize-none" onChange={(e) => setContent(e.target.value)}></textarea>
                </div>
                <button disabled={isLoading} className="bg-black text-white px-5 py-2 col-span-4 border border-white rounded p-5">Send</button>
            </form>
        </div>
    )
}

export default ContactPage