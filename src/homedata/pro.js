import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import ProductScree from './productus';
import { Link } from 'react-router-dom';

const CardComponents = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then(res => {
                setData(res.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const cardStyle = {
        width: '18rem',
        margin: '10px', // Adjust margin as needed
    };

    return (
        <div className="card-container">
            <div className="row">
                {data.map(item => (
                    <div key={item.id} className="col-md-4">
                        <Card style={cardStyle} className="custom-card mb-4">
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                {/* <Card.Text>{item.description}</Card.Text> */}
                                <Card.Img variant="top" src={item.image} />
                            </Card.Body>
                        </Card>
                        <button>
                                <Link to={`/${item.category}/${item.id}`} >Click to see the product</Link>
                                    </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CardComponents;
