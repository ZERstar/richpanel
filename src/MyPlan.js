// MyPlan.js

import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './MyPlan.css'; // Import your CSS file for styling

const MyPlan = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [renewalDate, setRenewalDate] = useState('');

  useEffect(() => {
    if (location.state && location.state.selectedPlan) {
      setSelectedPlan(location.state.selectedPlan);
    }
  }, [location.state]);

  useEffect(() => {
    // Function to get the current date and format it as 'MMM dd, yyyy'
    const getCurrentDate = () => {
      const currentDate = new Date();
      const options = { year: 'numeric', month: 'short', day: 'numeric' };
      const formattedDate = currentDate.toLocaleDateString('en-US', options);
      return formattedDate;
    };

    // Function to update the renewal date every second
    const updateRenewalDate = () => {
      const currentDate = getCurrentDate();
      setRenewalDate(currentDate);
    };

    // Update renewal date initially and then every second
    updateRenewalDate();
    const interval = setInterval(updateRenewalDate, 1000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  const handleChangePlan = () => {
    navigate('/PlanDetails'); // Navigate to the PlanDetails page to change the plan
  };

  return (
    <div className="container">
      <h2 className="current-plan">Current Plan Details</h2>
      {selectedPlan && (
        <div className="active">
          <span>Active: {selectedPlan.name}</span>
        </div>
      )}
      {selectedPlan && (
        <div className="order-summary">
          <h2>Order Summary</h2>
          <p className="plan-name">Plan Name: {selectedPlan.name}</p>
          <p>Billing Cycle: {selectedPlan.billingCycle}</p>
          <p className="plan-price">Plan Price: {selectedPlan.price}</p>
        </div>
      )}
      <form>
        {selectedPlan && (
          <>
            <h3 className="plan-name">{selectedPlan.name}</h3>
            <h1 className="plan-price">
              <i className="far fa-indian-rupee-sign"></i>
              <strong>{selectedPlan.price}</strong>
            </h1>
          </>
        )}
        <button type="plan" onClick={handleChangePlan}>
          Change Plan
        </button>
        <h5 className="subscription">
          Your Subscription will auto renew on {renewalDate}
        </h5>
      </form>
    </div>
  );
};

export default MyPlan;
