import { AppShell } from '~/shared/ui/app-shell';
import { Header } from '~/shared/ui/header';
import { SignUpPage } from '~/pages/sign-up';
import { SignInPage } from '~/pages/sign-in';
import { MainPage } from '~/pages/main';
import { RoomPage } from '~/pages/room';
import 'normalize.css';

export const Application = () => {
  return (
    <>
      <AppShell top={<Header />}>
        {/* <SignUpPage /> */}
        {/* <SignInPage /> */}
        {/* <MainPage /> */}
        <RoomPage />
      </AppShell>
    </>
  );
};
