import React, { useState } from 'react';
import { Card, Row, Col, Input, Button, List, Avatar } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import { controls } from '~/shared/routing';
import { AppShell, Header } from '~/shared/ui';

interface User {
  id: string;
  name: string;
  avatar: string;
}

interface Message {
  id: string;
  text: string;
  user: User;
}

export const RoomPage = () => {
  const [message, setMessage] = useState<string>('');
  const [chatMessages, setChatMessages] = useState<Message[]>([]);
  const [users, setUsers] = useState<User[]>(usersList);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      const currentUser = users[0]; // Assuming the first user is the current user
      const newMessage: Message = {
        id: Date.now().toString(),
        text: message,
        user: currentUser,
      };
      setChatMessages([...chatMessages, newMessage]);
      setMessage('');
    }
  };

  return (
    <AppShell top={<Header />}>
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '32px 12px' }}>
        <Button
          style={{
            marginBottom: '24px',
          }}
          type="link"
          onClick={() => controls.back()}
        >
          <LeftOutlined />
          Back
        </Button>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Card title="Video Player" style={{ height: '300px' }}>
              Place for video player
            </Card>
          </Col>
          <Col span={12}>
            <Card title="Users" style={{ height: '300px', overflow: 'hidden' }}>
              <List<User>
                dataSource={users}
                renderItem={(user) => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={<Avatar src={user.avatar} />}
                      title={user.name}
                    />
                  </List.Item>
                )}
                style={{ overflowY: 'scroll', maxHeight: '250px' }}
              />
            </Card>
          </Col>
        </Row>
        <div style={{ marginTop: '16px' }}>
          <Card title="Chat" style={{ height: '100%' }}>
            <List<Message>
              dataSource={chatMessages}
              renderItem={(message) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar src={message.user.avatar} />}
                    title={message.user.name}
                    description={message.text}
                  />
                </List.Item>
              )}
              style={{ overflowY: 'scroll', height: '250px' }}
            />
            <div style={{ marginTop: '16px' }}>
              <div style={{ width: '100%', display: 'flex' }}>
                <Input
                  value={message}
                  onChange={handleInputChange}
                  style={{ flex: '1 1 auto' }}
                  placeholder="Type your message..."
                />
                <Button
                  onClick={handleSendMessage}
                  type="primary"
                  style={{ marginLeft: '12px' }}
                >
                  Send
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </AppShell>
  );
};

const usersList = [
  { id: '1', name: 'John', avatar: 'https://example.com/avatar1.jpg' },
  { id: '2', name: 'Jane', avatar: 'https://example.com/avatar2.jpg' },
  { id: '3', name: 'Mike', avatar: 'https://example.com/avatar3.jpg' },
];
