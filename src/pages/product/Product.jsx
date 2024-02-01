import React from 'react'
import './product.css'
import { Link } from 'react-router-dom'
import { Chart } from '../../component/chart/Chart'
import { productData } from '../../dummyData'
import { Publish } from '@material-ui/icons'

export const Product = () => {
  return (
    <div className='product'>
        <div className='productTitleContainer'>
            <h1 className='productTitle'>Product</h1>
            <Link to='/newProduct'>
                <button className='productAddButton'>Create</button>
            </Link>
        </div>
        <div className='productTop'>
            <div className='productTopLeft'>
                <Chart data={productData} dataKey='Sales' title='Sales Performance'/>
            </div>
            <div className='productTopRight'>
                <div className='productInfoTop'>
                    <img className='productInfoImg' src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEQ8QDw8PEhIQEA8QFRUQDhUQFw8SGBUYFxcSGRYYHiggGBolGxUWITEhJSkrLi4uGB81OzMtNygtLi0BCgoKDQ0NFQ0PFS0eFRktKzQrLTctMy04KzgrKy04Mi43KzcvMys3MDErKyswNC03NzcrKzc3KystMDcrKy43K//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABwMEBQYIAQL/xABPEAABAwICBgQHCgsFCQAAAAABAAIDBBEFIQYSMUFRYQcTcYEIIlORobHBFBUjMjVCcpKi0RYlVXSChJSzw+HwM0NSYsIXJGNkc6OytNL/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/AINREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEWT0dwKor52U1LGXyOz4NjaNr3u+a0X28wMyQFOOjnQnQRNBrpJKqS2YY4wxA8Bq+Oe247Ag57RdRSdEmBkECiLTxbVVFx9Z5HoWi6U9Bjmh0mGVBfbPqamwceTZRYHsIHarghdFdYlh01NI6GoifFIw2LXtLSOfMcCMirVQEREBERAREQEREBERAREQEREBERAREQEREBERAREQdGdG+GswnCHVRj1ppYHVku5zmhhfHFfcA23e5y0X/aBiwm681d/Gv1XVM6q3+ANte3O98tqmumax0bW2BYWBtiLgtLbWtwsox0x6NZma02GfCN2mBzvHb/ANN7jZw/ymx25uvZaRvmhmnEGIfBEdVUBpJjJuJANrmO39hzHMC623VUE9FeimInEIKmoppqaGmMjyZ2GN0jixzAxrXZm+vmbWsDnsU9gINW010OpcUh6uobqyNB6qZo8eF3+pvFpyPI2I5g0mwCfD6mSlqG2ew3BF9WVh+LI072n0EEbQV2JKFF/TjgDamgNU1vw1EQ+42uicQ17ewXa7lqnipVc7IiKAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIOj+i/SJtZQw3d8LA1sEgvndos136TQD234LeInrn3oMDnYi+MOcA+lkJAORIcyxI32ufOVOjZixxY/aPTzWojM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' alt=''/>
                    <span className='productImage'>Apple Airpod</span>
                </div>
                <div className='productInfoBottom'>
                    <div className='productInfoItem'>
                        <span className='producInfoKey'>id:</span>
                        <span className='producInfoValue'>123</span>
                    </div>
                    <div className='productInfoItem'>
                        <span className='producInfoKey'>Sales:</span>
                        <span className='producInfoValue'>6123</span>
                    </div>
                    <div className='productInfoItem'>
                        <span className='producInfoKey'>Active:</span>
                        <span className='producInfoValue'>yes</span>
                    </div>
                    <div className='productInfoItem'>
                        <span className='producInfoKey'>In Stock:</span>
                        <span className='producInfoValue'>No</span>
                    </div>
                </div>
            </div>
        </div>
        <div className='productBottom'>
            <form className='productForm'>
                <div className='productFormLeft'>
                    <label>Product Name</label>
                    <input type='text' placeholder='Apple Airpod'/>
                    <label>In Stock</label>
                    <select name='inStock' id='inStock'>
                        <option value='yes'>Yes</option>
                        <option value='no'>No</option>
                    </select>
                    <label>Active</label>
                    <select name='active' id='active'>
                        <option value='yes'>Yes</option>
                        <option value='no'>No</option>
                    </select>
                </div>
                <div className='productFormRight'>
                    <div className='productUpload'>
                        <img className='productUploadImg' src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEQ8QDw8PEhIQEA8QFRUQDhUQFw8SGBUYFxcSGRYYHiggGBolGxUWITEhJSkrLi4uGB81OzMtNygtLi0BCgoKDQ0NFQ0PFS0eFRktKzQrLTctMy04KzgrKy04Mi43KzcvMys3MDErKyswNC03NzcrKzc3KystMDcrKy43K//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABwMEBQYIAQL/xABPEAABAwICBgQHCgsFCQAAAAABAAIDBBEFIQYSMUFRYQcTcYEIIlORobHBFBUjMjVCcpKi0RYlVXSChJSzw+HwM0NSYsIXJGNkc6OytNL/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/AINREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEWT0dwKor52U1LGXyOz4NjaNr3u+a0X28wMyQFOOjnQnQRNBrpJKqS2YY4wxA8Bq+Oe247Ag57RdRSdEmBkECiLTxbVVFx9Z5HoWi6U9Bjmh0mGVBfbPqamwceTZRYHsIHarghdFdYlh01NI6GoifFIw2LXtLSOfMcCMirVQEREBERAREQEREBERAREQEREBERAREQEREBERAREQdGdG+GswnCHVRj1ppYHVku5zmhhfHFfcA23e5y0X/aBiwm681d/Gv1XVM6q3+ANte3O98tqmumax0bW2BYWBtiLgtLbWtwsox0x6NZma02GfCN2mBzvHb/ANN7jZw/ymx25uvZaRvmhmnEGIfBEdVUBpJjJuJANrmO39hzHMC623VUE9FeimInEIKmoppqaGmMjyZ2GN0jixzAxrXZm+vmbWsDnsU9gINW010OpcUh6uobqyNB6qZo8eF3+pvFpyPI2I5g0mwCfD6mSlqG2ew3BF9WVh+LI072n0EEbQV2JKFF/TjgDamgNU1vw1EQ+42uicQ17ewXa7lqnipVc7IiKAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIOj+i/SJtZQw3d8LA1sEgvndos136TQD234LeInrn3oMDnYi+MOcA+lkJAORIcyxI32ufOVOjZixxY/aPTzWojM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' alt=''/>
                        <label for='file'>
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
