import { Api } from '../plugins/axios';

export const AppService =  {
    rooms: () => Api().get('/'),
    createRoom: (param) => Api().post('/create',  param),
    joinRoom: (param) => Api().patch('/join', param)
};