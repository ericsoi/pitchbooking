"use client"
import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { FiMenu, FiArrowLeftCircle, FiArrowRightCircle, FiUsers, FiSettings, FiHome, FiDollarSign, FiBook} from 'react-icons/fi';
import Link from 'next/link';

function SideMenu() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Sidebar collapsed={collapsed} style={{minHeight:"95vh"}}>
      <Menu iconShape="square" className='my-4'>
      <Link a href='/admin' style= {{ textDecoration: 'none', color:'black' }}>
            <MenuItem icon={<FiMenu onClick={toggleSidebar}/>} >
            {collapsed ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
            
            </MenuItem>
        </Link> 
            <SubMenu label="Reservations" icon={<FiBook />}>
                <Link a href='/admin/onetime' style= {{ textDecoration: 'none', color:'black' }}>
                    <MenuItem>one-time</MenuItem>
                </Link>
                <Link a href='/admin/premium' style= {{ textDecoration: 'none', color:'black' }}>
                <   MenuItem>premium</MenuItem>
                </Link>

            </SubMenu>
        <Link a href='/admin/users' style= {{ textDecoration: 'none', color:'black' }}>
            <MenuItem icon={<FiUsers />}>
                Users
            </MenuItem>
        </Link>
        <Link a href='/admin/transactions' style= {{ textDecoration: 'none', color:'black' }}>
            <MenuItem icon={<FiDollarSign />}>
                Transactions
            </MenuItem>
        </Link> 
        <Link a href='/admin/settings' style= {{ textDecoration: 'none', color:'black' }}>
            <MenuItem icon={<FiSettings />}>
                Settings
            </MenuItem>
        </Link> 
        
      </Menu>
    </Sidebar>
  );
}

export default SideMenu;
