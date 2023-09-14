import { Row } from "antd";
import Pitch from "./Pitch";
import { useState, useEffect } from "react";
const Reservation = (resProps) => {
  const [reservationCount, setreservationCount] = useState(null)
  const [resavations, setresavations] = useState([])
  const fetchPosts = async () => {
    try {
        const response = await fetch("/api/reservation");
        const data = await response.json();
        setresavations(data);
    }catch (err) {
      console.log("error: ", err)
    }
  }
  useEffect(() => {
    fetchPosts()
  }, [])

  function isSubset(subset, superset) {
    return Object.keys(subset).every(key => superset.hasOwnProperty(key) && subset[key] === superset[key]);
  }
  
  const reservationDuration = 140; // in minutes
  const startTime = 6 * 60 + 30; // 6:30 AM in minutes
  const endTime = 21 * 60; // 9:00 PM in minutes
  const generateReservations = (props) => {
    const reservations = [];
    for (let time = startTime; time <= endTime - reservationDuration; time += reservationDuration) {
      const hours = Math.floor(time / 60);
      const minutes = time % 60;

      const startHour = hours < 10 ? `0${hours}` : hours;
      const startMinutes = minutes < 10 ? `0${minutes}` : minutes;

      const endHour = (hours + Math.floor(reservationDuration / 60)) < 10 ?
        `0${hours + Math.floor(reservationDuration / 60)}` :
        hours + Math.floor(reservationDuration / 60);

      const endMinutes = (minutes + (reservationDuration % 60)) < 10 ?
        `0${minutes + (reservationDuration % 60)}` :
        minutes + (reservationDuration % 60);
      const location = "Kamptoyoyo"
      const date = resProps.date
      const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      const image = "https://img.grouponcdn.com/deal/2WQR2TPTRTqn8hKG8ZZ2Wqd7ZRtR/2W-1400x840/v1/c700x420.jpg" 
      const reservationType = "One Time"
      const amount = "USD 50" 
      const reservationId = Math.random().toString(36).substring(2, 10).toUpperCase(); // Generate a random string and convert it to uppercase
      const myprops = {reservationId, date, time, startHour, startMinutes, endHour, endMinutes, location, description, reservationDuration, image, amount, reservationType}
      
      
      const targetObject = {
        date: date,
        startHour: startHour,
      };
      // const isSubsetInAnyObject = resavations.some(superObject => isSubset(subsetObject, subsetObject))
      console.log(targetObject)
      console.log(resavations)
      const foundObject = resavations?.find((obj) => {
        return (
          obj.date.substring(0, 10) === targetObject.date && // Compare date part
          parseInt(obj.startHour) === targetObject.startHour // Compare startHour
        );
      });
      
      if (foundObject) {
        console.log("Found:", foundObject);
      } else {
        console.log("Not found");
        if(resProps.location === location){
          // !isSubsetInAnyObject &&
            reservations.push(
                <Pitch {...myprops}/>
            )
          }else{
              return
          }
      }

    }

    // setresavationProps(pre=>({...pre, date: formattedDate, location: values.location}))

    // setreservationCount(pre=>(reservations.length))
    return reservations;
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Slots</h2>
      <h3 style={{ textAlign: 'center' }}>This facility has {reservationCount} following slots open for booking</h3>

        <Row gutter={16} style={{ padding: '0 60px' }}>
            {generateReservations()}
        </Row>
    </div>
  );
};

export default Reservation;
