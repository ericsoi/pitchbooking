import Reservation from "@/models/reservation";
import { connectToDB } from "@/utils/database";
// import { useSession } from 'next-auth/react';




export const GET = async (request, {params}) => {
    try {
        await connectToDB()
        const reservation = await Reservation.find({}).populate('creator')
        return new Response(JSON.stringify(reservation), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all reservation", { status: 500 })
    }
} 