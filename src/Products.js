import ListGroup from 'react-bootstrap/ListGroup';
import Parse from 'parse';
import { useEffect, useState } from 'react';
function ListProducts() {
    const [producto,setProducto] = useState(null);
    useEffect(()=>{
        
    },[producto])
 const getProducts = async()=>{
        const products_query = new Parse.Query('Producto');
              products_query.equalTo('objectId','xRSMG1kIaK');
              const Producto = await products_query.first();
              setProducto(Producto);
 }
 
        
  return (
    <>
    <ListGroup>
      <ListGroup.Item>{`Name: ${producto?.get('descripcion')}`}</ListGroup.Item>
      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item>Morbi leo risus</ListGroup.Item>
      <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
      <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
    </ListGroup>
    <button onClick={getProducts}>Fetch producto</button>
    </>
  );
    
    
}

export default ListProducts;