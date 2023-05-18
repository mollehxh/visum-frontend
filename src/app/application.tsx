import { SignUpPage } from '~/pages/sign-up';
import { AppShell } from '~/shared/ui/app-shell';
import { Header } from '~/shared/ui/header';
import 'normalize.css';

export const Application = () => {
  return (
    <>
      <AppShell top={<Header />}>
        <SignUpPage />
      </AppShell>
    </>
  );
};
