import { Layout } from 'antd';

export const AppShell = ({ top, children }: any) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      {top}
      <Layout.Content>{children}</Layout.Content>
    </Layout>
  );
};
