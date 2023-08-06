// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css'; // Import the custom CSS file
import Home from './Home';
import Login from './login';
import Register from './register';
import PlanDetails from './PlanDetails';
import PaymentForm from './PaymentForm';
import MyPlan from './MyPlan';

const App = () => {
  return (
    <Router>
      <div classname='dd' style={{display : 'flex'}}>

        {/* Use the <Routes> component to wrap multiple <Route> components */}
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/PlanDetails" element={<PlanDetails />} />
          <Route path="/PaymentForm" element={<PaymentForm />} />
          <Route path="/MyPlan" element={<MyPlan />} />

          {/* You can add more routes here */}
          {/* <Route path="/some-other-page" element={<SomeOtherComponent />} /> */}
          {/* <Route path="/yet-another-page" element={<YetAnotherComponent />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
