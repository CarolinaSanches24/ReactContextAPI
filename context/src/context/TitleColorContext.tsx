import { createContext, ReactNode, useReducer } from 'react';

interface TitleColorState {
    color: string;
};

type TitleColorAction = { type: 'RED' | 'GREEN' | 'BLUE' };

export const TitleColorContext = createContext<{
    color: string;
    dispatch: React.Dispatch<TitleColorAction>;
}>({
    color: 'purple',
    dispatch: () => {}, 
});

export const TitleColorReducer = (state:TitleColorState, action:TitleColorAction) => {
    switch (action.type) {
        case "RED":
            return { ...state, color: "red" };
        case "GREEN":
            return { ...state, color: "green" };
        case "BLUE":
            return { ...state, color: "blue" };
        default:
            return state;
    };
};

export const TitleColorContextProvider = ({ children }:{children:ReactNode}) => {

    const [state, dispatch] = useReducer(TitleColorReducer, { color: "purple" });

    console.log("Cor do titulo", state);

    return <TitleColorContext.Provider value={{ ...state, dispatch }}>{children}</TitleColorContext.Provider>
};