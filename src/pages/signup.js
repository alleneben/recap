import { useState } from "react";
import { useHistory } from "react-router-dom"
import InputField from "../components/inputfield";
import Button from "../components/button"

function SignUp() {
  const history = useHistory()
  const [values, setvalues] = useState({})


  const onchange = (e) => {
    setvalues({...values, [e.target.name]: e.target.value})
  }

  const gotosignin = (e) => {
    e.preventDefault();
    history.push("/")
  }

  function submit(e){
    e.preventDefault();
    console.log(values);
  }
  return (
      <form>
        <h1>Sign Up</h1>
        <InputField type="text" label="Firstname" name="firstname" placeholder="e.g. Joseph" onchange={onchange}/>
        <InputField type="text" label="Lastname" name="lastname" placeholder="e.g. Mensah" onchange={onchange}/>
        <InputField type="email" label="Email" name="email" placeholder="e.g. jojo@gmail.com" onchange={onchange}/>
        <InputField type="password" label="Password" name="password" onchange={onchange}/>
        <InputField type="password" label="Confirm Password" name="cpassword" onchange={onchange}/>
        <div>
          <Button text="Submit" classname="btn-danger" onclick={submit}/>
          <Button text="Sign In" classname="btn-primary" onclick={gotosignin}/>
        </div>
      </form>
  );
}

export default SignUp;
