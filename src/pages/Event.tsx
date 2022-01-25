import React, { useState } from 'react'
import EventCalendar from '../components/EventCalendar'
import { Layout, Row, Button } from 'antd';
import Modal from 'antd/lib/modal/Modal';


const Event: React.FC = () => {
    const [modalVisible, setModalVisible] = useState(false)
    return(
        <Layout>
           <EventCalendar events={[]}/>
           <Row justify='center'>
                <Button onClick={() => setModalVisible(true)} type="primary"> Add event</Button>
           </Row>
           <Modal 
            title="Add event"
            visible={modalVisible} 
            footer={null}  
            onCancel={() => setModalVisible(false)} 
           >

           </Modal>
        </Layout>
    )
}

export default Event