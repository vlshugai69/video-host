import { create as originalCreate } from 'zustand';
import type { StateCreator } from 'zustand';
import type { DevtoolsOptions } from 'zustand/middleware';

const storeResetFns = new Set<() => void>();

export const resetAllStores = () => {
    storeResetFns.forEach((resetFn) => {
        resetFn();
    });
};

// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-constraint
export const create = (<T extends unknown>() => {
    return (stateCreator: StateCreator<T>) => {
        const store = originalCreate(stateCreator);
        const initialState = store.getState();

        storeResetFns.add(() => {
            store.setState(initialState, true);
        });

        return store;
    };
}) as typeof originalCreate;

export const setDevtoolsOptions = (name: string): DevtoolsOptions => {
    return { name, serialize: { options: true } };
};
