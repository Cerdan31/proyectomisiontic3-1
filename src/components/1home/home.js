//import { Link } from 'react-router-dom';
import "./home.css"
import NavBar from './components/NavBar';
// import Cards from "./components/Cards";
import Logout from "./components/logout"
import React, { useState } from "react";
import { useEffect } from "react";
import ListaProductos from "./components/ListaProductos";
import api from "../../api";
const Home = () => {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await api.products.list();
      setProductos(response);
    };

    fetchData();
  }, []);
  return (
    <div>
      <NavBar pagina={"/home"}/>
      <Logout/>
      <h1 className="text-center mt-5 mb-5">Productos en Tienda</h1>
      <ListaProductos
        productos={productos}
      />
    </div>
  );
};

export default Home;