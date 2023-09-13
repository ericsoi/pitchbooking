import Reservation from "@/models/reservation";
import { connectToDB } from "@/utils/database";

export const GET = async (request, { params }) => {
    try {
        await connectToDB()

        const reservation = await Reservation.findById(params.id).populate("creator")
        if (!reservation) return new Response("Reservation Not Found", { status: 404 });

        return new Response(JSON.stringify(reservation), { status: 200 })

    } catch (error) {
        return new Response("Internal Server Error", { status: 500 });
    }
}


export const DELETE = async (request, { params }) => {
    try {
        await connectToDB();

        // Find the prompt by ID and remove it
        await Reservation.findByIdAndRemove(params.id);

        return new Response("Reservation deleted successfully", { status: 200 });
    } catch (error) {
        return new Response("Error deleting Reservation", { status: 500 });
    }
};