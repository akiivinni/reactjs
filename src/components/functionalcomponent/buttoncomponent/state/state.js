import React, { Component } from "react";
import Table from 'react-bootstrap/Table';


class Employees extends Component {
    constructor() {
        super();
        this.state = {
            employees: [
                {
                    id: 1,
                    title: "employee1",
                    teaching: "Azure",
                },
                {
                    id: 2,
                    title: "employee2",
                    teaching: "react",
                },
                {
                    id: 3,
                    title: "employee3",
                    teaching: "js dev",
                },
                {
                    id: 4,
                    title: "employee4",
                    teaching: "dev",
                },
            ],
            selectedEmployee: null,
        };
    }

    handleEmployeeClick = (id) => {
        const selectedEmployee = this.state.employees.find(
            (employee) => employee.id === id
        );
        this.setState({ selectedEmployee });
    };

    employeeall = ()=>{

        this.setState({ selectedEmployee: this.state.employees });

    }
    

    render() {
        return (
            <>
                <button onClick={() => this.handleEmployeeClick(1)}>Employee 1</button>
                <button onClick={() => this.handleEmployeeClick(2)}>Employee 2</button>
                <button onClick={() => this.handleEmployeeClick(3)}>Employee 3</button>
                <button onClick={() => this.handleEmployeeClick(4)}>Employee 4</button>
                <button onClick={()=>this.employeeall()}>employeeall</button>
                
                {this.state.selectedEmployee && (
                    <div>
                        {/* <div>
                            {this.state.employees.map((employee) => (
                                <div key={employee.id}>
                                    <h4>{employee.title}</h4>
                                    <h4>{employee.teaching}</h4>
                                    
                                </div>
                               
                            ))} */}
                        {/* </div> */}
                            
                        
                        <table style = {{border:"2px solid black"}}>
                            <tr>
                                <th>title</th>
                                <th>teaching</th>
                                <th>id</th>
                            </tr>
                            <tr style = {{border:"2px solid black"}}>
                                <td style = {{border:"2px solid black"}}>{this.state.selectedEmployee.title}</td>
                                <td style = {{border:"2px solid black"}}>{this.state.selectedEmployee.teaching}</td>
                                <td style = {{border:"2px solid black"}}>{this.state.selectedEmployee.id}</td>

                            </tr>

                          
                            
                        </table>

                    </div>
                   
                )}
            </>
        );
    }
}

export default Employees;
