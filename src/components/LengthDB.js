import React from "react";
import { useState, useEffect} from 'react';

function ListOfUsers() { /*son los usuarios*/

    //Inicilizo el hook useState con 2 variables: contenido y estado
    const [users, setUsers] = useState([]);
    const [products, setProduct] = useState([]);
    const [category, setCategory] = useState([]);
    const [electricCar,setElectricCar] = useState([]);
    const [electricAcc, setElectricAcc] = useState([]);

    //const [pagina, setPagina] = useState(1); // Es el valor inicial de página

    // Href
    // Quiero guardar en la variable subtitle la ejecución de ese hook

    //const subtitle = useRef();

    //Esto es igual que componentDidMount
    useEffect(() => {
        console.log('%cSe montó el componente', 'color: green');
        fetch('http://localhost:3050/api/users')
            .then(response => response.json())
            .then(data => {
                let usersArray = data.users;
                setUsers(usersArray);
                //console.log(data)
            })
            .catch(error => console.error(error));

        fetch('http://localhost:3050/api/products')

            .then(response => response.json())
            .then(data => {
                let productsArray = data.products;
                let categoryArray = data.countByCategory;
                let electricCar = data.countByCategoryECar;
                let electricAcc = data.countByCategoryAcc;

                console.log(categoryArray);
                setProduct(productsArray);
                setCategory(categoryArray);
                setElectricCar(electricCar);
                setElectricAcc(electricAcc);

            })
            .catch(error => console.error(error));

    }, []) //Con el array vacío se ejecuta una vez

    // Si quiero hacer algo como un componentDidUpdate

    // Le paso un array al cual quiero que este hook esté pendiente
    // Si pasa algo con el estado personajes hacé lo que está en la función

    useEffect(() => {
        console.log('%cSe actualizó el componente', 'color: yellow');
    }, [users, products,category,electricCar,electricAcc])
    // Si quiero hacer algo como un componentWillUnmount
    useEffect(() => {
        return () => console.log('%cSe desmontó el componente', 'color: red');
    }, [])
    return (
        <div className="row">
            {users.length === 0 && <p>Cargando</p>}
            {products.length === 0 && <p>Cargando</p>}
            {
                <div className="col-md-4 mb-4">
                    <div className="card border-left-= shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold hoja text- text-uppercase mb-1 align-center">Cantidad de Usuarios</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800 align-center">{users.length}</div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
            {
                <div className="col-md-4 mb-4">
                    <div className={`card border-left-= shadow h-100 py-2`}>
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className={`text-xs font-weight-bold hoja text- text-uppercase mb-1 align-center`}> Cantidad de Productos</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800 align-center">{products.length}</div>
                                </div>
                                <div className="col-auto">
                                    <i className={`fas  fa-2x text-gray-300`}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            }
            {
                <div className="col-md-4 mb-4">
                    <div className="card border-left-= shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold hoja text-uppercase mb-1 align-center ">Cantidad de Categorias</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800 align-center">{category}</div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
             {
                <div className="col-md-4 mb-4">
                    <div className="card border-left-= shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold hoja text- text-uppercase mb-1 align-center">Cantidad de Autos Electricos</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800 align-center">{electricCar}</div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
             {
                <div className="col-md-4 mb-4">
                    <div className="card border-left-= shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold hoja text- text-uppercase mb-1 align-center">Cantidad de Accesorios</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800 align-center">{electricAcc}</div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default ListOfUsers;
