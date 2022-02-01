import React from 'react';
import image from '../assets/images/logo-afmj01.png';
import { Link } from 'react-router-dom'


function SideBar() {
    return (
        <React.Fragment>

            <ul className="navbar-nav  sidebar accordion side" id="accordionSidebar">
                <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100 logo" src={image} alt="Img-AFMJ" />
                    </div>
                </Link>
                <hr className="sidebar-divider my-0" />
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <br></br>
                        <span className='dash-text'></span></Link>
                </li>
                <hr className="sidebar-divider" />
                <div className="sidebar-heading"><p className='options'>Options</p></div>
                <li className="nav-item">
                    <Link className="nav-link collapsed hover" to='/last-movie'>
                        <i className="icon fas fa-plus-square"></i>
                        <span className='dash-text'>Ultimo Producto</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link hover" to="/genres">
                        <i className="icon fas fa-clipboard-list"></i>
                        <span className='dash-text'>Listado de Productos</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link hover" to="/content">
                        <i className="fas fa-fw fa-table dash-text"></i>
                        <span className='dash-text'>Cantidad de categorias</span></Link>
                </li>
                <hr className="sidebar-divider d-none d-md-block" />
            </ul>

        </React.Fragment>
    )
}
export default SideBar;