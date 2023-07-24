import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App.jsx';
import ChangeEmail from './components/ChangeEmail/ChangeEmail';
import ChangePassword2 from './components/ChangePassword2/ChangePassword2';
import { Chat } from './components/ChatTemplate.jsx';
import CreateCities2 from './components/CreateCities2/CreateCities2';
import CreateMountainRoute2 from './components/CreateMountainRoute2/CreateMountainRoute2';
import CreateOffer2 from './components/CreateOffer2/CreateOffer2';
import Experience from './components/Experience/Experience';
import FormProfile from './components/FormProfile';
import Habilities from './components/Habilities/Habilities';
import Offer from './components/Offers/Offers';
import Tecnologias from './components/Tecnologias/Tecnologias';
import { AuthContextProvider } from './contexts/authContext.jsx';
import AboutUs from './pages/AboutUs/AboutUs';
import CheckCode from './pages/CheckCode.jsx';
import Citys from './pages/Citys/Citys.jsx';
import ForgotPassword from './pages/ForgotPassword.jsx';
import { Home } from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import MountainRouteDetails from './pages/MountainRouteDetails/MountainRouteDetails';
import MountainRoutes from './pages/MountainRoutes/MountainRoutes.jsx';
import OfferDetails from './pages/OfferDetails/OfferDetails';
import Offers from './pages/Offers/Offers';
import Profile from './pages/Profile';
import Register from './pages/Register.jsx';
import RuteroDetails from './pages/RuteroDetails/RuteroDetails';
import Ruteros from './pages/Ruteros/Ruteros.jsx';
import CityDetails from './pages/CityDetails/CityDetails';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/">
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          {/* <Route index element={<PruebaEmotion />} /> */}
          <Route path="/ruteros" element={<Ruteros />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/citys" element={<Citys />} />
          <Route path="/mountainRoutes" element={<MountainRoutes />} />
          <Route path="/ruteroDetails" element={<RuteroDetails />} />
          <Route path="/offerDetails" element={<OfferDetails />} />
          <Route path="/cityDetails" element={<CityDetails />} />
          <Route path="/mountainRouteDetails" element={<MountainRouteDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/createOffer2" element={<CreateOffer2 />} />
          <Route path="/createMountainRoute2" element={<CreateMountainRoute2 />} />
          <Route path="/createCities2" element={<CreateCities2 />} />
          <Route path="/register" element={<Register />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/profile" element={<Profile />}>
            <Route index element={<FormProfile />} />
            <Route path="/profile/changePassword" element={<ChangePassword2 />} />
            <Route path="/profile/changeEmail" element={<ChangeEmail />} />
            <Route path="/profile/experience" element={<Experience />} />
            <Route path="/profile/Offer" element={<Offer />} />
            <Route path="/profile/tecnologias" element={<Tecnologias />} />
            <Route path="/profile/habilities" element={<Habilities />} />
          </Route>
          <Route path="/verifyCode" element={<CheckCode />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
        </Route>
      </Routes>
    </AuthContextProvider>
  </BrowserRouter>,
);
