import { AppShell } from '~/shared/ui/app-shell';
import { Pages } from '~/pages';
import { Header } from '~/shared/ui/header';
import { RouterProvider } from 'atomic-router-react';
import { router } from '~/shared/routing';
import 'normalize.css';
import './index.css';

export const Application = () => {
  return (
    <>
      <AppShell top={<Header />}>
        <RouterProvider router={router}>
          <Pages />
        </RouterProvider>
      </AppShell>
    </>
  );
};
