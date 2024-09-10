import React from 'react'
import { useState, FormEvent, ChangeEvent } from 'react';
import './main.css'
import { db } from '../firebaseConfig';
import { addDoc, collection } from 'firebase/firestore';
import { Navigate, useNavigate } from 'react-router-dom';

const employeeCollection = collection(db, 'employeeData');

interface FormData {
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

const EmployeeCreationForm: React.FC = () => {
    const navigate = useNavigate()
    
    const [formData, setFormData] = useState<FormData>({
        id: 0,
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        assignedAsset: 0,
        departmentId: 0,
        desknumber: 0,
        employeeId: 0,
        officeId: 0,

    });

    const initialState: FormData = {
        id: 0,
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        assignedAsset: 0,
        departmentId: 0,
        desknumber: 0,
        employeeId: 0,
        officeId: 0,
    };

    //this handles input
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData, [name]: value as keyof FormData,
        }))
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            await addDoc(employeeCollection, formData);
            console.log('Employee data added sucessfully.')
            setFormData(initialState);
            navigate('/employeedata')
        } catch (error) {
            console.error('Error adding employee data: ', error)
        }
        console.log(formData)
    };

    //Not used. Kept on just in case the prior code dosent work
    const assignedAssetOptions = [/* */]
    const departmentOptions = [/* */]
    const officeOptions = [/* */]

    return (
        <div style={{ display: 'flex', flexDirection: 'row', backgroundColor: 'azure' }}>
            <div style={{ display: 'flex', flexDirection: 'column', margin: 'auto', width: '1000px' }}>
                <div style={{ textAlign: 'center', margin: 'auto' }}>
                    <h1>Create an Employee Entry</h1>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', margin: 'auto' }}>
                    <div>
                        <p style={{ textAlign: 'center' }}>
                            <b>Please note:</b> Only managers and IT specialists are able to add employees.
                        </p>
                        <p style={{ textAlign: 'center' }}>
                            <b>HR:</b> Please submit a ticket to IT to add a new employee.
                        </p>
                    </div>

                    <div style={{ width: '500px', margin: 'auto', justifyContent: 'center' }}>
                        {/*DEBUG NOTE: The post may need to be written as POST */}
                        <h3 style={{ textAlign: 'center' }}>New Employee Information Form</h3>
                        <form onSubmit={handleSubmit} style={{ width: '400px' }}>
                            <div className='formStyle'>
                                <label htmlFor="username"><b>User Name:</b>  </label>
                                <input type="text" size={30} id="username" name='username' value={formData.username} onChange={handleChange} required />
                            </div>
                            <br />
                            <div>
                                <label htmlFor="firstName"><b>First Name:</b>  </label>
                                <input type="text" size={30} id="firstName" name='firstName' value={formData.firstName} onChange={handleChange} required />
                            </div>
                            <br />
                            <div>
                                <label htmlFor="lastName"><b>Last Name:</b>  </label>
                                <input type="text" size={30} id="lastName" name='lastName' value={formData.lastName} onChange={handleChange} required />
                            </div>
                            <br />
                            <div>
                                <label htmlFor="email"><b>Employee Email:</b>  </label>
                                <input type="email" size={25} width={100} id="email" name='email' value={formData.email} onChange={handleChange} />
                            </div>
                            <br />
                            <div>
                                <label htmlFor="employeeId"><b>Employee ID:</b> </label>
                                <input type="number" min={0} id='employeeId' name='employeeId' value={formData.employeeId} onChange={handleChange} required />
                            </div>
                            <br />
                            <div>
                                <label htmlFor="assignedAsset"><b>Assigned Asset ID:</b> </label>
                                <input type="number" size={30} min={0} id='assignedAsset' name='assignedAsset' value={formData.assignedAsset} onChange={handleChange} required />
                            </div>
                            <br />
                            <div>
                                <label htmlFor="departmentId"><b>Department Number:</b> </label>
                                <input type="number" size={30} min={0} id='departmentId' name='departmentId' value={formData.departmentId} onChange={handleChange} required />
                            </div>
                            <br />
                            <div>
                                <label htmlFor="desknumber"><b>Desk Number:</b> </label>
                                <input type="number" size={30} min={0} id='desknumber' name='desknumber' value={formData.desknumber} onChange={handleChange} required />
                            </div>
                            <br />
                            <div>
                                <label htmlFor="officeId"><b>Office ID:</b>  </label>
                                <input type="number" min={0} id='officeId' name='officeId' value={formData.officeId} onChange={handleChange} required />
                            </div>
                            <br />
                            <div>
                                <label htmlFor="id"><b>Data ID</b> </label>
                                <input type="number" min={0} id='id' name='id' value={formData.id} onChange={handleChange} required/>
                            </div>
                            <br />
                            <div className='form-container'>
                                <button className='raised-button' type='submit' style={{ margin: 'auto', border: '2px solid black', backgroundColor: 'darkgray', color: 'white', fontSize: '15px' }}>Create Employee</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )

};


export default EmployeeCreationForm;