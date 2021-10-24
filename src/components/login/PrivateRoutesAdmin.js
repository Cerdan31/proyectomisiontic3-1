import { BrowserRouter as Route, Redirect} from "react-router-dom";
import api from "../../api";


const PrivateRoutesAdmin = ({ children, ...rest }) =>{
  api.user.validarAdmin().then((res) => {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          res ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  })
}

export default PrivateRoutesAdmin;