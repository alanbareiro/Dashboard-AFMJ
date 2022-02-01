import React from "react";
import { useState, useEffect} from 'react';

function ProductsInDb() { /*son los productos*/

  //Inicilizo el hook useState con 2 variables: contenido y estado
  const [products, setProduct] = useState([]);
  //const [pagina, setPagina] = useState(1); // Es el valor inicial de página

  // Href
  // Quiero guardar en la variable subtitle la ejecución de ese hook

  //const subtitle = useRef();

  //Esto es igual que componentDidMount
  useEffect(() => {

    console.log('%cSe montó el componente', 'color: green');

    fetch('http://localhost:3050/api/products')

      .then(response => response.json())
      .then(data => {

        let productsArray = data.products;
        setProduct(productsArray);
        //console.log(data.products);
      })
      .catch(error => console.error(error));

  }, []) //Con el array vacío se ejecuta una vez

  // Si quiero hacer algo como un componentDidUpdate

  // Le paso un array al cual quiero que este hook esté pendiente
  // Si pasa algo con el estado personajes hacé lo que está en la función

  useEffect(() => {
    console.log('%cSe actualizó el componente', 'color: yellow');
   
  }, [products])

  // Si quiero hacer algo como un componentWillUnmount

  useEffect(() => {
    
    return () => console.log('%cSe desmontó el componente', 'color: red');
    
  }, [])

  return (

    <div className="col-lg-6 mb-4 big-card">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold title-bd ">List Of Products In DB</h6>
        </div>

        <div className="card-body">
          <div className="row">
            
            <ul className="w100">
              <br></br>
              {products.length === 0 && <p>Loading..</p>}
              {
                products.map((product, i) => {

                  return (
                    
                    <li className="primera" key={i}>

                      <h5 className="list-name"><i class="hoja fas fa-leaf"></i> {product.name}</h5>

                      <br></br>


                    </li>
                    
                  )

                })
              }

            </ul>


          </div>
        </div>
      </div>


    </div>




  );
}

export default ProductsInDb;
