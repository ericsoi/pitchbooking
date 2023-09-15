'use client'
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from 'react-bootstrap/Spinner';
import SideMenu from '@/components/Sidebar';
export default function Home() {
    return (
      <div >
            <div style={{display:'flex'}}>
                <SideMenu />
                <div className='container-fluid my-3'>Settings

                </div>
                
            </div>
      </div>
    )
}
