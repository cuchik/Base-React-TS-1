import { Request } from './request';

export const apiLogin = async (email: string, password: string) => {
  return Request.call({
    url: '/login',
    method: 'POST',
    data: { email, password },
  });
};
