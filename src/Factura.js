import  { useState } from 'react'
import './Styles.css'


function RegistrarFactura(){
    const [id, setId] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [valorUnitario, setValorUnitario] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [numFactura, setNumFactura] = useState('');
    const [nombreCliente, setNombreCliente] = useState('');
    const [telefono, setTelefono] = useState('');
    const [cedula, setCedula] = useState('');
    const [correo, setCorreo] = useState('');

    // Estado para almacenar la lista de productos
    var [productos, setProductos] = useState([]);
  
    // Función para manejar el envío del formulario
    const handleSubmit = (e) => {
      e.preventDefault();
      //console.log(productos)
      // Crear un nuevo producto con los valores de los inputs
      const nuevoProducto = {
        id: id,
        descripcion,
        valorUnitario: parseFloat(valorUnitario),
        cantidad: parseInt(cantidad, 10),
        subtotal: parseInt(cantidad, 10) * parseFloat(valorUnitario),
      };
      // Agregar el nuevo producto a la lista de productos
      setProductos([...productos, nuevoProducto]);
      
      
     
      // Limpiar los inputs
      setId('');
      setDescripcion('')
      setValorUnitario('');
      setCantidad('');
     // setSubtotal(calcularSubtotal())
      //setIva(calcularIva(calcularSubtotal))
    };

    const calcularSubtotal =()=>{
      return productos.reduce((total, producto)=>total+producto.subtotal,0)
    }

    const calcularIva=(subtotal)=>{
      return subtotal * 0.16
    }

    const calcularGranTotal=(subtotal, iva)=>{
      return subtotal + iva
    }

    const handleDelete =(e)=>{
      const eliminar = productos.filter((a, i)=>i!==e)
      //console.log(eliminar)
      setProductos(eliminar)
    };

 
  
    return (
      
        <div className='contenedor'>
        <h1>Factura</h1>
        <form onSubmit={handleSubmit}>
          <div className='Form1'>
            <div className='contenedor-input'>
              <label>Número de factura:</label>
              <input
                type="text"
                value={numFactura}
                onChange={(e) => setNumFactura(e.target.value)}  
              />
            </div>
            <div className='contenedor-input'>
              <label>Nombre del cliente:</label>
              <input
                type="text"
                value={nombreCliente}
                onChange={(e) => setNombreCliente(e.target.value)}
              />
              </div>
              <div className='contenedor-input'>
              <label>Teléfono:</label>
              <input
                type="text"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
              />
              </div>
              <div className='contenedor-input'>
              <label>Cedula:</label>
              <input
                type="text"
                value={cedula}
                onChange={(e) => setCedula(e.target.value)}
              />
              </div>
              <div className='contenedor-input' id="correo-contenedor">
              <label>Correo:</label>
              <input
                className='correo'
                type="text"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
              />
              </div>
            </div>
            <div className='contenedor-input'>
            <input
              placeholder='ID Producto'
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              
            />
          </div>
          <div className='contenedor-input'>
            <input
              placeholder='Descripción'
              type="text"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              required
            />
          </div>
          
          <div className='contenedor-input'>
            <input
              placeholder='Valor Unitario'
              type="text"
              value={valorUnitario}
              onChange={(e) => setValorUnitario(e.target.value)}
              required            />
          
          </div>

          <div className='contenedor-input'>
            <input
              placeholder='Cantidad'
              type="text"
              value={cantidad}
              onChange={(e) => setCantidad(e.target.value)}
              required
            />
          </div>
        
          <button type="submit" className='boton-agregar'>Agregar Producto</button>
        </form>
        <table className='tabla' border='1px'>
        <thead>
          <tr>
            <th>ID Producto</th>
            <th>Descripción</th>
            <th>Valor Unitario</th>
            <th>Cantidad</th>
            <th>Subtotal</th>
            <th> Acción</th>
          </tr>
        </thead>
        <tbody>
          {
            productos.map((prod, index)=>(
              <tr key={index}>
                <td>{prod.id}</td>
                <td>{prod.descripcion}</td>
                <td>{parseFloat(prod.valorUnitario).toLocaleString('es-CO')}</td>
                <td>{prod.cantidad}</td>
                <td>{parseFloat(prod.subtotal).toLocaleString('es-CO')}</td>
                {<td><button className='boton-eliminar' onClick={()=>handleDelete(index)}>Eliminar</button></td>}
              </tr>
            )
            ) 
          }

        </tbody>
      </table>
      <div className='resumen'>
        <p>Subtotal: ${calcularSubtotal().toLocaleString('es-CO')} </p>
        <p>IVA (16%): ${calcularIva(calcularSubtotal()).toLocaleString('es-CO')} </p>
        <p>Total: ${calcularGranTotal(calcularSubtotal(), calcularIva(calcularSubtotal())).toLocaleString('es-CO')} </p>
      </div>
      </div>
    );
}

export default RegistrarFactura;