import { useState } from "react";
 import axios from "axios"

const Controlledforms=()=>
{

    const [username,setUsername]= useState("")
    const [password,setPassword] = useState("")
    const[userNameError,setUserUserError]=useState("")

    
    
const userpasswordhandler=(event)=>
{
     username.event.target.value;
    setUsername(username)

    password.event.target.value;
    setPassword(password)

    if(username.length>10)
    {
        setUserUserError("usernme must be access above 10 charaters")

    }
    else
    {
        let newobject={

            username:username,
            // password:password
        }
    }

    if(password=" " || password.length<8)
    {
        setUserUserError("password should not be blank")
    }
    if(password.length>8)
    {
        setUserUserError("password strong")
    }
    else
    {
        let newpasswordobj = {
            password:password
        }
    }


    
}

const loginapi=()=>
{
    axios.post('https://dummyjson.com/auth/login')
    .then(response =>{
        this.setState({
            username:response.username,
            password:response.password
        })
    })
}

const submithandler=(event)=>
{
    event.preventDefault();
    loginapi();

}
    
    
    
    
    
    return(


        <>
  <title>Bootstrap Example</title>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
    rel="stylesheet"
  />
  <div className="container mt-3">
    <h2>Stacked form</h2>
    <form onSubmit={submithandler}>
      <div className="mb-3 mt-3">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Enter email"
          name="email"
          value = {"userpasswordhandler"}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="pwd">Password:</label>
        <input
          type="password"
          className="form-control"
          id="pwd"
          placeholder="Enter password"
          name="pswd"

          value = {"password"}
          onChange={userpasswordhandler}
        />
      </div>
      <div className="form-check mb-3">
        <label className="form-check-label">
          <input className="form-check-input" type="checkbox" name="remember" />{" "}
          Remember me
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  </div>
</>

        
    )
}
export default Controlledforms;