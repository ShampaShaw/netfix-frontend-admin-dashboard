import React, { useContext, useState,useEffect } from 'react'
import './newList.css'
import { storage } from '../../firebase';
import { createMovie,getMovies } from '../../context/movieContext/apiCalls';
import { MovieContext } from '../../context/movieContext/movieContext';
import { ListContext } from '../../context/listContext/ListContext';
import { useNavigate } from 'react-router-dom';
import { createList } from '../../context/listContext/apiCalls';

export const NewList = () => {
  const [list, setList] = useState(null)
  const navigate = useNavigate()  

  const { dispatch } = useContext(ListContext);   //useDispatch is a hook that is used to get the dispatch function from the context. The dispatch function is used to call the actions in the reducer function.
  const { movies, dispatch: dispatchMovie } = useContext(MovieContext);   //useDispatch is a hook that is used to get the dispatch function from the context. The dispatch function is used to call the actions in the reducer function.
  // const handleChange = (e) => {
  //   const value = e.target.value;
  //   setMovie({ ...movie, [e.target.name]: value });
  // };

  useEffect(() => {
    getMovies(dispatchMovie);
  }, [dispatchMovie]);

  const handleChange = (e) => {
    const value = e.target.type === 'file' ? e.target.files[0] : e.target.value;
    console.log('Name:', e.target.name, 'Value:', value);
    setList((prev) => {
      return { ...prev, [e.target.name]: value };
    });
  };

  const handleSelect = (e) => {
    let value = Array.from(e.target.selectedOptions, (option) => option.value);
    setList({ ...list, [e.target.name]: value });
  };

  const handleSubmit = (e) => {   // This is the handleSubmit function that will be used to submit the form.
    e.preventDefault();   //The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
    createList(list,dispatch)
    navigate("/list")
  }

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New List</h1>
      <form className="addProductForm">
        <div className="formLeft">
          <div className="addProductItem">
            <label>Title</label>
            <input
              type="text"
              placeholder="Popular Movies"
              name="title"
              onChange={handleChange}
            />
          </div>
          <div className="addProductItem">
            <label>Genre</label>
            <input
              type="text"
              placeholder="action"
              name="genre"
              onChange={handleChange}
            />
          </div>
          <div className="addProductItem">
            <label>Type</label>
            <select name="type" onChange={handleChange}>
              <option>Type</option>
              <option value="movie">Movie</option>
              <option value="series">Series</option>
            </select>
          </div>
        </div>
        <div className="formRight">
          <div className="addProductItem">
            <label>Content</label>
            <select
              multiple
              name="content"
              onChange={handleSelect}
              style={{ height: "280px" }}
            >
              {movies.map((movie) => (
                <option key={movie._id} value={movie._id}>
                  {movie.title}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button className="addProductButton" onClick={handleSubmit}>
          Create
        </button>
      </form>
    </div>
  );
}