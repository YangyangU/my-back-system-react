import { request } from './axios';

export const getData: () => Promise<dataType> = async () => {
    const { data } = await request.get('/home/getData');
    return data;
};
