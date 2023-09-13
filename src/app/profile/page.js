'use client'
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from 'react-bootstrap/Spinner';
export default function Home() {
    return (
      <div className='centered-div'>
        <Spinner animation="grow" size='xl'/>
      </div>
    )
}
