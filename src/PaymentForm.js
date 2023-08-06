import React from "react";
import { useNavigate } from 'react-router-dom';

import "./PaymentForm.css"; // Import your CSS file for styling

const PaymentForm = () => {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/myPlan');
      };


  return (
    <div className="container">
      <div className="complete-payment">
        <h2>Complete Payment</h2>
        <form>
          <label htmlFor="card-number">Card Number</label>
          <input type="text" id="card-number" name="card-number" placeholder="Enter card number" />

          <label htmlFor="card-name">Name on Card</label>
          <input type="text" id="card-name" name="card-name" placeholder="Enter name on card" />

          <label htmlFor="expiry-date">Expiry Date</label>
          <input type="text" id="expiry-date" name="expiry-date" placeholder="Enter expiry date" />

          <label htmlFor="cvv">CVV</label>
          <input type="text" id="cvv" name="cvv" placeholder="Enter CVV" />

          <button onClick={handleSubmit}>Confirm Payment</button>
        </form>
      </div>

      <div className="order-summary">
        <h2>Order Summary</h2>
        <p className="plan-name">Plan Name: Basic</p>
        <p>Billing Cycle: Monthly</p>
        <p className="plan-price">Plan Price: ₹2000/month</p>
      </div>
    </div>
  );
};

export default PaymentForm;
