import { Button, DatePicker, Form, Input, Row, Select } from "antd"
import React, { PropsWithChildren } from "react"
import { rules } from "../utils/rules"
import { Option } from 'antd/lib/mentions';
import { IUser } from "../models/IUser";

interface EventFormProps {
    guests: IUser[]
}

const EventForm: React.FC<EventFormProps> = (props: PropsWithChildren<EventFormProps>) => {
    return (
        <Form>
            <Form.Item
                label="Description event"
                name="Description"
                rules={[rules.required()]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Date event"
                name="date"
                rules={[rules.required()]}
            >
                <DatePicker />
            </Form.Item>
            <Form.Item>
                <Select>
                    {props.guests.map(guest => 
                        <Option value={guest.username}>{guest.username}</Option>)}
                </Select>
            </Form.Item>
            <Row justify="end">
                <Form.Item>
                    <Button type="primary" htmlType="submit"  >
                        Create
                    </Button>
                </Form.Item>
            </Row>
        </Form>
    )
}

export default EventForm