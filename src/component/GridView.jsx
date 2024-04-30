import React from 'react'
import Products from './Products'
import { useProductData } from '../context/product'
import Loding from './CommonTemplate/Loding'

function GridView({ products }) {
    let {loading,error}= useProductData()
    return (
        <div className="row justify-content-evenly">
            {loading && <Loding/>}
            {!loading && products.length==0 && !error && <h1>No match data</h1>}
           
            {products ? products.map((data) => {
                return <Products product={data} key={data.id} />
            }) : null}
        </div>
    )
}

export default GridView