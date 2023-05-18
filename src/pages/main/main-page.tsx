import { Input, Button, Card, Typography, Col, Row } from 'antd';
import { LinkOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { routes } from '~/shared/routing';
import { AppShell, Header } from '~/shared/ui';

export const MainPage = () => {
  const [cards, setCards] = useState(cardData);

  const addCard = () => {
    const newCard = {
      id: Date.now(),
      title: `Card ${cards.length + 1}`,
      description: `Description for Card ${cards.length + 1}`,
      img: 'https://placehold.co/600x300',
    };
    setCards([...cards, newCard]);
  };

  return (
    <AppShell top={<Header />}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '12px',
        }}
      >
        <div style={{ width: '100%', maxWidth: '800px', margin: '24px 0' }}>
          <Typography.Title style={{ textAlign: 'center' }}>
            Visum
          </Typography.Title>

          <div style={{ width: '100%', display: 'flex', marginBottom: '24px' }}>
            <Input
              size="large"
              style={{ flex: '1 1 auto' }}
              prefix={<LinkOutlined />}
              placeholder="Video URL to create room..."
            />
            <Button
              onClick={addCard}
              size="large"
              type="primary"
              style={{ marginLeft: '12px' }}
            >
              Create
            </Button>
          </div>
          <Row gutter={[16, 16]} justify="start">
            {cards.map((card) => (
              <Col key={card.id} xs={24} sm={12} md={8} lg={8} xl={8}>
                <Card
                  onClick={() => {
                    routes.room.open();
                  }}
                  style={{ width: '100%', cursor: 'pointer' }}
                  cover={
                    <img
                      src={card.img}
                      style={{ maxHeight: '200px', objectFit: 'cover' }}
                    />
                  }
                >
                  <Card.Meta
                    title={card.title}
                    description={card.description}
                  />
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </AppShell>
  );
};

const cardData = [
  {
    id: 1,
    title: 'Card 1',
    description: 'Description for Card 1',
    img: 'https://placehold.co/600x300',
  },
  {
    id: 2,
    title: 'Card 2',
    description: 'Description for Card 2',
    img: 'https://placehold.co/600x300',
  },
  {
    id: 3,
    title: 'Card 3',
    description: 'Description for Card 3',
    img: 'https://placehold.co/600x300',
  },
  {
    id: 4,
    title: 'Card 4',
    description: 'Description for Card 4',
    img: 'https://placehold.co/600x300',
  },
  {
    id: 5,
    title: 'Card 5',
    description: 'Description for Card 5',
    img: 'https://placehold.co/600x300',
  },
  {
    id: 6,
    title: 'Card 6',
    description: 'Description for Card 6',
    img: 'https://placehold.co/600x300',
  },
];
