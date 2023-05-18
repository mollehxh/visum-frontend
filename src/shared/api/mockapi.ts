export type User = {
  username: string;
  email: string;
  password: string;
};

export const getSession = async (token: string) => {
  const response = await new Promise((res, rej) =>
    setTimeout(() => {
      if (token !== 'token') rej();
      res(true);
    }, 1000)
  );
  return response;
};

export const signIn = async (user: Omit<User, 'username'>) => {
  const response: string = await new Promise((res, rej) =>
    setTimeout(() => {
      if (user.email === 'mmm@mmm.mmm' && user.password === 'mmmmmm') {
        res('token');
      }
      rej();
    }, 1000)
  );
  return response;
};

export const signUp = async (user: User) => {
  const response = await new Promise((res, rej) =>
    setTimeout(() => {
      res('token');
    }, 1000)
  );
  return response;
};
