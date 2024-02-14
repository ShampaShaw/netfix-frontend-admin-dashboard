import React from 'react'
import './product.css'
import { Link, useLocation } from 'react-router-dom'
import { Publish } from '@material-ui/icons'

export const Product = () => {
    const location = useLocation();   
    const movie = location.movie;  // get the movie from the location
    //console.log(movie)
  return (
    <div className='product'>
        <div className='productTitleContainer'>
            <h1 className='productTitle'>Movie</h1>
            <Link to='/newProduct'>
                <button className='productAddButton'>Create</button>
            </Link>
        </div>
        <div className='productTop'>
            <div className='productTopRight'>
                <div className='productInfoTop'>
                    <img className='productInfoImg' src={movie?.img} alt=''/>
                    <span className='productImage'>{movie?.title}</span>
                </div>
                <div className='productInfoBottom'>
                    <div className='productInfoItem'>
                        <span className='producInfoKey'>id:</span>
                        <span className='producInfoValue'>{movie?._id}</span>
                    </div>
                    <div className='productInfoItem'>
                        <span className='producInfoKey'>Genre:</span>
                        <span className='producInfoValue'>{movie?.genre}</span>
                    </div>
                    <div className='productInfoItem'>
                        <span className='producInfoKey'>Year:</span>
                        <span className='producInfoValue'>{movie?.year}</span>
                    </div>
                    <div className='productInfoItem'>
                        <span className='producInfoKey'>Limit:</span>
                        <span className='producInfoValue'>{movie?.limit}</span>
                    </div>
                </div>
            </div>
        </div>
        <div className='productBottom'>
            <form className='productForm'>
                <div className='productFormLeft'>
                    <label>Movie Title</label>
                    <input type='text' placeholder={movie?.title}/>
                    <label>Year</label>
                    <input type='text' placeholder={movie?.year}/>
                    <label>Genre</label>
                    <input type='text' placeholder={movie?.genre}/>
                    <label>Limit</label>
                    <input type='text' placeholder={movie?.limit}/>
                    <label>Trailer</label>
                    <input type='file' placeholder={movie?.trailer}/>
                    <label>Video</label>
                    <input type='file' placeholder={movie?.video}/>
                </div>
                <div className='productFormRight'>
                    <div className='productUpload'>
                        <img className='productUploadImg' src={movie?.img} alt=''/>
                        <label htmlFor='file'>
                            <Publish/>
                        </label>    
                        <input type='file' id='file' style={{display:"none"}}/>
                    </div>
                    <button className='productButton'>Update</button>
                </div>
            </form>
        </div>
    </div>
  )
}
