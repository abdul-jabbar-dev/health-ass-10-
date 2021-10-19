import { useContext } from "react";
import { Redirect, Route } from "react-router";
import { UserContext } from "../../App";

function PrivateRoute({ children, ...rest }) {
    const user = useContext(UserContext)

    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.uid ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}
export default PrivateRoute