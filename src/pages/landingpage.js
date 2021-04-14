import Button from "../components/button";
import { useAppContext } from "../appcontext";
import SignIn from "./signin";
import SignUp from "./signup";


const LandingPage = () => {
    const { state, dispatch } = useAppContext()

    const changestate = (type) => {
        dispatch({type:type})
    }


    return(

        <div className="landing">
            <Button text="Sign in" classname="btn-primary" onclick={() => changestate("showsignin")}/>
            <Button text="Sign up" classname="btn-danger" onclick={() => changestate("showsignup")}/>
            {state.showsignin && <SignIn />}            
            {state.showsignup && <SignUp />}
        </div>
        
    )
}

export default LandingPage;