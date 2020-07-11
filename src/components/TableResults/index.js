import React from "react";

function TableResults(props) {
  return (
    <tbody>
      {/* Creates table row for each employee */}
      {props.results.map(employee => (
        <tr>
          {/* <th scope="row">1</th> */}
          <td><img src={employee.image} alt={employee.name}></img></td>
          <td>{employee.firstName} {employee.lastName}</td>
          <td>{employee.phone}</td>
          <td><a href={employee.email}>{employee.email}</a></td>
          <td>{employee.dob.split('T')[0]}</td>
        </tr>
      ))}
    </tbody>
  );
}

export default TableResults;
