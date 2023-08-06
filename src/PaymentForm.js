// PaymentForm.js

import React from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import "./PaymentForm.css"; // Import your CSS file for styling

const PaymentForm = () => {
    const location = useLocation();
    const selectedPlan = location.state?.selectedPlan;

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (selectedPlan.price === '₹ 100') {
          window.location.href = 'https://buy.stripe.com/dR69Df9Kv8twbBKbIJ'; // Redirect to Stripe checkout for Plan 1
        } if (selectedPlan.price === '₹ 200'){
          window.location.href = 'https://buy.stripe.com/fZe7v7aOz39c21acMO'; // Redirect to Stripe checkout for other plans
        }
        if (selectedPlan.price === '₹ 500'){
          window.location.href = 'https://buy.stripe.com/eVa5mZg8T7ps35e4gg';
        }
        if (selectedPlan.price === '₹ 700'){
          window.location.href = 'https://buy.stripe.com/cN2cPr09V5hkeNW9AD';
        }
        else{
          window.location.href = 'https://buy.stripe.com/cN2cPr09V5hkeNW9AD';
        }
      };

    return (
        <div className="container">
            <div className="complete-payment">
                <h2>Complete Payment</h2>
                <form>
                    <label htmlFor="card-number">Card Number</label>
                    <input type="text" id="card-number" name="card-number" placeholder="Enter card number" />

                    <label htmlFor="expiry-date">Expiry Date</label>
                    <input type="text" id="expiry-date" name="expiry-date" placeholder="Enter expiry date" />

                    <label htmlFor="cvv">CVV</label>
                    <input type="text" id="cvv" name="cvv" placeholder="Enter CVV" />

                    <button onClick={handleSubmit}>Confirm Payment</button>
                </form>
            </div>

            {selectedPlan && (
                <div className="order-summary">
                    <h2>Order Summary</h2>
                    <p className="plan-name">Plan Name: {selectedPlan.name}</p>
                    <p>Billing Cycle: {selectedPlan.billingCycle}</p>
                    <p className="plan-price">Plan Price: {selectedPlan.price}</p>
                </div>
            )}
        </div>
    );
};

export default PaymentForm;
