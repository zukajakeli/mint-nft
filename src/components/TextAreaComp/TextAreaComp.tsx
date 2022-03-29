import React from "react";

import { Input, Form, Col } from "antd";

const { TextArea } = Input;

type InputProps = {
  name: string;
  label: string;
};


const TextAreaComp = ({ name, label }: InputProps) => {
  return (
    <Col xs={24}>
      <Form.Item name={name} label={label}>
        <TextArea placeholder={label} />
      </Form.Item>
    </Col>
  );
};

export default TextAreaComp;
