import Reservation from '@/models/reservation';
import { connectToDB } from '@/utils/database';
export const POST = async (request) => {
    // const { userId, prompt, tag } = await request.json();
    const data = await request.json()
    const { userId, startHour, startMinutes, endMinutes, endHour, reservationType, location, image, description, duration, amount, date, reservationId} = data;
    try {
        await connectToDB();
        const exists = await Reservation.find({
            startHour: startHour,
            date: date,
            // creator: userId
          });
          if(Object.keys(exists).length > 0){
            return new Response({message:'exists'}, { status: 409 })
          }else{
            const newReservation = new Reservation({ creator: userId, startHour, startMinutes, endMinutes, endHour, reservationType, location, image, description, duration, amount, date, reservationId});
            await newReservation.save();
            return new Response(JSON.stringify(newReservation), { status: 201 })
          }
    } catch (error) {
        console.log(error)
        return new Response(`Failed to create a new prompt ${error}`, { status: 500 });
    }
}


// creator, startHour, startMinutes, endMinutes, endHour, reservationType, location, image, description, duration, amount, date, createdAt