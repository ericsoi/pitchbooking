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
import { greenButtonStyle } from '@/utils/buttons';
import Table from 'react-bootstrap/Table';
export default function Home() {
    const { data: session } = useSession();
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
                                <Table responsive className='container' style={{ minHeight: '90vh' }}>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Reservation ID</th>
                                            <th>Pitch Name</th>
                                            <th>Date</th>
                                            <th>Time</th>
                                            <th>End Time</th>
                                            <th>Duration</th>
                                            <th>Total Cost</th>
                                            <th>Status</th>


                                        </tr>
                                    </thead>
                                    <tbody>
                                    {allPosts.filter(item => item.creator._id ===session?.user.id).map((item, index) => (
                                        <tr key={index}>
                                            <td>{index}</td>
                                            <td>{item.reservationId}</td>
                                            <td>{item.location}</td>
                                            <td>{item.date.slice(0, 10)}</td>
                                            <td>{item.startHour}:{item.startMinutes}</td>
                                            <td>{item.endHour}:{item.endMinutes}</td>
                                            <td>{item.duration} minuts</td>
                                            <td>{item.amount}</td>
                                            <td>Active</td>


                                        </tr>
                                            )
                                        )
                                    }
                                    </tbody>
                                </Table>
                                         
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
}