//  import type { NextApiRequest, NextApiResponse } from "next"
// import { NextRequest } from "next/server";
import sendMessage from "./contact";

import { NextRequest, NextResponse } from "next/server";


export async function POST(req:NextRequest, res:NextResponse){
    try {
        const data = await req.json();
        await sendMessage(data);
        return  NextResponse.json({ status: "success", data });
    } catch (e) {
        console.log(e);
    }
}