import React from 'react'
import { useState, FormEvent, ChangeEvent } from 'react';
import './main.css'
import { db, storage } from '../firebaseConfig';
import { addDoc, collection } from 'firebase/firestore';
import { Navigate, useNavigate } from 'react-router-dom';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';



const securityCollection = collection(db, 'securityPolicy');

interface FormData {
    id: number;
    name: string;
    policyType: string;
    document: File | null;
}

const DocumentCreationForm: React.FC = () => {
    const navigate = useNavigate()
    
    const [formData, setFormData] = useState<FormData>({
        id: 0,
        name: '',
        policyType: '',
        document: null

    });

    const initialState: FormData = {
        id: 0,
        name: '',
        policyType: '',
        document:null,
        
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value, files } = event.target;
        if (name === 'document' && files) {
            setFormData((prevData) => ({
                ...prevData,
                document: files[0] || null
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value
            }));
        }
    };

    //this handles input
    /*const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData, [name]: value as keyof FormData,
        }))
    };*/

    /*const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            await addDoc(employeeCollection, formData);
            console.log('Document added sucessfully.')
            setFormData(initialState);
            navigate('/securitypolicy')
        } catch (error) {
            console.error('Error adding employee data: ', error)
        }
        console.log(formData)
    };*/

    const handleFileUpload = async (file: File) => {
        const storageRef = ref(storage, 'files/' + file.name);
        await uploadBytes(storageRef, file);
        return getDownloadURL(storageRef);
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (formData.document) {
            try {
                // Upload file and get URL
                const fileURL = await handleFileUpload(formData.document);

                // Save form data along with file URL to Firestore
                await addDoc(securityCollection, {
                    ...formData,
                    document: fileURL
                });

                console.log('Employee data added successfully.');
                setFormData(initialState);
                navigate('/employeedata');
            } catch (error) {
                console.error('Error adding employee data: ', error);
            }
        } else {
            console.error('No file selected.');
        }
    };

    //Not used. Kept on just in case the prior code dosent work
    const assignedAssetOptions = [/* */]
    const departmentOptions = [/* */]
    const officeOptions = [/* */]
    
    return (
        <div>
            {/*Due to the above document API not working, The documents will be embedded */}
            <div>
                <div>Document title</div>
                <div>Document</div>
            </div>
            <div>
                <div>Document Title</div>
                <div>Document</div>
            </div>
        </div>
    )

};


export default DocumentCreationForm;