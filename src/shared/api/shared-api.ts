import axios from 'axios';

export type User = {
  username: string;
  email: string;
  password: string;
};

// Function to register a new user
export const signUp = async (user: User) => {
  const response = await axios.post('http://127.0.0.1:3000/register', user);
  return response.data;
};

// Function to log in a user
export const signIn = async (user: Omit<User, 'username'>) => {
  const response = await axios.post('http://127.0.0.1:3000/login', user);
  return response.data;
};

// Function to log out the current user
export const signOut = async () => {
  const response = await axios.post('http://127.0.0.1:3000/logout');
  console.log(response.data);
};

// Function to get the current user
export const getSession = async (email: string | null) => {
  const response = await axios.post('http://127.0.0.1:3000/user', {
    email,
  });
  return response.data;
};

export const createRoom = async (videoId: string) => {
  const response = await axios.post('http://127.0.0.1:3000/room/create', {
    videoId,
  });
  return response.data;
};
