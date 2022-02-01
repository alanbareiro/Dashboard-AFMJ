import React from "react";
import { useState, useEffect} from 'react';
import solar from '../assets/images/solar01.jpg'
import Slogan from "./Slogan";

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

                //console.log(productsArray);

                setProduct(productsArray);
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
                    <h6 className="m-0 font-weight-bold title-bd">Last Product In DB</h6>
                </div>
                <div className="card-body">
                    <div className="row">
                        <ul className="w100">
                            {products.length === 0 && <p>Cargando</p>}
                            {
                                products.map((product, i) => {
                                    const ultimoProducto = products[products.length - 1].id
                                    if (product.id === ultimoProducto) {
                                        return (
                                            <li className="primera" key={i}>
                                                <h3>Ultimo Producto en Base De Datos: </h3>
                                                <br></br>
                                                <h5>{product.name}</h5>
                                                <p>{product.mainDescription}</p>
                                                <div className="img">
                                                <img src={solar} alt="product-img" width="350" />
                                                </div>
                                                <br></br>
                                            </li>
                                        )
                                    }
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
