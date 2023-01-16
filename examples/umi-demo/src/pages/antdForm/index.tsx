import React, { useMemo, useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';

const App: React.FC = () => {
  const [require, setRequire] = useState(false);

  const [form] = Form.useForm();

  // 动态拼装pattern的正则表达式
  const curRule = useMemo(
    () => {
      // json结构体中的rule转换成antd能识别的rule
      const ruleList = [] as any;
      // 业务规则新增的规则
      if (require) {
        if (
          !ruleList.some((rule) => {
            return rule.required;
          })
        ) {
          ruleList.push({
            type: 'any',
            required: true,
            message: '是必填',
          });
        }
      }
      else {
        form.validateFields(['password']);
      }
      return ruleList;
    },
    [require],
  );

  const onclick = () => setRequire(prev => !prev);

  return (
    <>
      <Button onClick={onclick}>Change</Button>
      <Form
        form={form}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Password" name="password" rules={curRule}>
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default App;
