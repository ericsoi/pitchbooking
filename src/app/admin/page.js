'use client'
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from 'react-bootstrap/Spinner';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import SideMenu from '@/components/Sidebar';
import { BarChart, LineChart } from '@mui/x-charts';
import { useSession } from 'next-auth/react';
import SignIn from '@/components/SignIn';
import { greenButtonStyle } from '@/utils/buttons';
import { Button } from 'antd';
export default function Home() {
    const { data: session } = useSession();
    const [isLoading, setIsLoading] = useState(true);
    const [allReservations, setAllReservations] = useState([]);
    const [allUsers, setAllUsers] = useState([]);
    const fetchPosts = async () => {
    try {
        const response = await fetch("/api/reservation");
        const data = await response.json();

        if(data){
            setAllReservations(data);
            setIsLoading(false);
        }else{
            setAllReservations([]);
            setIsLoading(false);
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
    }
    try {
        const userresponse = await fetch("/api/users/all");
        const userdata = await userresponse.json();

        if(userdata){
          setAllUsers(userdata);
          setIsLoading(false);
        }else{
          setAllUsers([]);
          setIsLoading(false);
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
    }

    };
  
    useEffect(() => {
        fetchPosts();
    }, [allReservations]);
    const [isSmallDevice, setisSmallDevice] = useState() // Adjust the breakpoint as needed

    useEffect(() => {
        setisSmallDevice(window.innerWidth <= 768)
    }, [])
    const xAxisConfig = {
      id: 'Reservations',
      data: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      scaleType: 'band',
    };
  
    const seriesConfig = {
      label: 'Reservations',
      data: [2, 5, 3, 7, 9, 4, 9],
    };
  
    const chartWidth = isSmallDevice ? 300 : 900; // Adjust the width for small devices

    const myarr = [
        {name:'Onetime Reservations', value:allReservations.length, bg:'primary'},
        {name:'Premium Reservations', value:"-", bg:'success'},
        {name:'Users', value:allUsers.length, bg:'secondary'},
        {name:'Transactions', value:"-", bg:'danger'},
    ];
    return (
      <div >    
        {session?.user ? (
            <div style={{display:'flex'}}>
                <SideMenu />
                <div className='container-fluid my-3'>Home
                    <Row xs={1} md={4} className="g-4">
                        {myarr.map((item, idx) => (
                            <Col key={idx}>
                                <Card bg={item.bg} text="white">
                                    <Card.Header>{item.name}</Card.Header>
                                        <Card.Body>
                                            <Card.Text className="h6 text-center">
                                                {item.value}
                                            </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                    <BarChart
                        xAxis={[xAxisConfig]}
                        series={[seriesConfig]}
                        width={chartWidth}
                        height={400}
                    />
                    <LineChart
                        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                        series={[
                            {
                            label:"Transactions",
                            data: [2, 5.5, 2, 8.5, 1.5, 5],
                            },
                        ]}
                        width={chartWidth}
                        height={300}
                    />
                </div>
                
            </div>
        ):(
            <div className='centered-div text-center'>
                <Button type="dashed" style={greenButtonStyle}>
                    <SignIn text="Sign In to Continue" className="justify-center"/> 
                </Button>
            </div>
        )}
      </div>
    )
}
