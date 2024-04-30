import React from 'react'
import FilterSection from './FilterSection'
import Sort from './Sort'
import ProductItem from './ProductItem'
import { useFilterContext } from '../context/filtercontext'
import Products from './Products'

function ProductList() {
    return (
        <div className='container'>
            <div className="row">
                {/* //this is the for the filtersectinon  */}
                <div className="col-4">
                    <FilterSection />
                </div>
                {/* //  this is the for the sort section */}
                <div className="col-8">
                    <div className='row'>
                        <div className="col-12">
                            <Sort />
                        </div>
                        {/* //this is the for the product item */}
                        <div className="col-12">
                            <ProductItem />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductList