import React from "react";
import { useState, useEffect} from 'react';

function ProductsInDb() { /*son los productos*/

    //Inicilizo el hook useState con 2 variables: contenido y estado
    const [lastProduct, setLastProduct] = useState([]);
    //const [pagina, setPagina] = useState(1); // Es el valor inicial de página

    // Href
    // Quiero guardar en la variable subtitle la ejecución de ese hook

    //Esto es igual que componentDidMount
    useEffect(() => {

        console.log('%cSe montó el componente', 'color: green');

        fetch('http://localhost:3050/api/products')

            .then(response => response.json())
            .then(data => {

                let productsArray = data.products;

                const positionLastProduct = productsArray[productsArray.length-1].id;

                console.log(positionLastProduct);

                fetch(`http://localhost:3050/api/products/${positionLastProduct}`)

                .then(response => response.json())
                .then(data => {
    
                    let lastProduct = data.product;
    
                    setLastProduct(lastProduct);

                    console.log('Esto es lastProduct: ', lastProduct);

                })
                .catch(error => console.error(error));
                // setLastProduct(lastProduct);
                
            })
            .catch(error => console.error(error));

    }, []) //Con el array vacío se ejecuta una vez
    // Si quiero hacer algo como un componentDidUpdate

    // Le paso un array al cual quiero que este hook esté pendiente
    // Si pasa algo con el estado personajes hacé lo que está en la función
    useEffect(() => {
        console.log('%cSe actualizó el componente', 'color: yellow');

    }, [lastProduct])
    // Si quiero hacer algo como un componentWillUnmount
    useEffect(() => {
        return () => console.log('%cSe desmontó el componente', 'color: red');
    }, [])
    return (
        <div className="col-lg-6 mb-4 big-card">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold title-bd">Last Product In DB</h6>
                </div>
                <div className="card-body">
                    <div className="row">
                        <ul className="w100">
                            <br></br>
                            <h5>{lastProduct.name}</h5>
                            <p>{lastProduct.mainDescription}</p>
                            <div className="img">
                            <img src={`http://localhost:3050/${lastProduct.image}`} alt="product-img" width="350" />
                            </div>
                            <br></br>    
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductsInDb;
