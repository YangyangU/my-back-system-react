import { request } from './axios';

export const getData = async () => {
    const { data } = await request.get('/home.getData');
    return data;
};
