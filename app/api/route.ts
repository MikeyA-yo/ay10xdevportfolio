//  import type { NextApiRequest, NextApiResponse } from "next"
// import { NextRequest } from "next/server";
import sendMessage from "./contact";

import { NextRequest } from "next/server";


export async function POST(req:NextRequest){
    try {
        const data = await req.json();
        await sendMessage(data);
        return  Response.json({ status: "success", data });
    } catch (e) {
        console.log(e);
    }
}