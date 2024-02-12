import MovieReducer from './MovieReducer';
import { createContext, useReducer } from 'react';

const INITIAL_STATE = {
    movies: [],
    isFetching: false,
    error: false,
    };

export const MovieContext = createContext(INITIAL_STATE);

export const MovieContextProvider = ({ children }) => {   //MovieContextProvider component that uses the MovieReducer and provides a MovieContext.Provider component with the value prop set to the result of the useReducer() hook.
    const [state, dispatch] = useReducer(MovieReducer, INITIAL_STATE);

    return (
        <MovieContext.Provider     //The component returns the MovieContext.Provider component with the value prop set to an object containing the state and dispatch properties, and the children as its children.
            value={{
                movies: state.movies,
                isFetching: state.isFetching,
                error: state.error,
                dispatch,
            }}
        >
            {children}
        </MovieContext.Provider>
    );
}
