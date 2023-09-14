'use client'
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from 'react-bootstrap/Spinner';
import Reservation from '@/components/Reservation';
import { useSearchParams } from 'next/navigation';
import BackButton from '@/components/BackButton';
export default function Home() {
    const searchParams = useSearchParams();
    const date = searchParams.get('date')
    const location = searchParams.get('location');

    return (
    //   <div className='centered-div'>
        <>
            <Reservation date={date} location={location} />
            <BackButton/>
        </>
        
        // {/* <Spinner animation="grow" size='xl'/> */}
    //   </div>
    )
}
