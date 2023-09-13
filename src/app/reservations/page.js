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
import { Button } from 'antd';
import SignIn from '@/components/SignIn';
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

export default function Home() {
    const { data: session } = useSession();
    const greenButtonStyle = {
        backgroundColor: '#24dc89',
        borderColor: '#24dc89',
        color: 'white',
        justify: 'flex'
      };
    const [isLoading, setIsLoading] = useState(true);
    const [allPosts, setAllPosts] = useState([]);
    const fetchPosts = async () => {
    try {
        const response = await fetch("/api/reservation");
        const data = await response.json();
        if(data){
          setAllPosts(data);
          setIsLoading(false);
        }else{
          setAllPosts([]);
          setIsLoading(false);
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
    }

    };
  
    useEffect(() => {
        fetchPosts();
    }, [allPosts]);
    return(
        <>
            {session?.user ? (
                <>
                {isLoading?(
                    <div className='centered-div'>
                        <Spinner animation="grow" size='xl'/>
                    </div>
                    ):(allPosts.length === 0 ? (
                        <div className='centered-div text-center'>
                            <div>
                                You dont have any reservation<br></br>
                                <Link href={'/'}>  Click here to book</Link>
                            </div>
                        </div>
                        ):(
                            <>
                                <Row xs={1} md={2} className="container  py-5 center">
                                    {allPosts.filter(item => item.creator._id ===session?.user.id).map((item, index) => (
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
                                                            {/* {JSON.stringify(item.creator._id)} */}

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
                            </>
                        )
                    )
                }
                </>
            ):(
                <div className='centered-div text-center'>
                    <Button type="dashed" style={greenButtonStyle}>
                        <SignIn text="Sign In to View your reservations" className="justify-center"/> 
                    </Button>
                </div>
            )}
        </>
    )
    // {isLoading ? (
    //     <div className='centered-div'>
    //         <Spinner animation="grow" size='xl'/>
    //     </div>
    // ):()

    // if(session?.user){
    //     if (allPosts.length > 0){
    //         return (
            //     <Row xs={1} md={2} className="container  py-5 center">
            //     {allPosts.map((item, index) => (
            //     <Col key={index}>
            //         <Card  className="mb-2" bg='success'>
            //         {/* <Card.Img variant="top" src={item.image} /> */}
            //         <Card.Body>
            //             <ListGroup variant="flush">
            //                 <ListGroup.Item>
            //                     <Row xs={1} md={2}>
            //                         <Col>
            //                             Pitch
            //                         </Col>
            //                         <Col>
            //                             {item.location}
            //                         </Col>
            //                     </Row>
            //                 </ListGroup.Item>
            //                 <ListGroup.Item>
            //                     <Row xs={1} md={2}>
            //                         <Col>
            //                             Date
            //                         </Col>
            //                         <Col>
            //                             {item.date.slice(0, 10)}
            //                         </Col>
            //                     </Row>
            //                 </ListGroup.Item>
            //                 <ListGroup.Item>
            //                     <Row xs={1} md={2}>
            //                         <Col>
            //                             Start Time
            //                         </Col>
            //                         <Col>
            //                             {item.startHour}:{item.startMinutes}
            //                         </Col>
            //                     </Row>
            //                 </ListGroup.Item>
            //                 <ListGroup.Item>
            //                     <Row xs={1} md={2}>
            //                         <Col>
            //                             End Time
            //                         </Col>
            //                         <Col>
            //                             {item.endHour}:{item.endMinutes}
            //                         </Col>
            //                     </Row>
            //                 </ListGroup.Item>
            //                 <ListGroup.Item>
            //                     <Row xs={1} md={2}>
            //                         <Col>
            //                             Duration
            //                         </Col>
            //                         <Col>
            //                             {item.duration} minuts
            //                         </Col>
            //                     </Row>
            //                 </ListGroup.Item>
            //                 <ListGroup.Item>
            //                     <Row xs={1} md={2}>
            //                         <Col>
            //                             Status
            //                         </Col>
            //                         <Col>
            //                         Active
            //                         </Col>
            //                     </Row>
            //                 </ListGroup.Item>
            //             </ListGroup>
                    
            //         </Card.Body>
            //         </Card>
            //     </Col>
            //     ))}
            // </Row>
    //     )
    //     }else{
    //         return(
                // <div className='centered-div text-center'>
                //     <div>
                //         You dont have any reservation<br></br>
                //         <Link href={'/'}>  Click here to book</Link>
                //     </div>
                // </div>
    //         )
    //     }
    // }else{
    //     return(
    //         <div className='centered-div text-center'>
    //             <Button type="dashed" style={greenButtonStyle}>
    //                   <SignIn text="Sign In to View your reservations" className="justify-center"/> 
    //             </Button>
    //         </div>
    //     )
    // }
}



    
