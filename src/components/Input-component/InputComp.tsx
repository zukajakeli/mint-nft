import React from "react";

import { Input, Form, Col } from "antd";

type InputProps = {
  name: string;
  label: string;
};

const columnStyles = { xs: 24, lg: 12 };

const InputComp = ({ name, label }: InputProps) => {
  return (
    <Col {...columnStyles}>
      <Form.Item name={name} label={label} rules={[{ required: true }]}>
        <Input placeholder={label} />
      </Form.Item>
    </Col>
  );
};

export default InputComp;
