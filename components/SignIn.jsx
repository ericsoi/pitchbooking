import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { useState, useEffect } from 'react';
import { Button } from "antd";
import {LoginOutlined} from '@ant-design/icons'

const SignIn = (prop) => {
    const { data: session } = useSession();

    const [providers, setProviders] = useState(null);
  
    useEffect(() => {
      (async () => {
        const res = await getProviders();
        setProviders(res);
      })();
    }, []);
    return(
        <>
        {providers &&
            Object.values(providers).map((provider) => (
                <div key={provider.name}
                        onClick={() => {
                            signIn(provider.id);
                        }
                    }>
                    <LoginOutlined style={{ fontSize: '150%', cursor:'pointer', color:'white' }} className="d-inline-block align-center"/>
                        <Button
                            style={{color:'white'}}
                            type='button'
                            className='black_btn'
                        >
                            {prop.text}
                        </Button>
                </div>
          ))}
        </>
    )
}

export default SignIn