import React, { useState, useEffect } from 'react'
import EventCalendar from '../components/EventCalendar'
import { Layout, Row, Button } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import EventForm from '../components/EventForm';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { IEvent } from './../models/IEvent';


const Event: React.FC = () => {
    const [modalVisible, setModalVisible] = useState(false)
    const {fetchGuests, createEvent} = useActions()
    const {guests} = useTypedSelector(state => state.event)
    useEffect(() => {
        fetchGuests()
    }, [])

    const addNewEvent = (event: IEvent) => {
        setModalVisible(false)
        createEvent(event)
    }

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
               <EventForm guests={guests} submit={addNewEvent} />
           </Modal>
           
        </Layout>
    )
}

export default Event