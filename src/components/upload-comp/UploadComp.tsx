import React, { useState } from "react";

import { Upload, Form, Col } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";

import "./styles.css";

type InputProps = {
  name: string;
  label: string;
};

const UploadComp = ({ name, label }: InputProps) => {
  const [imageUrl, setImageUrl] = useState(null);

  return (
    <div className="upload">
      <Col xs={24}>
        {/* <Form.Item name={name} label={label}> */}
          <Upload
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            maxCount={0}
          />
          {imageUrl ? (
            <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
          ) : (
            <div className="add-button">
              {/* <PlusOutlined /> */}
            </div>
          )}
        {/* </Form.Item> */}
      </Col>
    </div>
  );
};

export default UploadComp;
