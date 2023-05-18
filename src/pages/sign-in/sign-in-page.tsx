import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Form, Input, Button, Card, Typography, Col, Row } from 'antd';
import { AppShell, Header } from '~/shared/ui';

export const SignInPage = () => {
  return (
    <AppShell top={<Header />}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <Card
          style={{ width: '90%', maxWidth: 400, padding: '12px 24' }}
          bordered={false}
        >
          <Form name="sign-up" initialValues={{ remember: true }}>
            <Typography.Title
              level={3}
              style={{ textAlign: 'center', margin: 0, marginBottom: 24 }}
            >
              Sign In
            </Typography.Title>

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
              rules={[
                { required: true, message: 'Please input your password!' },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: '100%' }}
              >
                Sign In
              </Button>
            </Form.Item>

            <Row justify="center">
              <Col>
                <Typography.Text>
                  Not registered? <Typography.Link>Sign Up</Typography.Link>
                </Typography.Text>
              </Col>
            </Row>
          </Form>
        </Card>
      </div>
    </AppShell>
  );
};
