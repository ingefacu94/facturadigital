
function MostrarTodo(props){
    return(
        
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
            props.productos.map((prod, index)=>(
              <tr key={index}>
                <td>{prod.id}</td>
                <td>{prod.descripcion}</td>
                <td>{prod.valorUnitario}</td>
                <td>{prod.cantidad}</td>
                <td>{prod.cantidad * prod.valorUnitario}</td>
                {/*<td><button onClick={()=>handleDelete(index)}>Eliminar</button></td>*/}
                <td>aa</td>
              </tr>
            ))
          }

        </tbody>
      </table>
    );
}

export default MostrarTodo