const callApi = async (url, options = {}) => {
  const token = localStorage.getItem("token");
  options.headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${token}`
  };
  const response = await fetch("https://proyectomisiontic3-1.herokuapp.com/api" + url, options);
  const data = await response.json();
  return data;
};

const api = {
  products: {
    list() {
      return callApi("/products");
    },
    create(producto) {
      return callApi("/products", {
        method: "POST",
        body: JSON.stringify(producto),
      });
    },
    delete(id) {
      return callApi(`/products/${id}`, {
        method: "DELETE",
      });
    },
    edit(producto) {
      return callApi(`/products/${producto._id}`, {
        method: "PUT",
        body: JSON.stringify(producto),
      });
    },
    getProduct(id) {
      return callApi(`/products/${id}`);
    },
    getName(name) {
      return callApi(`/products/nombre/${name}`);
    },
  },
  // ventas

  ventas: {
    list() {
      return callApi("/ventas");
    },
    create(ventas) {
      return callApi("/ventas", { method: "POST", body: JSON.stringify(ventas) });

    },

    delete(id) {
      console.log("API1");
      return callApi(`/ventas/${id}`, {
        method: "DELETE",

      });

    },

    getVentasId(id) {
      console.log(id);
      return callApi(`/ventas/${id}`);

    },
    
    getName(name) {
      return callApi(`/ventas/nombre/${name}`);
    },

    edit(ventas) {
      return callApi(`/ventas/${ventas._id}`, {
        method: "PUT",
        body: JSON.stringify(ventas),
      });
    },
    
    

  },

  user: {
    getUser() {
      return callApi("/user/")
    },
    validarAdmin() {
      return callApi("/user/validarAdmin");
    },
  },
  usuarios: {
    list() {
      return callApi("/usuarios");
    },
    create(usuario) {
      return callApi("/usuarios", {
        method: "POST",
        body: JSON.stringify(usuario),
      });
    },
    edit(usuario) {
      return callApi(`/usuarios/${usuario._id}`, {
        method: "PUT",
        body: JSON.stringify(usuario),
      });
    },
    getUsuario(id) {
      return callApi(`/usuarios/${id}`);
    }
  }
  // categorias: {
  //   list() {
  //     return callApi("/categoria");
  //   },
  // },
};

export default api;