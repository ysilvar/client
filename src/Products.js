import ListGroup from 'react-bootstrap/ListGroup';
import Parse from 'parse';
import { useState, useEffect } from 'react';

function ListProducts() {
  const [producto, setProducto] = useState(null);

  const getProducts = async () => {
    try {
      const products_query = new Parse.Query('Producto');
      products_query.equalTo('objectId', 'xRSMG1kIaK');
      const Producto = await products_query.first();
      setProducto(Producto);
    } catch (error) {
      console.error('Error fetching producto:', error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <ListGroup className='mt-5'>
        <ListGroup.Item>{`Name: ${producto?.get('descripcion') || 'Cargando...'}`}</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <button className="btn btn-secondary" onClick={getProducts}>Fetch producto</button>
    </>
  );
}

export default ListProducts;
