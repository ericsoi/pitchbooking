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
export default function Home() {
    const columns= [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'firstName', headerName: 'First name' },
        { field: 'lastName', headerName: 'Last name' },
        { field: 'email', headerName: 'Email', type: 'email'},
        { field: 'fullName', headerName: 'Full name', sortable: false,
          valueGetter: (params) =>
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        },
      ];
      
      const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', email: "erick.soi@hotmail.com"},
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', email: "erick.soi@hotmail.com"},
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', email: "erick.soi@hotmail.com"},
        { id: 4, lastName: 'Stark', firstName: 'Arya', email: "erick.soi@hotmail.com"},
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', email: "erick.soi@hotmail.com" },
        { id: 6, lastName: 'Melisandre', firstName: 'Daenerys', email: "erick.soi@hotmail.com" },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', email: "erick.soi@hotmail.com"},
        { id: 8, lastName: 'Frances', firstName: 'Rossini', email: "erick.soi@hotmail.com"},
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', email: "erick.soi@hotmail.com"},
      ];
   const{data:session}= useSession()
    return (
    <div >    
      {session?.user ? (
            <div style={{display:'flex'}}>
                <SideMenu />
                <div className='container-fluid my-3'>Premium Reservations
                    <div style={{ height: 500, width: '100%' }}>
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
