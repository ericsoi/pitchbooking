'use client'

import { Image, NavDropdown  } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import styles from '../styles/Navbar.module.css';
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { useState, useEffect } from 'react';
import SignIn from './SignIn';
import {LoginOutlined} from '@ant-design/icons'
function Navigation() {
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  return (

    // <Navbar bg="light" expand="lg">
    //   <Navbar.Brand href="#home">
    //     <Image src="/img/logo.png" width="30" height="30" alt="Logo" />
    //   </Navbar.Brand>
    //   <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //   <Navbar.Collapse id="basic-navbar-nav">
    //     <Nav className="ml-auto">
    //       <NavDropdown title={<Image src="/img/logo.png" width="30" height="30" alt="Logo" />} id="basic-nav-dropdown" >
    //         <Image src="/img/logo.png" width="30" height="30" alt="Logo" />

    //         <NavDropdown.Item href="#action/1">Action 1</NavDropdown.Item>
    //         <NavDropdown.Item href="#action/2">Action 2</NavDropdown.Item>
    //         <NavDropdown.Divider />
    //         <NavDropdown.Item href="#action/3">Separated link</NavDropdown.Item>
    //       </NavDropdown>
    //     </Nav>
    //   </Navbar.Collapse>
    // </Navbar>

    <Navbar collapseOnSelect expand="lg" className={styles.container} data-bs-theme="dark">
      <Container>
      <Navbar.Brand href="/">
            <Image
              alt="logo"
              src="/img/icon.png"
              width="50"
              height="50"
              className="d-inline-block align-center"
            />{'SanSiro'}
          </Navbar.Brand>

          <Nav>
          {session?.user ? (
           <NavDropdown title={
              <Image 
                alt={session?.user.name || "profile"}
                src={session?.user.image || "/img/person.svg"}
                width="30"
                height="30"
                className="d-inline-block align-center rounded-circle"
              />
              
              } id="basic-nav-dropdown" >
                  <>
                    <NavDropdown.Item href="/profile">{session?.user.name} Profile</NavDropdown.Item>
                    <NavDropdown.Item href="/reservations">My reservations</NavDropdown.Item>
                    <NavDropdown.Item href="/dashboard">Dashboard</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => signOut({ callbackUrl: "/" })}>Sign Out</NavDropdown.Item>

                  </>
              </NavDropdown>
          ):( <>
                  <SignIn text="Sign In" style={{color:'white'}}/>  
              </>

          )}
           
          </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;