import React from "react";
import EmployeeList from "./EmployeeList";

function HomePage() {
    return ( <
        div className = "home-page" >
        <
        h1 > Employee Names < /h1> <
        EmployeeList / >
        <
        /div>
    );
}

export default HomePage;