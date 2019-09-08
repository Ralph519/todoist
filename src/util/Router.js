import React from 'react'
import Users from "../pages/Users";
import App from "../App"

const routes = {
    "/": () => <App />,
    "/signup": () => <Users />,
    "/login": () => <Users />,
}

export default routes