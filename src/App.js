import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Specialities from './pages/Specialities';
import RCM from './pages/RCM';
import Companyoverview from './pages/Companyoverview';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Ourspecialities from './pages/Ourspecialities';
import MedicalBillingServices from './pages/MedicalBillingServices';
import PhysicianBillingServices from './pages/PhysicianBillingServices';
import ARRecoveryServices from './pages/ARRecoveryServices';
import ImagingCenterBilling from './pages/ImagingCenterBilling';
import AmbulatorySurgeryBilling from './pages/AmbulatorySurgeryBilling';
import LaboratoryBillingServices from './pages/LaboratoryBillingServices';
import HospitalBillingServices from './pages/HospitalBillingServices';
import CoverageDiscovery from './pages/CoverageDiscovery';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/MedicalBillingServices' element={<MedicalBillingServices />} />
          <Route path='/PhysicianBillingServices' element={<PhysicianBillingServices />} />
          <Route path='/ARRecoveryServices' element={<ARRecoveryServices />} />
          <Route path='/ImagingCenterBilling' element={<ImagingCenterBilling />} />
          <Route path='/AmbulatorySurgeryBilling' element={<AmbulatorySurgeryBilling />} />
          <Route path='/LaboratoryBillingServices' element={<LaboratoryBillingServices />} />
          <Route path='/HospitalBillingServices' element={<HospitalBillingServices />} />
          <Route path='/CoverageDiscovery' element={<CoverageDiscovery/>} />
          <Route path='/Specialities' element={<Specialities />} />
          <Route path='/Ourspecialities' element={<Ourspecialities/>} />
          <Route path='/RCM' element={<RCM />} />
          <Route path='/Companyoverview' element={<Companyoverview />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
        <Footer/>
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
