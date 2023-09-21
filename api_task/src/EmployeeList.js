import React, { useState, useEffect } from "react";
import Card from "./Card";

function EmployeeList() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetch("https://dummy.restapiexample.com/api/v1/employees")
            .then((response) => response.json())
            .then((data) => {
                if (data.status === "success") {
                    setEmployees(data.data);
                } else {
                    console.error("Failed to fetch employee data");
                }
            });
    }, []);

    return ( <
        div className = "employee-list" > {
            employees.map((employee) => ( <
                Card key = { employee.id }
                name = { employee.employee_name }
                />
            ))
        } <
        /div>
    );
}

export default EmployeeList;