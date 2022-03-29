import React from "react";
import { Form, Row, Button } from "antd";

import InputComp from "../Input-component/InputComp";
import TextAreaComp from "../TextAreaComp/TextAreaComp";
import UploadComp from "../upload-comp/UploadComp";

const MintForm = () => {
  return (
    <Form
      layout="vertical"
      onFinish={(values) => {
          const formValues = {...values}
          formValues.date_of_creation = new Date();
        console.log("values", formValues);
      }}
    >
      <Row align="middle">
        <UploadComp name="picture" label="Upload picture" />
      </Row>

      <Row gutter={24}>
        <InputComp name="asset_id" label="Asset Id" />
        <InputComp name="name" label="Name" />
      </Row>

      <Row gutter={24}>
        <InputComp name="collection" label="Collection Name" />
        <InputComp name="supply" label="Number of copies" />
      </Row>

      <Row gutter={24}>
        <InputComp name="external_link" label="Link your item web page" />
        <InputComp name="royalties" label="Amount of royalty" />
      </Row>

      <Row>
        <TextAreaComp name="description" label="Description" />
      </Row>

      <Button type="primary" htmlType="submit">
        Mint NFT
      </Button>
    </Form>
  );
};

export default MintForm;
