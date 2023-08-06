import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MyPlan.css'; // Import your CSS file for styling



const MyPlan = () => {

const navigate = useNavigate();

const handleSubmit = (e) => {
    e.preventDefault();
    // Perform registration logic here (e.g., submit data to the server)
    navigate('/PlanDetails');
  };

  return (
    <div className="container">
      <h2 className="current-plan">Current Plan Details</h2>
      <div className="active"><span>Active</span></div>
      <form>
        <h3 className="basic">Basic</h3>
        <h5 className="phone">Phone+Tablet</h5>
        <h1 className="rs"><i className="far fa-indian-rupee-sign"></i><strong>2,000/</strong>yr</h1>
        <button type="plan" onClick={handleSubmit}>Change Plan</button>
        <h5 className="subscription">Your Subscription has started on Jul 11th, 2022 and will auto renew on Jul 12th, 2023</h5>
      </form>
    </div>
  );
};

export default MyPlan;
