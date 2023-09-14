import { Button } from "antd";
import { Card } from "react-bootstrap";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import SignIn from "./SignIn";
import BackButton from "./BackButton";
import CalendarCard from "./Calender";
import { notification } from "antd";
import { InfoCircleOutlined } from '@ant-design/icons'
export default function Checkout({props, onClick }) {
    const { data: session } = useSession();
    const greenButtonStyle = {
        backgroundColor: '#24dc89',
        borderColor: '#24dc89',
        color: 'white',
        justify: 'flex'
      };
      const handleClick =() => {
        notification.open({
          message: 'Notification',
          description:"Contact admin for premium reservation",
          duration: 0,
          icon: <InfoCircleOutlined style={{ color: 'green' }} />,
        })};
    return (
      <div className="container">  
        <div className="row py-3">
          <div className="col-md-4 order-md-2 mb-4">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-muted">Reservation Details</span>
              <span className="badge badge-secondary badge-pill">3</span>
            </h4>
            <ul className="list-group mb-3">
              <li className="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6 className="my-0">Reservation date</h6>
                  <small className="text-muted">Date reserved</small>
                </div>
                <span className="text-muted">{props.date}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6 className="my-0">Start Time</h6>
                  <small className="text-muted">Reservation Start time</small>
                </div>
                <span className="text-muted">{props.startHour}:00hrs </span>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6 className="my-0">End Time</h6>
                  <small className="text-muted">Reservation End Time</small>
                </div>
                <span className="text-muted">{props.endHour}:00hrs</span>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6 className="my-0">Type</h6>
                  <small className="text-muted"></small>
                </div>
                <span className="text-muted">One Time reservation</span>
                
              </li>
              <li className="list-group-item d-flex justify-content-between lh-condensed">
                    <Button variant="outline-success" type="primary" block style={greenButtonStyle} onClick={handleClick}>Subscribe to premium </Button>
                </li>
              <li className="list-group-item d-flex justify-content-between bg-light">
                <div className="text-success overflow-auto">
                  <h6 className="my-0">Note</h6>
                  <small>Time is in 24 hours system</small>
                  <br></br>
                  <small>You can have weekly or monthly reservations with the premium subscription.</small>

                </div>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Total </span>
                <strong>{props.amount}</strong>
              </li>
            </ul>
  
            <div className="card p-2">
              <div className="input-group">
                {/* <input type="text" className="form-control" placeholder="Promo code" /> */}
                {/* <div className="input-group-append">
                  <button type="submit" className="btn btn-secondary">Redeem</button>
                </div> */}
                  {session?.user ? (
                    <Button type="primary" block style={greenButtonStyle} onClick={onClick}>Book now </Button>
                  ):(
                    <Button block style={greenButtonStyle}>
                      <SignIn text="Sign In to book" className="justify-center"/> 
                    </Button>
                    )
                  }
              </div>
            </div>
            <div className="card p-2">
              <div className="input-group">
                <BackButton />
              </div>
            </div>
          </div>
          <div className="col-md-8 order-md-1">
            <h4 className="mb-3">Reservation</h4>
            {/* <CalendarCard /> */}
            <Card >
                <Card.Img variant="top" src={props.image} style={{ height:'23rem' }}  />
                <Card.Body>
                    <Card.Title></Card.Title>
                    <Card.Text>
                    {props.description}
                    </Card.Text>
                </Card.Body>
            </Card>
            
          </div>
        </div>
      </div>
    );
  }
  