import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';
import { Form, Input, Button, Space } from 'antd';

export const SignUpPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Form name="sign-up" initialValues={{ remember: true }}>
        <h2 style={{ textAlign: 'center' }}>Sign Up</h2>

        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Username" />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[
            { required: true, message: 'Please input your email!' },
            { type: 'email', message: 'Please enter a valid email!' },
          ]}
        >
          <Input prefix={<MailOutlined />} placeholder="Email" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="Password" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            Sign Up
          </Button>
        </Form.Item>

        <Form.Item>
          <Space>
            Already have an account? <Button type="link">Sign In</Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};
