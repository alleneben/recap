import { useHistory } from "react-router-dom"
import { useState } from "react"


import InputField from "../components/inputfield";
import Button from "../components/button"

function SignIn() {
  const history = useHistory()
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')


  const onchangeemail = e => {
    setemail(e.target.value)
  }

  const onchangepassword = (e) => {
    setpassword(e.target.value)
  }

  const gotosignup = (e) => {
    e.preventDefault();
    history.push("/signup")
  }

  function submit(e){
    e.preventDefault();

    console.log({email, password});

  }
  return (
      <form>
        <h1>Sign In</h1>
        <InputField type="email" label="Email" name="email" onchange={onchangeemail} placeholder="jojo@gmail.com"/>
        <InputField type="password" label="Password" name="password" onchange={onchangepassword} />
        <div>
          <Button text="Sign Up" classname="btn-danger" onclick={gotosignup}/>
          <Button text="Submit" classname="btn-primary" onclick={submit}/>
        </div>
      </form>
  );
}

export default SignIn;
