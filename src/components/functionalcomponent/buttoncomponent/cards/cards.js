
import Card from 'react-bootstrap/Card';
import ImageComponent from '../imagecomponent/image';

const Products1 =()=>
{

  const pink = [  {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
        "rate": 3.9,
        "count": 120
    }
},
{
    "id": 2,
    "title": "Mens Casual Premium Slim Fit T-Shirts ",
    "price": 22.3,
    "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    "rating": {
        "rate": 4.1,
        "count": 259
    }
},]
    

return (
    <Card>
      {
        pink.map((pinu)=>{

          return (
            <div>
                <CardsComponent key1 = {pinu}></CardsComponent>
            </div>

          )
        })
      }
      <Card.Body>This is some text within a card body.</Card.Body>
    

    
    </Card>

   

  );



}

export default Products1;

const CardsComponent=(props)=>
{
  return(

    
    <div className="container mt-3">
    <h2>Card Image</h2>
    
    <div className="card" style={{"width":"400px"}}>
      <ImageComponent></ImageComponent>
      <div className="card-body">
        <h4 className="card-title">{props.key1.title}</h4>
        <p className="card-text">{props.key1.description}</p>
        <p className="card-image">{props.key1.image}</p>
        <img src={props.key1.image} className="card-img-top" alt="Product" />
        <a href="https://www.youtube.com/channel/UCn2X4SfMi9ATnZ5WcE44Kqw" className="btn btn-primary">Buy Now</a>
      </div>
    </div>
    <br />
  </div>
    
  )
}
