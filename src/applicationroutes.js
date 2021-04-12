import { Switch, Route } from "react-router-dom"


import SignIn from "./pages/signin"
import SignUp from "./pages/signup"




const ApplicationRoutes = () => {

    return(
        <Switch>
            <Route exact path="/" component={SignIn}/>
            <Route exact path="/signup" component={SignUp}/>
        </Switch>

    )
}

export default ApplicationRoutes