import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UserProvider from './storage/UserProvider';
import { BrowserRouter } from 'react-router-dom';
import Heading from './components/Heading';
import 'bootstrap/dist/css/bootstrap.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <UserProvider>
      {/* <MovieProvider> */}
        <BrowserRouter>
        <Heading/>
          <App />
        </BrowserRouter>
      {/* </MovieProvider> */}
    </UserProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
