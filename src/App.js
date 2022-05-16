import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from '../src/pages/homePage';
import AmenitiesPage from '../src/pages/amenitiesPage';
import FloorPlansPage1 from '../src/pages/floorPlans1Page';
import FloorPlansPage2 from '../src/pages/homePage';
import FloorPlansPageTownhomes from '../src/pages/homePage';
import PhotosPage from '../src/pages/photosPage';
import NeighborhoodPage from '../src/pages/neighborhoodPage';
import FaqApplicationPage from './pages/faqApplicantPage';
import FaqSchoolsPage from '../src/pages/faqSchoolsPage';
import FaqRentersPage from './pages/faqRentersPage';
import TourPage from '../src/pages/tourPage';
import ContactResidentsPage from '../src/pages/contactResidentsPage';
import ContactInvestorspage from '../src/pages/contactInvestorsPage';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Header/>
      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='Amenities' element={<AmenitiesPage />} />
          <Route path='Floor Plans 1' element={<FloorPlansPage1 />} />
          <Route path='Floor Plans 2' element={<FloorPlansPage2 />} />
          <Route path='Townhomes' element={<FloorPlansPageTownhomes />} />
          <Route path='Photos' element={<PhotosPage />} />
          <Route path='Neighborhood' element={<NeighborhoodPage />} />
          <Route path='FAQ Application' element={<FaqApplicationPage />} />
          <Route path='FAQ Schools' element={<FaqSchoolsPage />} />
          <Route path='FAQ Renters' element={<FaqRentersPage />} />
          <Route path='Tour Page' element={<TourPage />} />
          <Route path='Investors Page' element={<ContactInvestorspage />} />
          <Route path='Residents Page' element={<ContactResidentsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
