import { Component } from "react";
import axios from "axios";




class Newaxios extends Component
{
    constructor()
    {
        super()
        this.state ={

            Maindata : []
        }

    }
    componentDidMount()
    {
        axios.get("https://fakestoreapi.com/products")
        .then(response=>{
            this.setState({Maindata:response.data});
            console.log(response.data)
        })
    }

render()
{
    return(
    <>
    <h1>Collecting Data</h1>
    <button onClick={this.componentDidMount}></button>

    </>
        
    )
    
    
}
}

export default Newaxios;