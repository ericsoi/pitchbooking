import React from 'react';
import { Card, Col, Row, Space, Button} from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Redirect } from 'next';
import { useRouter } from 'next/navigation';
import { Image } from 'react-bootstrap';
const { Meta } = Card;
const greenButtonStyle = {
    backgroundColor: '#24dc89',
    borderColor: '#24dc89',
    color: 'white',
  };

export default function Pitch(props) {
  const router = useRouter()
  const queryParams = new URLSearchParams(props).toString();
  const targetUrl = `/bookings?${queryParams}`;


return( 
    <Col key={props.time} style={{ marginBottom: '16px' }} xs={24} sm={8} >
      {/* <Card title="Card title" bordered={false}> */}
        <Card 
            bordered={true}
            hoverable
            style={{ overflow: 'contain' }} // Adjust the height and overflow
            cover={<Image alt="example" src={props.image}/>}
        >
            
                <Meta
                    // title={props.location}
                    description={props.description}
                />
                <hr/>
                <Row>
                <Col span={12}><b>Time</b></Col>
                    <Col span={12}>{props.startHour}:{props.startMinutes} - {props.endHour}:{props.endMinutes - 30}</Col>
                </Row>

                {/* <Row>
                    <Col span={12}><b>Billed Duration</b></Col>
                    <Col span={12}>{props.reservationDuration- 30} minutes </Col>
                </Row> */}
           
                <Button type="primary" block onClick={() => router.push(targetUrl)} style={greenButtonStyle}>
                    Book Now
                </Button>

      </Card>
    </Col>
)};


// {time, startHour, startMinutes, endHour, endMinutes, location, description}