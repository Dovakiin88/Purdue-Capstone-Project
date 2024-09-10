import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../src/firebaseConfig';
import { table } from 'console';


interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  assignedAsset: number;
  departmentId: number;
  desknumber: number;
  employeeId: number;
  officeId: number;
}

const EmployeeTable = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const employeesCollectionRef = collection(db, 'employeeData');
      const querySnapshot = await getDocs(employeesCollectionRef);
      const fetchedEmployees: Employee[] = querySnapshot.docs.map(doc => ({
        ...doc.data() as Employee,
      }));
      setEmployees(fetchedEmployees);
    };

    fetchData();
  }, []);

  return(
    <table>
      <thead>
        <tr>
          <th style={{border: '1px solid black', textAlign: 'center'}}>ID</th>
          <th style={{border: '1px solid black', textAlign: 'center'}}>First Name</th>
          <th style={{border: '1px solid black', textAlign: 'center'}}>Last Name</th>
          <th style={{border: '1px solid black', textAlign: 'center'}}>Employee ID</th>
          <th style={{border: '1px solid black', textAlign: 'center'}}>Username</th>
          <th style={{border: '1px solid black', textAlign: 'center'}}>Department ID</th>
          <th style={{border: '1px solid black', textAlign: 'center'}}>Office ID</th>
          <th style={{border: '1px solid black', textAlign: 'center'}}>Assigned Asset Group</th>
          <th style={{border: '1px solid black', textAlign: 'center'}}>Desk Number</th>
          <th style={{border: '1px solid black', textAlign: 'center'}}>Email Address</th>
        </tr>
      </thead>
      <tbody>
        {employees.map(employee => (
          <tr key={employee.id}>
            <td style={{border: '1px solid black', textAlign: 'center'}}>{employee.id}</td>
            <td style={{border: '1px solid black', textAlign: 'center'}}>{employee.firstName}</td>
            <td style={{border: '1px solid black', textAlign: 'center'}}>{employee.lastName}</td>
            <td style={{border: '1px solid black', textAlign: 'center'}}>{employee.employeeId}</td>
            <td style={{border: '1px solid black', textAlign: 'center'}}>{employee.username}</td>
            <td style={{border: '1px solid black', textAlign: 'center'}}>{employee.departmentId}</td>
            <td style={{border: '1px solid black', textAlign: 'center'}}>{employee.officeId}</td>
            <td style={{border: '1px solid black', textAlign: 'center'}}>{employee.assignedAsset}</td>
            <td style={{border: '1px solid black', textAlign: 'center'}}>{employee.desknumber}</td>
            <td style={{border: '1px solid black', textAlign: 'center'}}>{employee.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
};

export default EmployeeTable;