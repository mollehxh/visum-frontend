import { SignInForm } from '~/features/auth/sign-in/sign-in-form';
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
        <SignInForm />
      </div>
    </AppShell>
  );
};
