import 'bootstrap/dist/css/bootstrap.min.css';
import ImageComponent from '../imagecomponent/image';

const Content = ()=>
{
    return(

        <div className="container mt-3">
  <h2>Card Image</h2>
  
  <div className="card" style={{"width":"400px"}}>
    <ImageComponent></ImageComponent>
    <div className="card-body">
      <h4 className="card-title">bag</h4>
      <p className="card-text">this is the bag cost is just a 300</p>
      <a href="https://www.youtube.com/channel/UCn2X4SfMi9ATnZ5WcE44Kqw" className="btn btn-primary">Buy Now</a>
    </div>
  </div>
  <br />
</div>
    )
}

export default Content