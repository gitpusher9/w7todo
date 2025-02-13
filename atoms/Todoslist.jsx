import { atom } from 'recoil';

export const Todos = atom({
    key: 'Todos',
    default: [{
        id: 1,
        text: 'Learn React',
        isComplete: false
    },
    {
        id: 2,
        text: 'Learn React',
        isComplete: false
    }]
});