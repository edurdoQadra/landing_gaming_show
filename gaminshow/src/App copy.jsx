import React, { useState } from 'react';
import './App.css';

// Import images

import heroImage from '/vaclav-pechar-EHt0DO1wRw8-unsplash.jpg';

function App() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    pais: '',
    correo: '',
    celular: '',
    tipoEmpresa: '',
    nombreEmpresa: ''
  });
  const initialFormData = {
    nombre: '',
    apellido: '',
    pais: '',
    correo: '',
    celular: '',
    tipoEmpresa: '',
    nombreEmpresa: ''
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    clearInputs
    console.log(formData);
    
  };
  const clearInputs = () => {
    setFormData(initialFormData);
  };

  return (
<>
  <div className="container-fluid ">
    <div className="row mx-auto">
      <div className="col-9  mx-0 d-flex justify-content-center align-items-center">
        {/* Formulario con Bootstrap 5 */}
        <div className="form-section bg-light p-4 rounded shadow" style={{ zIndex: 1, position: 'relative' }}>
          <h2 className="mb-4">Registro</h2>
          <form onSubmit={handleSubmit} className="row g-3">
  <div className="col-md-9"> {/* Modificado: Cambiado de col-md-12 a col-md-9 */}
    <label htmlFor="nombre" className="form-label">Nombre</label>
    <input
      type="text"
      name="nombre"
      value={formData.nombre}
      onChange={handleChange}
      className="form-control"
      id="nombre"
      placeholder="Ingrese su nombre"
      required
    />
  </div>
  <div className="col-md-9"> {/* Modificado: Cambiado de col-md-12 a col-md-9 */}
    <label htmlFor="apellido" className="form-label">Apellido</label>
    <input
      type="text"
      name="apellido"
      value={formData.apellido}
      onChange={handleChange}
      className="form-control"
      id="apellido"
      placeholder="Ingrese su apellido"
      required
    />
  </div>
  <div className="col-md-9"> {/* Modificado: Cambiado de col-md-12 a col-md-9 */}
    <label htmlFor="pais" className="form-label">País</label>
    <input
      type="text"
      name="pais"
      value={formData.pais}
      onChange={handleChange}
      className="form-control"
      id="pais"
      placeholder="Ingrese su país"
      required
    />
  </div>
  <div className="col-md-9"> {/* Modificado: Cambiado de col-md-12 a col-md-9 */}
    <label htmlFor="correo" className="form-label">Correo</label>
    <input
      type="email"
      name="correo"
      value={formData.correo}
      onChange={handleChange}
      className="form-control"
      id="correo"
      placeholder="Ingrese su correo electrónico"
      required
    />
  </div>
  <div className="col-md-9"> {/* Modificado: Cambiado de col-md-12 a col-md-9 */}
    <label htmlFor="celular" className="form-label">Celular</label>
    <input
      type="text"
      name="celular"
      value={formData.celular}
      onChange={handleChange}
      className="form-control"
      id="celular"
      placeholder="Ingrese su número de celular"
      required
    />
  </div>
  <div className="col-md-9"> {/* Modificado: Cambiado de col-md-12 a col-md-9 */}
    <label htmlFor="tipoEmpresa" className="form-label">Tipo de Empresa</label>
    <input
      type="text"
      name="tipoEmpresa"
      value={formData.tipoEmpresa}
      onChange={handleChange}
      className="form-control"
      id="tipoEmpresa"
      placeholder="Ingrese el tipo de su empresa"
      required
    />
  </div>
  <div className="col-md-9"> {/* Modificado: Cambiado de col-md-12 a col-md-9 */}
    <label htmlFor="nombreEmpresa" className="form-label">Nombre de la Empresa</label>
    <input
      type="text"
      name="nombreEmpresa"
      value={formData.nombreEmpresa}
      onChange={handleChange}
      className="form-control"
      id="nombreEmpresa"
      placeholder="Ingrese el nombre de su empresa"
      required
    />
  </div>
  <div className="col-12">
    <button type="submit" className="btn btn-primary">Enviar formulario</button>
  </div>
</form>

        </div>
      </div>
    </div>
  </div>
  {/* Hero Section */}
  <div className="hero-section d-flex justify-content-center align-items-center" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100vh', overflow: 'hidden' }}>
    <img src={heroImage} className="hero-image img-fluid" alt="Hero" style={{ width: '100%', minHeight: '100%' }} />
  </div>
</>

  );
}

export default App;
