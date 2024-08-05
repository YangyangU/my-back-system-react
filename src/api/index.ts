import { request } from './axios';

export const getData: () => Promise<dataType> = async () => {
    const { data } = await request.get('/home/getData');
    return data;
};

export const getUser: (config: string) => Promise<{
    code: number;
    count: number;
    list: userType[];
}> = async (config) => {
    const { data } = await request.get(`/home/getUser?name=${config}`);
    return data;
};
