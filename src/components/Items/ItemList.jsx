import React from 'react'
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Counter from '../Counter/Counter';
import { Link } from 'react-router-dom';

const ItemList = ({ items }) => {
  return (
    <>
    {
      items.map((item) => (
        <Col md={3} lg={3} xs={12} key={item.id}>
          <CardList item={item}/>

        </Col>
      ))
    }
    </>
  )
}
// OTRO COMPONENTE
const CardList = ({ item }) => {
  return (
    <Card style={{ width: '18rem' }} className='mt-2'>
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          {item.description}
        </Card.Text>
        <Link to={`/detalle/${item.id}`}>
        <Button variant="primary">Ver Detalle</Button>
        </Link>
        
      </Card.Body>
      <Counter />
    </Card>
  );
}
export default ItemList