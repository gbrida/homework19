import React from "react"
import { Table } from "react-bootstrap"


function Display(props) {
    return (
       
        <Table striped bordered hover>
             {console.log(props.results)}
            <thead>
                <tr>
                    <th>#</th>
                    <th>image</th>
                    <th onClick={props.handleClick}>First Name</th>
                    <th>Last Name</th>
                    <th>email</th>
                    <th>phone number</th>
                </tr>
            </thead>
            <tbody>
                   {props.results.length > 0 ? props.results.map((employee,i)=>{
                       return (
                        <tr>
                            <td>{i+1}</td>
                        <td> <img src={employee.picture.thumbnail} /> </td>
                       <td>{employee.name.first}</td>
                       <td>{employee.name.last}</td>
                        <td>{employee.email}</td>
                       <td>{employee.phone}</td> 
                        </tr>
                       )
                   }):
                    
                   <tr>
                   <td></td>
                   <td></td>
                   <td></td>
                   <td></td>
                   <td></td>
               </tr>
                   }
                      
                {/* <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                </tr> */}
            </tbody>
        </Table>
    )
}
export default Display