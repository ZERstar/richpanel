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
        navigate('/MyPlan');
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
