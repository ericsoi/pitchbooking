'use client'

import { Image, NavDropdown  } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import styles from '../styles/Navbar.module.css';
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { useState, useEffect } from 'react';
function Navigation() {
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

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
            /><b>{'San Siro'}</b>
          </Navbar.Brand>

          <Nav>
           <NavDropdown title={
              <Image 
                alt={session?.user.name || "profile"}
                src={session?.user.image || "/img/person.svg"}
                width="30"
                height="30"
                className="d-inline-block align-center rounded-circle"
              />
              
              } id="basic-nav-dropdown" >
                {session?.user ? (
                  <>
                    <NavDropdown.Item href="/profile">{session?.user.name} Profile</NavDropdown.Item>
                    <NavDropdown.Item href="/reservations">My reservations</NavDropdown.Item>
                    <NavDropdown.Item href="/dashboard">Dashboard</NavDropdown.Item>

                    {/* <NavDropdown.Item onClick={signOut({ callbackUrl:"/"})} >Sign Out</NavDropdown.Item> */}
                    <NavDropdown.Item onClick={() => signOut({ callbackUrl: "/" })}>Sign Out</NavDropdown.Item>

                  </>
                ):(
                  <>
                  {providers &&
                      Object.values(providers).map((provider) => (
                        <NavDropdown.Item
                            type='button'
                            key={provider.name}
                            onClick={() => {
                              signIn(provider.id);
                            }}
                            className='black_btn'
                        >
                        Sign in
                      </NavDropdown.Item>
                    ))}
                  </>

                )}
            </NavDropdown>
           
          </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;