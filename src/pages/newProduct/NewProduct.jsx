import React, { useState } from 'react'
import './newProduct.css'

export const NewProduct = () => {
  const [movie, setMovie] = useState(null)
  const [img, setImg] = useState(null)
  const [imgTitle, setImgTitle] = useState(null)
  const [imgSm, setImgSm] = useState(null)
  const [trailer, setTrailer] = useState(null)
  const [video, setVideo] = useState(null)

  return (
    <div className='newProduct'>
    <h1 className="addProductTitle">New Movie</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input type="file" id='img' name='img' />
        </div>
        <div className="addProductItem">
          <label>Title image</label>
          <input type="file" id='imgTitle' name='imgTitle' />
        </div>
        <div className="addProductItem">
          <label>Thumbnail image</label>
          <input type="file" id='imgSm' name='imgSm' />
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input type="text" placeholder="John Wick" name='title' />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input type="text" placeholder="description" name='desc' />
        </div>
        <div className="addProductItem">
          <label>Year</label>
          <input type="text" placeholder="Year" name='year' />
        </div>
        <div className="addProductItem">
          <label>Genre</label>
          <input type="text" placeholder="Genre" name='genre' />
        </div>
        <div className="addProductItem">
          <label>Duration</label>
          <input type="text" placeholder="Duration" name='duration' />
        </div>
        <div className="addProductItem">
          <label>Limit</label>
          <input type="text" placeholder="Limit" name='limit' />
        </div>
        <div className='addProductItem'>
          <label className=''>Is Series?</label>
          <select className='addProductSelect' name='active' id='isSeries'>
            <option value='false'>No</option>
            <option value='true'>Yes</option>
          </select>
        </div>
        <div className='addProductItem'>
          <label>Trailer</label>
          <input type='file' name='trailer' />
        </div>
        <div className='addProductItem'>
          <label>Video</label>
          <input type='file' name='video' />
        </div>
        <button type='submit' className='addProductButton'>Create</button>
      </form>
    </div>
  )
}
