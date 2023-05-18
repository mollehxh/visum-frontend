import { createEffect, createEvent, createStore, sample } from 'effector';
import { not } from 'patronum';
import { getSessionFx } from '~/entities/session/model';

export const usernameChanged = createEvent<string>();
export const emailChanged = createEvent<string>();
export const passwordChanged = createEvent<string>();
export const formSubmitted = createEvent();

const signUpFx = createEffect(async () => {
  await new Promise((res) => setTimeout(res, 1000));
});

export const $username = createStore('');
export const $email = createStore('');
export const $password = createStore('');

export const $formPending = signUpFx.pending;

$username.on(usernameChanged, (_, username) => username);
$email.on(emailChanged, (_, email) => email);
$password.on(passwordChanged, (_, password) => password);

sample({
  clock: formSubmitted,
  filter: not($formPending),
  target: signUpFx,
});

sample({
  clock: signUpFx.done,
  target: getSessionFx,
});
