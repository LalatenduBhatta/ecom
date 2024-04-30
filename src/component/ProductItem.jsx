import React from 'react'
import { useFilterContext } from '../context/filtercontext'
import GridView from './GridView'
import ListView from './ListView'

function ProductItem() {
  const { filter_products, setGridView, grid_view } = useFilterContext()
  if (grid_view) {
    return <GridView products={filter_products} />
  }
  if (grid_view === false) {
    return <ListView products={filter_products} />
  }

}

export default ProductItem