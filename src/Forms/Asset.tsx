import React from 'react'
import { useState, FormEvent, ChangeEvent } from 'react';
import './main.css'
import { db } from '../firebaseConfig';
import { addDoc, collection } from 'firebase/firestore';
import { Navigate, useNavigate } from 'react-router-dom';


const assetCollection = collection(db, 'assetdata');

interface FormData {
    assetId: number;
    location: number;
    dateAcquisition: string;
    name: string;
    purchasedFrom: string;
    serialNumber: string;
    employeeId: number;
    type: string;
    quantity: number;
}

const AssetCreationForm: React.FC = () => {
    const navigate = useNavigate()
    
    const [formData, setFormData] = useState<FormData>({
        assetId: 0,
        location: 0,
        quantity: 0,
        dateAcquisition: '',
        name: '',
        purchasedFrom: '',
        serialNumber: '',
        employeeId: 0,
        type: '',
    });

    const initialState: FormData = {
        assetId: 0,
        location: 0,
        dateAcquisition: '',
        name: '',
        purchasedFrom: '',
        serialNumber: '',
        employeeId: 0,
        type: '',
        quantity: 0,
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
            await addDoc(assetCollection, formData);
            console.log('Asset Information added sucessfully.')
            setFormData(initialState);
            navigate('/assetdata')
        } catch (error) {
            console.error('Error adding Asset: ', error)
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
                    <h1>Add Asset</h1>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', margin: 'auto' }}>
                    <div>
                        <p style={{ textAlign: 'center' }}>
                            <b>Please note:</b> Only IT specialists are able to add asset information.
                        </p>
                        <p style={{ textAlign: 'center' }}>
                            <b>HR:</b> Please submit a ticket to IT to add a new asset.
                        </p>
                    </div>

                    <div style={{ width: '500px', margin: 'auto', justifyContent: 'center' }}>
                        {/*DEBUG NOTE: The post may need to be written as POST */}
                        <h3 style={{ textAlign: 'center' }}>New Asset Information Form</h3>
                        <form onSubmit={handleSubmit} style={{ width: '400px' }}>
                            <div className='formStyle'>
                                <label htmlFor="assetId"><b>Asset ID:</b>  </label>
                                <input type="number" size={30} id="assetId" name='assetId' value={formData.assetId} onChange={handleChange} required />
                            </div>
                            <br />
                            <div>
                                <label htmlFor="location"><b>Location ID:</b>  </label>
                                <input type="number" min={0} size={30} id="location" name='location' value={formData.location} onChange={handleChange} required />
                            </div>
                            <br />
                            <div>
                                <label htmlFor="dateAcquisition"><b>Date Purchased:</b>  </label>
                                <input type="text" size={30} id="dateAcquisition" name='dateAcquisition' value={formData.dateAcquisition} onChange={handleChange} required />
                            </div>
                            <br />
                            <div>
                                <label htmlFor="name"><b>Name of Product:</b>  </label>
                                <input type="text" size={25} width={100} id="name" name='name' value={formData.name} onChange={handleChange} required />
                            </div>
                            <br />
                            <div>
                                <label htmlFor="employeeId"><b>Employee ID:</b> </label>
                                <input type="number" min={0} id='employeeId' name='employeeId' value={formData.employeeId} onChange={handleChange} required />
                            </div>
                            <br />
                            <div>
                                <label htmlFor="purchasedFrom"><b>Vendor:</b> </label>
                                <input type="text" size={30} min={0} id='purchasedFrom' name='purchasedFrom' value={formData.purchasedFrom} onChange={handleChange} required />
                            </div>
                            <br />
                            <div>
                                <label htmlFor="serialNumber"><b>Product Serial Number:</b> </label>
                                <input type="text" size={30} min={0} id='serialNumber' name='serialNumber' value={formData.serialNumber} onChange={handleChange} required />
                            </div>
                            <br />
                            <div>
                                <label htmlFor="type"><b>Type:</b> </label>
                                <input type="text" size={30} min={0} id='type' name='type' value={formData.type} onChange={handleChange} required />
                            </div>
                            <div>
                                <label htmlFor="quantity"><b>Quantity Issued</b> </label>
                                <input type="number" min={0} id='quantity' name='quantity' value={formData.quantity} onChange={handleChange} required />
                            </div>
                            <br />
                            <div className='form-container'>
                                <button className='raised-button' type='submit' style={{ margin: 'auto', border: '2px solid black', backgroundColor: 'darkgray', color: 'white', fontSize: '15px' }}>Add Asset</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )

};


export default AssetCreationForm;