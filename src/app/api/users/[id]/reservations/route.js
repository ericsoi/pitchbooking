import Reservation from "@models/reservation";
import { connectToDB } from "@utils/database";

export const GET = async (request, { params }) => {
    try {
        await connectToDB()

        const reservations = await Reservation.find({ creator: params.id }).populate("creator")

        return new Response(JSON.stringify(reservations), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch prompts created by user", { status: 500 })
    }
} 