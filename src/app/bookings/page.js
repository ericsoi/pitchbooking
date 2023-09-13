'use client'
import { redirect, useRouter, useSearchParams } from 'next/navigation'
import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from 'react-bootstrap/Spinner';
import { useEffect, useState } from 'react';
import Checkout from '@/components/Checkout';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { notification } from 'antd';
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';
import SignIn from '@/components/SignIn';

export default function Home() {
  
  const router = useRouter();
  const { data: session } = useSession();
  const [submitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState({});
  const searchParams = useSearchParams();
  const [params, setParams] = useState({});

  const handleClick = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/reservation/new", {
        method: "POST",
        body: JSON.stringify({
          userId: session?.user.id,
          startHour:params.startHour, 
          startMinutes:params.startMinutes, 
          endMinutes:params.endMinutes, 
          endHour:params.endHour, 
          reservationType:params.reservationType, 
          location:params.location, 
          image:params.image, 
          description:params.description, 
          duration:params.reservationDuration, 
          amount:params.amount, 
          date:params.date, 
          createdAt:params.createdAt

        }),
      });
      if (response.status === 409) {
        notification.open({
          message: 'Notification',
          description:"Reservation Exists. Select a different reservation",
          duration: 0,
          icon: <CloseCircleOutlined style={{ color: 'red' }} />,

        });
      }
      if (response.ok) {
        notification.open({
          message: 'Notification',
          description:"Reservation Success",
          duration: 0,
          icon: <CheckCircleOutlined style={{ color: 'green' }} />,

        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // const handleClick = () => {
  //   console.log(params);
  // };
  useEffect(() => {
    // Create a new object to store the parameters
    const newParams = {};
    for (const [key, value] of searchParams.entries()) {
      newParams[key] = value;
    }
    // Update the state with the new parameters
    setParams(newParams);
  }, [searchParams]);
  const data = true
  if (!data) {
    redirect('/')
  }
  if(searchParams.get('time')){
    if(Object.keys(params).length === 0){
      return(
        <div className='centered-div'>
          <Spinner animation="grow" size='xl'/>
        </div>
      )
    }
  }
  return (
    <div className=''>
      {searchParams.get('time') && 
          <pre>
            <Checkout props={params} onClick={handleClick} />
          </pre>
      }
    </div>
  )
}