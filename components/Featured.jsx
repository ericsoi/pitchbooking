import styles from '../styles/Featured.module.css';
import Image from 'next/image';
import { useState } from 'react';
import { Button, Modal, Select, Space, DatePicker, Form,Row, Col, Input } from 'antd';
import Reservation from './Reservation';
const Featured = () => {
  
  const blueButtonStyle = {
    backgroundColor: '#24dc89',
    borderColor: '#24dc89',
    color: 'white',
  };
  const [index, setIndex] = useState(0);
  const [resavationProps, setresavationProps] = useState({date:null, location:null})
  const images = [
    // '/img/featured.png',
    // '/img/featured2.png',
    // '/img/featured4.png',
    // '/img/IMG-20230829-WA0001.jpg',
    // '/img/IMG-20230829-WA0002.jpg',
    // '/img/IMG-20230829-WA0003.jpg',
    // '/img/IMG-20230829-WA0004.jpg',

  ];

  const handleArrow = (direction) => {
    if (direction === 'l') {
      setIndex(index !== 0 ? index - 1 : 2);
    }
    if (direction === 'r') {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };
  const [open, setOpen] = useState(false);

  const onFinish = (values) => {
    const formattedDate = new Date(values.date).toISOString().split('T')[0];
    setresavationProps(pre=>({...pre, date: formattedDate, location: values.location}))
    setOpen(true)
    //Can directly call props here
    

  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };



  return (
    <div className={styles.container}>
      <div
        className="searchbarmobile"
        style={{
          position: 'absolute',
          top: '40%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1,
          // backgroundColor:'#1e9061',
          opacity: 0.8,
          borderRadius:'10px',          
        }}
      >

        <div className="parent-div">
          <Row justify="center" align="middle">
            <Col>
              <div size="large" style={{ textAlign: 'center' }}><h2>Book a sports facility near you </h2></div>
            </Col>
          </Row>
          <Row justify="center" align="middle">
            <Col >
                <Space direction="vertical" size="large" >
                  <Form // {...layout}
                        name="basic"
                        initialValues={{
                          remember: true
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        
                      >
                    <Space.Compact size='large'>
                      <Form.Item
                        name="location"
                        rules={[
                          {
                            required: true,
                            message: 'Please select location!',
                          },
                        ]}
                      >
                      <Select
                          className="custom-input" 
                          name="location"
                          showSearch
                          style={{zIndex: 99999}}
                          size='large'
                          placeholder="Search location"
                          optionFilterProp="children"
                          options={[
                            {
                              key:'Kamptoyoyo',
                              value: 'Kamptoyoyo',
                              label: 'Kamptoyoyo',
                            },
                            {
                              key:'Ziwani',
                              value: 'Ziwani',
                              label: 'Ziwani',
                            },
                          ]}
                          
                        />
                        </Form.Item>
                        <Form.Item
                            name="date"
                            rules={[
                              {
                                required: true,
                                message: 'Please Select Date!',
                              },
                            ]}
                          >
                            <DatePicker size="large" name="date" className="custom-input" />
                          </Form.Item>
                          <Form.Item>
                            <Button type="primary" htmlType="submit" style={blueButtonStyle}>
                              Submit
                            </Button>
                          </Form.Item>
                      </Space.Compact>
                  </Form>
                </Space>
            </Col>
          </Row>
        </div>
        
      
      <Modal
        // title="Modal 1000px width"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
      >
        <Reservation {...resavationProps}/>
      </Modal>
      </div>
      <div
        className={styles.arrowContainer}
        style={{ left: 0 }}
        onClick={() => handleArrow('l')}
      >
        {/* <Image src="/img/arrowl.png" alt="" layout="fill" objectFit="contain" /> */}
      </div>
      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        
        {images.map((img, i) => (
          <div className={styles.imgContainer} key={i}>
            <Image src={img} alt="" layout="fill" objectFit="contain" />
          </div>
        ))}
      </div>
      <div
        className={styles.arrowContainer}
        style={{ right: 0 }}
        onClick={() => handleArrow('r')}
      >
        {/* <Image src="/img/arrowr.png" layout="fill" alt="" objectFit="contain" /> */}
      </div>
    </div>
  );
};

export default Featured;
