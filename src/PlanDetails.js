// PlanDetails.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import './PlanDetails.css'; // Import your CSS file for styling

const Button = styled.button`
  // Add some styles based on props
  background-color: ${(props) => (props.active ? 'blue' : '#1a237e')};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  width: 200px;
  margin-top: 20px;
`;

const NextButton = styled(Button)`
  background-color: #1a237e;
  padding: 15px 30px;
  width: 250px;
  margin: 35px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  margin-top: 20px;
`;

const GridItem = styled.div`
  grid-column: span 1;
  font-weight: bold;
  text-align: center;
`;

const GridItem1 = styled.div`
  grid-column: span 1;
  text-align: center;
`;

const PlanDetails = () => {
  const [active, setActive] = useState('Mobile');
  const [isMonthly, setIsMonthly] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleToggleChange = () => {
    setIsMonthly(!isMonthly);
  };

  const plans = {
    Mobile: {
      name: 'Mobile',
      billingCycle: 'Monthly',
      price: isMonthly ? '₹ 100' : '₹ 1,000',
      videoQuality: 'Good',
      resolution: '480p',
      devices: '2',
    },
    Basic: {
      name: 'Basic',
      billingCycle: 'Monthly',
      price: isMonthly ? '₹ 200' : '₹ 2,000',
      videoQuality: 'Good',
      resolution: '480p',
      devices: '4',
    },
    Standard: {
      name: 'Standard',
      billingCycle: 'Monthly',
      price: isMonthly ? '₹ 500' : '₹ 5,000',
      videoQuality: 'Better',
      resolution: '1080p',
      devices: '4',
    },
    Premium: {
      name: 'Premium',
      billingCycle: 'Monthly',
      price: isMonthly ? '₹ 700' : '₹ 7,000',
      videoQuality: 'Best',
      resolution: '4k + HDR',
      devices: '4',
    },
  };

  const navigate = useNavigate();

  const handleClick = (e) => {
    setActive(e.target.value);
  };

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
    navigate('/PaymentForm', { state: { selectedPlan: plan } });
  };

  return (
    <div className="plan-details-container">
      <h1 style={{ marginTop: '10px' }}>Choose the right plan for you</h1>
      <GridContainer>
        <GridItem>
          <div className="toggle-container">
            <div className="toggle-button" onClick={handleToggleChange}>
              <div
                className={`highlight ${
                  isMonthly ? 'monthly-highlight' : 'yearly-highlight'
                }`}
              ></div>
              <div className="monthly-text">Monthly</div>
              <div className="yearly-text">Yearly</div>
            </div>
          </div>
        </GridItem>
        {Object.values(plans).map((plan) => (
          <GridItem1 key={plan.name}>
            <Button
              className="packbutton"
              value={plan.name}
              active={active === plan.name}
              onClick={handleClick}
            >
              {plan.name}
            </Button>
          </GridItem1>
        ))}
        <GridItem>Price</GridItem>
        {Object.values(plans).map((plan) => (
          <GridItem
            key={plan.name}
            style={{ color: active === plan.name ? 'blue' : 'black' }}
          >
            {plan.price}
          </GridItem>
        ))}
        <GridItem>Video quality</GridItem>
        {Object.values(plans).map((plan) => (
          <GridItem
            key={plan.name}
            style={{ color: active === plan.name ? 'blue' : 'black' }}
          >
            {plan.videoQuality}
          </GridItem>
        ))}
        <GridItem>Resolution</GridItem>
        {Object.values(plans).map((plan) => (
          <GridItem
            key={plan.name}
            style={{ color: active === plan.name ? 'blue' : 'black' }}
          >
            {plan.resolution}
          </GridItem>
        ))}
        <GridItem>Devices you can support</GridItem>
        {Object.values(plans).map((plan) => (
          <GridItem
            key={plan.name}
            style={{ color: active === plan.name ? 'blue' : 'black' }}
          >
            {plan.devices}
          </GridItem>
        ))}
      </GridContainer>
      <NextButton onClick={() => handlePlanSelect(plans[active])}>Next</NextButton>
    </div>
  );
};

export default PlanDetails;
