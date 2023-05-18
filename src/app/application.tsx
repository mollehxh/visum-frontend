import { RouterProvider } from 'atomic-router-react';
import { Pages } from '~/pages';
import { AppShell, Header } from '~/shared/ui';
import { router } from '~/shared/routing';
import 'normalize.css';
import './index.css';

export const Application = () => {
  return (
    <>
      <RouterProvider router={router}>
        <Pages />
      </RouterProvider>
    </>
  );
};
