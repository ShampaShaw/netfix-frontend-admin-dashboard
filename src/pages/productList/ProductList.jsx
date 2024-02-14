import React, { useContext, useEffect, useState } from 'react'
import './productList.css'
import { DataGrid, GridColDef, GridValueGetterParams } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons'
import { productRows } from '../../dummyData';
import { Link, useParams } from 'react-router-dom'
import { MovieContext } from '../../context/movieContext/movieContext';
import { deleteMovie, getMovies } from '../../context/movieContext/apiCalls';

const ProductList = () => {
    const {id} = useParams();
    const { movies,dispatch } = useContext(MovieContext);

    useEffect(() => {
        getMovies(dispatch);
        console.log(dispatch);
    }, [dispatch]);

    const handleDelete = (id) => {
        deleteMovie(id, dispatch);
    }
    console.log("movie id:", id);
    const columns = [
        { field: '_id', headerName: 'ID', width: 90 },
        { field: 'movie', headerName: 'Movie', width: 200, renderCell: (params) => {
            return (
                <div className='productListItem'>
                    <img className='productListImg' src={params.row.img} alt=''/>
                    {params.row.title}
                </div>
            )
        }},
        { field: 'genre', headerName: 'Genre', width: 120 },
        { field: 'year', headerName: 'Year', width: 120 },
        { field: 'limit', headerName: 'Limit', width: 120 },
        { field: 'isSeries', headerName: 'isSeries', width: 120 },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={{ pathname: "/product/" + params.row._id, movie: params.row }}>
                            <button className='productListEdit'>Edit</button>
                        </Link>
                        <DeleteOutline className='productListDelete' onClick={() => handleDelete(params.row._id)}/>
                    </>
                );
            }
        },
      ];
      

  return (
    <div className='productList'>
        <DataGrid
            rows={movies}
            disableSelectionOnClick
            columns={columns}
            pageSize={8}
            checkboxSelection
            rowsPerPageOptions={[8, 16, 24]} 
            getRowId={(r) => r._id}
        />
    </div>
  )
}

export default ProductList