import type { StateCreator } from 'zustand';
import { create } from '@/store';

export type ExampleInitialState = {
    token?: string;
};

export type ExampleActions = {
    actions: {
        setToken: (value?: string) => void;
        cleanUp: () => void;
    };
};

export type ExampleStore = ExampleInitialState & ExampleActions;

const initialState: ExampleInitialState = {
    token: undefined,
};

const createStore: StateCreator<ExampleStore, [], []> = (set) => {
    return {
        ...initialState,
        actions: {
            setToken(token) {
                set({ token }, false);
            },
            cleanUp() {
                set(initialState, false);
            },
        },
    };
};

export const useGlobalStore = create<ExampleStore>()(createStore);
