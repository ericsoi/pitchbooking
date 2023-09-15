import User from "@/models/user";
import { connectToDB } from "@/utils/database";
// import { useSession } from 'next-auth/react';


export const GET = async (request, {params}) => {
    try {
        await connectToDB()
        const user = await User.find({}).populate('username')
        return new Response(JSON.stringify(user), { status: 200 })
    } catch (error) {
        return new Response(`Failed to fetch all user ${error}`, { status: 500 })
    }
} 