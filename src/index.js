import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WebFont from 'webfontloader';
// Route Components
import App from './App';
import reportWebVitals from './reportWebVitals';
import Layout from './layouts/Layout';
import Lenormand from './pages/tiradas/Lenormand';
import GrandTableau from './pages/tiradas/GrandTableau';
import CruzCelta from './pages/tiradas/CruzCelta';
import Tarot from './pages/tiradas/Tarot';
import Eneagrama from './pages/tiradas/Eneagrama';
import Esoterics from './pages/tienda/Esoterics';
import Become from './pages/tienda/Become';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAtLfr01oOZ06uk2xrKqJr9ku6LacHODIE",
  authDomain: "bruixa-481d5.firebaseapp.com",
  projectId: "bruixa-481d5",
  storageBucket: "bruixa-481d5.appspot.com",
  messagingSenderId: "536371485287",
  appId: "1:536371485287:web:f2e0917824ed0fe7e312c2",
  measurementId: "G-KKS5TB14NZ"
};

// Initialize Firebase
//eslint-disable-next-line
const app = initializeApp(firebaseConfig);

WebFont.load({
  google: {
    families: ['Noto Nastaliq Urdu:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900', 
               'Nunito Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900']
  }
});

const root = ReactDOM.createRoot(document.getElementById('load'));


root.render(
  <React.StrictMode>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<App />}></Route>
            <Route path="/tarot" element={<Tarot />}></Route>
            <Route path="/lenormand" element={<Lenormand />}></Route>
            <Route path="/grand-tableau" element={<GrandTableau />}></Route>
            <Route path="/cruz-celta" element={<CruzCelta />}></Route>
            <Route path="/eneagrama" element={<Eneagrama />}></Route>
            <Route path="/esoterics" element={<Esoterics />}></Route>
            <Route path="/become" element={<Become />}></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
