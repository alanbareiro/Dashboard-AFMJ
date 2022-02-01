import React from 'react';
import ProductsInDb from './ProductsInDb';
import ListOfProductsInDb from './ListOfProductsInDb';

function ContentRowCenter() {
    return (
        <div className="row">
            <ProductsInDb/>
            <ListOfProductsInDb />
           
        </div>
        
    )
}

export default ContentRowCenter;