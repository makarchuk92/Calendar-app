import { Button, DatePicker, Form, Input, Row, Select } from "antd"
import React from "react"
import { rules } from "../utils/rules"
import { Option } from 'antd/lib/mentions';


const EventForm: React.FC = () => {
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
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>
                        Disabled
                    </Option>
                    <Option value="Yiminghe">yiminghe</Option>
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