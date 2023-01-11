import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WebFont from 'webfontloader';
// Firebase
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// Route Components
import App from './App';
import reportWebVitals from './reportWebVitals';
import Layout from './layouts/Layout';
import Lenormand from './pages/tiradas/Lenormand';
import Pronostico from './pages/tiradas/Pronostico';
import Tarot from './pages/tiradas/Tarot';
import Eneagrama from './pages/tiradas/Eneagrama';


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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
WebFont.load({
  google: {
    families: ['Noto Nastaliq Urdu:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900', 
               'Nunito Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900']
  }
});

root.render(
  <React.StrictMode>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<App />}></Route>
            <Route path="/tarot" element={<Tarot />}></Route>
            <Route path="/lenormand" element={<Lenormand />}></Route>
            <Route path="/pronostico" element={<Pronostico />}></Route>
            <Route path="/eneagrama" element={<Eneagrama />}></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
