import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../src/firebaseConfig';
import { table } from 'console';
import assert from 'assert';

interface Asset {
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

const AssetTable = () => {
    const [assets, setAssets] = useState<Asset[]>([]);

    useEffect( () => {
        const fetchData = async () => {
            const assetsCollectionRef = collection(db, 'assetdata');
            const querySnapshot = await getDocs(assetsCollectionRef);
            const fetchedAssets: Asset[] = querySnapshot.docs.map(doc => ({
                ...doc.data() as Asset,
            }));
            setAssets(fetchedAssets);
        };

        fetchData()
    }, []);

    return(
        <table>
            <thead>
                <tr>
                    <th style={{border: '1px solid black', textAlign: 'center'}}>Asset ID</th>
                    <th style={{border: '1px solid black', textAlign: 'center'}}>Location ID</th>
                    <th style={{border: '1px solid black', textAlign: 'center'}}>Date Purchased</th>
                    <th style={{border: '1px solid black', textAlign: 'center'}}>Product Name</th>
                    <th style={{border: '1px solid black', textAlign: 'center'}}>Product Vendor</th>
                    <th style={{border: '1px solid black', textAlign: 'center'}}>Serial Number</th>
                    <th style={{border: '1px solid black', textAlign: 'center'}}>ID of Empoyee Assigned</th>
                    <th style={{border: '1px solid black', textAlign: 'center'}}>Type</th>
                    <th style={{border: '1px solid black', textAlign: 'center'}}>Quantity</th>
                </tr>
            </thead>
            <tbody>
                {assets.map(asset => (
                    <tr key={asset.assetId}>
                        <td style={{border: '1px solid black', textAlign: 'center'}}>{asset.assetId}</td>
                        <td style={{border: '1px solid black', textAlign: 'center'}}>{asset.location}</td>
                        <td style={{border: '1px solid black', textAlign: 'center'}}>{asset.dateAcquisition}</td>
                        <td style={{border: '1px solid black', textAlign: 'center'}}>{asset.name}</td>
                        <td style={{border: '1px solid black', textAlign: 'center'}}>{asset.purchasedFrom}</td>
                        <td style={{border: '1px solid black', textAlign: 'center'}}>{asset.serialNumber}</td>
                        <td style={{border: '1px solid black', textAlign: 'center'}}>{asset.employeeId}</td>
                        <td style={{border: '1px solid black', textAlign: 'center'}}>{asset.type}</td>
                        <td style={{border: '1px solid black', textAlign: 'center'}}>{asset.quantity}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
};

export default AssetTable;