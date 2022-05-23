import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from '../src/pages/homePage';
import AmenitiesPage from '../src/pages/amenitiesPage';
import FloorPlansPage1 from '../src/pages/floorPlans1Page';
import FloorPlansPage2 from '../src/pages/floorPlans2Page';
import PhotosPage from '../src/pages/photosPage';
import FaqApplicantPage from '../src/pages/faqApplicantPage';
import FaqSchoolsPage from '../src/pages/faqSchoolsPage';
import FaqRentersPage from './pages/faqRentersPage';
import TourPage from '../src/pages/tourPage';
import ContactResidentsPage from '../src/pages/contactResidentsPage';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Header/>
      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='Amenities' element={<AmenitiesPage />} />
          <Route path='Floor%20Plans%201' element={<FloorPlansPage1 />} />
          <Route path='Floor%20Plans%202' element={<FloorPlansPage2 />} />
          <Route path='Photos' element={<PhotosPage />} />
          <Route path='FAQ%20Application' element={<FaqApplicantPage />} />
          <Route path='FAQ%20Schools' element={<FaqSchoolsPage />} />
          <Route path='FAQ%20Renters' element={<FaqRentersPage />} />
          <Route path='Tour Page' element={<TourPage />} />
          <Route path='Investors%20Page' element={<ContactResidentsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
