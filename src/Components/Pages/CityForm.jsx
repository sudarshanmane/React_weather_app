import { Button, Form, Input } from "antd";
import React from "react";
import "./cityform.scss";
import { SearchOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const CityForm = () => {
  const navigate = useNavigate();
  const onFinish = (values) => {
    navigate(`/home/weather/${values.city}`);
  };

  return (
    <div>
      <Form
        className="form"
        layout="vertical"
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <div className="formInput">
          <Form.Item
            id="ant_form_item"
            labelAlign="right"
            name="city"
            rules={[
              {
                required: true,
                message: "Please input your City Name!",
              },
            ]}
          >
            <Input
              size="large"
              style={{ borderColor: "black" }}
              prefix={<SearchOutlined />}
              placeholder="City Name to check the weather in your city"
            />
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default CityForm;
