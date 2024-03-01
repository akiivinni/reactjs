import { Component } from "react";
import axios from "axios";


class UserData extends Component


{
    constructor()
    {
        super()
        this.state = {

            Usercollection:[]
        }
    }

    fetchData = ()=>
    {
        axios.get("https://fakestoreapi.com/products")
        .then(response=>{
            console.log(response)
            this.setState({
                Usercollection:response.data
                
            })
        })
    }
    render()
    {
        return(
            <>
            <h1>UserCollections</h1>
           <button onClick={this.fetchData}>Clcik to fetch</button>
           </>
          

        )
       
    }
}

export default UserData;