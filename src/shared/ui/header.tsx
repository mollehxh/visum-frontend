import { BulbOutlined } from '@ant-design/icons';
import { Card, Row, Col, Button } from 'antd';

export const Header = () => {
  return (
    <Card
      style={{
        textAlign: 'center',
        borderRadius: 0,
        padding: '0 24px',
      }}
      bodyStyle={{ padding: '16px 0' }}
      bordered={false}
    >
      <Row align="middle" justify="space-between">
        <Col>
          <Button icon={<BulbOutlined />} />
        </Col>
      </Row>
    </Card>
  );
};
