import axios from "axios";
import { deleteMovieFailure, deleteMovieStart, deleteMovieSuccess, getMoviesFailure,getMoviesStart,getMoviesSuccess,createMovieFailure,createMovieStart,createMovieSuccess } from "./MovieActions";
const server = process.env.REACT_APP_SERVER_URL || 'http://localhost:5000/api/'
//get movies
export const getMovies = async (dispatch) => {
    dispatch(getMoviesStart());
    try {
        const res = await axios.get(server + "movies", {
            headers: {
                token:
                "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        dispatch(getMoviesSuccess(res.data));
    } catch (err) {
        dispatch(getMoviesFailure());
    }
}

//create movie
export const createMovie = async (movie, dispatch) => {         //dispatch is a function that is used to call the actions in the reducer function.
    dispatch(createMovieStart());
    try {      //try block is used to write the code that may throw an error. If there is an error, the catch block will be executed.
        const res = await axios.post(server + "movies", movie, {  //axios.post is used to send the data to the server. The first argument is the URL of the server and the second argument is the data that is to be sent to the server. The third argument is the headers that are to be sent to the server.
            headers: {
                token:
                "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        dispatch(createMovieSuccess(res.data));
    } catch (err) {
        dispatch(createMovieFailure());
    }

    //try and catch block is used to handle the errors. If there is an error, the catch block will be executed and the error will be passed to the dispatch function. 
}

//delete movie
export const deleteMovie = async (id, dispatch) => {
    dispatch(deleteMovieStart());
    try {
        await axios.delete(server + "movies/" + id, {
            headers: {
                token:
                "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        dispatch(deleteMovieSuccess(id));
    } catch (err) {
        dispatch(deleteMovieFailure());
    }
}