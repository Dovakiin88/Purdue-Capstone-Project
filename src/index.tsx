import React from "react";
import ReactDom from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import AssetData from "./AssetData";
import MaintenanceRecords from "./MaintenanceRecords";
import EmployeeData from "./EmployeeData";
import SecurityPolicies from "./SecurityPolicies";
import AuditData from "./AuditData";
import './index.css'
import EmployeeCreationForm from "./Forms/Employee";
import AssetCreationForm from "./Forms/Asset";
import DocumentCreationForm from "./Forms/SPdocument";


const root = ReactDom.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/assetdata" element={<AssetData />} />
        <Route path="/employeedata" element={<EmployeeData />} />
        <Route path="/maintenancerecords" element={<MaintenanceRecords />} />
        <Route path="/securitypolicy" element={<SecurityPolicies />} />
        <Route path="/auditdata" element={<AuditData />} />
        <Route path="/employee" element={<EmployeeCreationForm />} />
        <Route path="/asset" element={<AssetCreationForm/>}/>
        <Route path="/auditdata" element={<AuditData />} />
        <Route path="/securepolicy" element={<DocumentCreationForm />} />
      </Routes>
    </Router>
  </React.StrictMode>
)
