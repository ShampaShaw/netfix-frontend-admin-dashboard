import axios from "axios";
import { getMoviesFailure,getMoviesStart,getMoviesSuccess } from "./MovieActions";
const server = process.env.REACT_APP_SERVER_URL || 'http://localhost:5000/api/'

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