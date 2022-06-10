import React,{useState,ChangeEvent}from 'react'
import axios from 'axios';
import { toast } from "react-toastify";

const SignUp = () => {
    const [firstname, setFirstName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string|number>("");

    const fnFirstName=(event:ChangeEvent<HTMLInputElement>)=>{
        setFirstName(event.target.value) 
    }
    const fnEmail=(event:ChangeEvent<HTMLInputElement>)=>{
        setEmail(event.target.value)
    }
    const fnPassword=(event:ChangeEvent<HTMLInputElement>)=>{
        setPassword(event.target.value)
    }
    const handleSignUp=()=>{

        const payload = {
            firstname: firstname,
            email: email,
            password: password,
          };
          axios
          .post('https://car-auction-assignment.herokuapp.com/loginProfile',
          payload)
          .then((response)=>{
            if(response.status===201)
            {
              
                setEmail("");
                setPassword("");
                setFirstName("")
                toast.success("Registered Successfully");
             
              console.log(response.data)
            }
          })
    }

  return (
    <div className="register py-4">
    <h2>Register</h2>

    <input
      className="inputbox"
      type="text"
      placeholder="firstname"
      value={firstname}
      onChange={fnFirstName}
    />

    <input
      className="inputbox"
      type="text"
      placeholder="email"
      value={email}
      onChange={fnEmail}
      
    />
    
    <input
      className="inputbox"
      type="password"
      placeholder="password"
      value={password}
      
      onChange={fnPassword}
    />
   
    <button
      type="button"
      className=" reg-button btn-sm"
      onClick={handleSignUp}
    >
      SignUp
    </button>
  </div>
  )
}

export default SignUp