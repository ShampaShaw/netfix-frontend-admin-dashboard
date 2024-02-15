import React, { useState } from 'react'
import './newProduct.css'
import { storage } from '../../firebase';

export const NewProduct = () => {
  const [movie, setMovie] = useState(null)
  const [img, setImg] = useState(null)
  const [imgTitle, setImgTitle] = useState(null)
  const [imgSm, setImgSm] = useState(null)
  const [trailer, setTrailer] = useState(null)
  const [video, setVideo] = useState(null)
  const [uploaded, setUploaded] = useState(0)

  // const handleChange = (e) => {
  //   const value = e.target.value;
  //   setMovie({ ...movie, [e.target.name]: value });
  // };

  const handleChange = (e) => {
    const value = e.target.type === 'file' ? e.target.files[0] : e.target.value;
    console.log('Name:', e.target.name, 'Value:', value);
    setMovie((prev) => {
      return { ...prev, [e.target.name]: value };
    });
  };
  

  const upload = (items) => {
    items.forEach((item) => {
      const fileName = new Date().getTime() + item.label + item.file?.name;
      const uploadTask = storage.ref(`/items/${fileName}`).put(item.file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          console.log(error);
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((url) => {
            setMovie((prev) => {
              return { ...prev, [item.label]: url };
            });
            setUploaded((prev) => prev + 1);
          });
        }
      );
    });
  };

  const handleUpload = (e) => {
    e.preventDefault();
    upload([
      {file: img, label: 'img'},
      {file: imgTitle, label: 'imgTitle'},
      {file: imgSm, label: 'imgSm'},
      {file: trailer, label: 'trailer'},
      {file: video, label: 'video'}
    ])
  }  // This is the handleUpload function that will be used to upload the image to the Firebase storage.

  console.log(movie)
  return (
    <div className='newProduct'>
    <h1 className="addProductTitle">New Movie</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input 
            type="file" 
            id='img' 
            name='img' 
            onChange={e=>setImg(e.target.files[0])} 
          />
        </div>
        <div className="addProductItem">
          <label>Title image</label>
          <input 
            type="file" 
            id='imgTitle' 
            name='imgTitle' 
            onChange={e=>setImgTitle(e.target.files[0])} 
          />
        </div>
        <div className="addProductItem">
          <label>Thumbnail image</label>
          <input 
            type="file" id='imgSm' name='imgSm' />
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input type="text" placeholder="John Wick" name='title' onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input type="text" placeholder="description" name='desc' onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Year</label>
          <input type="text" placeholder="Year" name='year' onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Genre</label>
          <input type="text" placeholder="Genre" name='genre' onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Duration</label>
          <input type="text" placeholder="Duration" name='duration' onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Limit</label>
          <input type="text" placeholder="Limit" name='limit' onChange={handleChange} />
        </div>
        <div className='addProductItem'>
          <label className=''>Is Series?</label>
          <select className='addProductSelect' name='active' id='isSeries' onChange={handleChange} >
            <option value='false'>No</option>
            <option value='true'>Yes</option>
          </select>
        </div>
        <div className='addProductItem'>
          <label>Trailer</label>
          <input 
            type='file' 
            name='trailer' 
            onChange={e=>setTrailer(e.target.files[0])} 
          />
        </div>
        <div className='addProductItem'>
          <label>Video</label>
          <input 
            type='file' 
            name='video'
            onChange={e=>setVideo(e.target.files[0])} 
          />
        </div>
        {uploaded == 5 ? (
          <button className='addProductButton'>Create</button>
        ) : (
          <button className='addProductButton' onClick={handleUpload}>Upload</button>
        )}
      </form>
    </div>
  )
}
