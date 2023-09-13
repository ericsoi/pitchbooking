'use client'
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from 'react-bootstrap/Spinner';
import Link from 'next/link';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { ListGroup } from 'react-bootstrap';
export default function Home() {
    const [allPosts, setAllPosts] = useState([]);
    const fetchPosts = async () => {
      const response = await fetch("/api/reservation");
      const data = await response.json();
  
      setAllPosts(data);
    };
  
    useEffect(() => {
      fetchPosts();
    }, []);

    if (allPosts.length > 0){
        return (
            <Row xs={1} md={2} className="container  py-5 center">
            {allPosts.map((item, index) => (
              <Col key={index}>
                <Card  className="mb-2" bg='success'>
                  {/* <Card.Img variant="top" src={item.image} /> */}
                  <Card.Body>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <Row xs={1} md={2}>
                                <Col>
                                    Pitch
                                </Col>
                                <Col>
                                    {item.location}
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row xs={1} md={2}>
                                <Col>
                                    Date
                                </Col>
                                <Col>
                                    {item.date.slice(0, 10)}
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row xs={1} md={2}>
                                <Col>
                                    Start Time
                                </Col>
                                <Col>
                                    {item.startHour}:{item.startMinutes}
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row xs={1} md={2}>
                                <Col>
                                    End Time
                                </Col>
                                <Col>
                                    {item.endHour}:{item.endMinutes}
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row xs={1} md={2}>
                                <Col>
                                    Duration
                                </Col>
                                <Col>
                                    {item.duration} minuts
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row xs={1} md={2}>
                                <Col>
                                    Status
                                </Col>
                                <Col>
                                   Active
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    </ListGroup>
                   
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
      )
    }else{
        return(
            <div className='centered-div text-center'>
            <div>
              You dont have any reservation<br></br>
              <Link href={'/'}>  Click here to book</Link>
            </div>
          </div>
        )
    }
}



    
