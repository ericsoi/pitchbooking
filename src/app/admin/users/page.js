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
export default function Home() {
   const{data:session}= useSession()
    return (
    <div >    
      {session?.user ? (
            <div style={{display:'flex'}}>
                <SideMenu />
                <div className='container-fluid my-3'>Users

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
