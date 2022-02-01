import React from 'react';
import SideBar from './SideBar';
import ContentWrapper from './ContentWrapper';
import { Routes, Route} from 'react-router-dom';
import ListOfProductsInDb from './ListOfProductsInDb'
import ProductsInDb from './ProductsInDb';
import Error404 from './Error404';
import LengthDB from './LengthDB';





function App() {
  return (

    <div id="wrapper">

      <SideBar />
      <Routes>

        <Route path='*' element={<Error404/>}/>
        <Route path='/' exact={true} element={<ContentWrapper />} />
        <Route path='/last-movie' exact={true} element={<ProductsInDb />} />
        <Route path='/genres' exact={true} element={<ListOfProductsInDb/>} />
        <Route path='/content' exact={true} element={<LengthDB/>} />
        

      </Routes>


    </div>

  );
}

export default App;
