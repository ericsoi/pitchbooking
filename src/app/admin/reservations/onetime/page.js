'use client'
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from 'react-bootstrap/Spinner';
import SideMenu from '@/components/Sidebar';
import { useSession } from 'next-auth/react';
import { greenButtonStyle } from '@/utils/buttons';
import { Button } from 'antd';
import SignIn from '@/components/SignIn';
import { DataGrid } from '@mui/x-data-grid';
import Link from 'next/link';
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
    const columns= [
        { field: 'id', headerName: 'ID', width:60},
        // { field: 'avator', headerName: 'Avator',  options: {
        //     customBodyRender: (value) => (
        //       <img src={value} alt="Avatar" width="50" height="50" />
        //     ),
        //   },},
        { field: 'reservationId', headerName: 'Reservation Id' },
        { field: 'username', headerName: 'User Name' },
        { field: 'email', headerName: 'Email'},
        { field: 'location', headerName: 'Pitch'},
        { field: 'time', headerName: 'Time', width:30},
        { field: 'duration', headerName: 'Dutation', width:30},
        { field: 'reservationDate', headerName: 'Reservation Date', width:120},
        { field: 'datebooked', headerName: 'Booking Date',  width:120},
        { field: 'amount', headerName: 'Amount'},
        { field: 'status', headerName: 'Status'},

      ];
      
      const rows = allPosts.map((item, ind)=>({
            id:ind+1, 
            // avatar:item.creator.image,
            reservationId:item.reservationId, 
            username:item.creator.username,
            email:item.creator.email,
            location:item.location,
            time:item.startHour,
            duration:item.duration,
            reservationDate:item.date,
            datebooked:item.createdAt,
            amount:item.amount,
            status:item.status,
        })) 
    //   [
    //     { id: 1, lastName: 'Snow', firstName: 'Jon', email: "erick.soi@hotmail.com"},
    //     { id: 2, lastName: 'Lannister', firstName: 'Cersei', email: "erick.soi@hotmail.com"},
    //     { id: 3, lastName: 'Lannister', firstName: 'Jaime', email: "erick.soi@hotmail.com"},
    //     { id: 4, lastName: 'Stark', firstName: 'Arya', email: "erick.soi@hotmail.com"},
    //     { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', email: "erick.soi@hotmail.com" },
    //     { id: 6, lastName: 'Melisandre', firstName: 'Daenerys', email: "erick.soi@hotmail.com" },
    //     { id: 7, lastName: 'Clifford', firstName: 'Ferrara', email: "erick.soi@hotmail.com"},
    //     { id: 8, lastName: 'Frances', firstName: 'Rossini', email: "erick.soi@hotmail.com"},
    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', email: "erick.soi@hotmail.com"},
    //   ];
    return (
    <div >    
      {session?.user ? (
            <div style={{display:'flex'}}>
                <SideMenu />
                <div className='container-fluid my-3'>Onetime Reservations
                {isLoading?(
                    <div className='centered-div'>
                        <Spinner animation="grow" size='xl'/>
                    </div>
                    ):(allPosts.length === 0 ? (
                        <div className='centered-div text-center'>
                            <div>
                                No Reservations yet<br></br>
                                <Link href={'/admin'}>  Click here to go back</Link>
                            </div>
                        </div>
                    ):(
                    <div style={{ height: 500, width: '100%' }}>
                                                {/* {JSON.stringify(rows)} */}

                        <DataGrid
                            rows={rows}
                            columns={columns}
                            initialState={{
                            pagination: {
                                paginationModel: { page: 0, pageSize: 5 },
                            },
                            }}
                            pageSizeOptions={[5, 10]}
                            checkboxSelection
                        />
                    </div>
                ))}
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
