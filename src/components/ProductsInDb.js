import React from "react";
import { useState, useEffect } from 'react';

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

                const positionLastProduct = productsArray[productsArray.length - 1].id;

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
                            <h3 className="align-center dash-text color">{lastProduct.name}</h3>
                            <p>{lastProduct.mainDescription}</p>
                            <div className="img">
                                <img src={`http://localhost:3050/${lastProduct.image}`} alt="product-img" width="400" />
                            </div>
                            <br></br>
                 
                            <div className="col-md-12 mb-6 img ">
                                <div className={`card shadow h-100 py-2`}>
                                    <div className="card-body">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col mr-2">
                                                <div className={`text-xs font-weight-bold color text- text-uppercase mb-1 align-center`}> <h6 className="hoja">Precio:<span className="color">${lastProduct.price}</span></h6> </div>
                                            </div>
                                            <div className="col mr-2">
                                                <div className={`text-xs font-weight-bold color text- text-uppercase mb-1 align-center`}> <h6 className="hoja">Precio:<span className="color">${lastProduct.discount}</span></h6> </div>
                                            </div>
                                        </div>
                                    </div>
                                   
                                </div>
                            </div>
                         

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductsInDb;
