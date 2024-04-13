import { NextRequest, NextResponse } from "next/server"

const POST = async (req: NextRequest) => {
    const {content} = await req.json()

    //write what to send to db
    console.log(content)

    return NextResponse.json({}, {status: 200})
}

export {POST}