import { Schema, model, models } from 'mongoose';

const ReservationSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  reservationId:{
    type:String,
    required: [true, 'reservationId is required.'],
  },
  startHour:{
    type:String,
    required: [true, 'startHour is required.'],
  },
  startMinutes:{
    type:String,
    required: [true, 'startMinutes is required.'],
  },
  endMinutes:{
    type:String,
    required: [true, 'endMinutes is required.'],
  },
  endHour:{
    type:String,
    required: [true, 'endHour is required.'],
  },
  reservationType:{
    type:String,
    required: [true, 'reservationType is required.'],
  },
  location:{
    type:String,
    required: [true, 'location is required.'],
  },
  image:{
    type:String,
    required: [true, 'image is required.'],
  },
  description:{
    type:String,
    required: [true, 'description is required.'],
  },
  duration:{
    type:String,
    required: [true, 'duration is required.'],
  },
  amount:{
    type:String,
    required: [true, 'amount is required.'],
  },
  date: {
    type: Date,
    required: [true, 'date is required.'],
  },
  createdAt: {
    type: Date,
    default: Date.now, // Set the default value to the current timestamp
    required: [true, 'createdAt is required.'],
  },

});


const Reservation = models.Reservation || model('Reservation', ReservationSchema);

export default Reservation;