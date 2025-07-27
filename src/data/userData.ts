export interface User {
  username: string;
  password: string;
  role: 'admin' | 'user';
}

export const users: User[] = [
  {
    username: 'admin',
    password: '123456',
    role: 'admin',
  },
  {
    username: 'worker1',
    password: 'worker123',
    role: 'user',
  },
];
