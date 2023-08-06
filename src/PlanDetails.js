import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import "./PlanDetails.css"; // Import your CSS file for styling

// Create a button component with props
const Button = styled.button`
  // Add some styles based on props
  background-color: ${(props) => (props.active ? "blue" : "#1a237e")}; // Dark blue shade
  color: white; // Text color
  padding: 10px 20px; // Increased padding to make it wider
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  width: 200px; // Make the button wider
  margin-top: 20px; // Lower the button down a bit
`;

const NextButton = styled(Button)`
  background-color: #1a237e; // Dark blue shade for this button
  padding: 15px 30px; // Add padding to the button
  width: 250px; // Make the button wider for this specific case
  margin: 35px; // Add some margin
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
  const [active, setActive] = useState("Mobile");
  const [isMonthly, setIsMonthly] = useState(true);

  const handleToggleChange = () => {
    setIsMonthly(!isMonthly);
  };

  const plans = {
    Mobile: {
      price: isMonthly ? "₹ 100" : "₹ 1,000",
      videoQuality: "Good",
      resolution: "480p",
      devices: "2",
    },
    Basic: {
      price: isMonthly ? "₹ 200" : "₹ 2,000",
      videoQuality: "Good",
      resolution: "480p",
      devices: "4",
    },
    Standard: {
      price: isMonthly ? "₹ 500" : "₹ 5,000",
      videoQuality: "Better",
      resolution: "1080p",
      devices: "4",
    },
    Premium: {
      price: isMonthly ? "₹ 700" : "₹ 7,000",
      videoQuality: "Best",
      resolution: "4k + HDR",
      devices: "4",
    },
  };

  const navigate = useNavigate();

  const handleClick = (e) => {
    // Set the active state to the clicked button's value
    setActive(e.target.value);
  };

  // Get the data object of the active plan
  const activePlan = plans[active];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform registration logic here (e.g., submit data to the server)
    navigate('/PaymentForm');
  };

  return (
    <div className="plan-details-container">
       <h1 style={{ marginTop: "10px" }}>Choose the right plan for you</h1>   
      <GridContainer>
        <GridItem><div className="toggle-container">
        <div className="toggle-button" onClick={handleToggleChange}>
          <div
            className={`highlight ${
              isMonthly ? "monthly-highlight" : "yearly-highlight"
            }`}
          ></div>
          <div className="monthly-text">Monthly</div>
          <div className="yearly-text">Yearly</div>
        </div>
      </div></GridItem>
        <GridItem1>
          <Button
          className="packbutton"
            value="Mobile"
            active={active === "Mobile"}
            onClick={handleClick}
           
          >
            Mobile
          </Button>
        </GridItem1>
        <GridItem1 >
          <Button
           className="packbutton"
            value="Basic"
            active={active === "Basic"}
            onClick={handleClick}
          >
            Basic
          </Button>
        </GridItem1>
        <GridItem1>
          <Button
           className="packbutton"
            value="Standard"
            active={active === "Standard"}
            onClick={handleClick}
          >
            Standard
          </Button>
        </GridItem1>
        <GridItem1>
          <Button
           className="packbutton"
            value="Premium"
            active={active === "Premium"}
            onClick={handleClick}
          >
            Premium
          </Button>
        </GridItem1>
        <GridItem>Price</GridItem>
        <GridItem style={{ color: active === "Mobile" ? "blue" : "black" }}>
          {plans.Mobile.price}
        </GridItem>
        <GridItem style={{ color: active === "Basic" ? "blue" : "black" }}>
          {plans.Basic.price}
        </GridItem>
        <GridItem style={{ color: active === "Standard" ? "blue" : "black" }}>
          {plans.Standard.price}
        </GridItem>
        <GridItem style={{ color: active === "Premium" ? "blue" : "black" }}>
          {plans.Premium.price}
        </GridItem>
        <GridItem>Video quality</GridItem>
        <GridItem style={{ color: active === "Mobile" ? "blue" : "black" }}>
          {plans.Mobile.videoQuality}
        </GridItem>
        <GridItem style={{ color: active === "Basic" ? "blue" : "black" }}>
          {plans.Basic.videoQuality}
        </GridItem>
        <GridItem style={{ color: active === "Standard" ? "blue" : "black" }}>
          {plans.Standard.videoQuality}
        </GridItem>
        <GridItem style={{ color: active === "Premium" ? "blue" : "black" }}>
          {plans.Premium.videoQuality}
        </GridItem>
        <GridItem>Resolution</GridItem>
        <GridItem style={{ color: active === "Mobile" ? "blue" : "black" }}>
          {plans.Mobile.resolution}
        </GridItem>
        <GridItem style={{ color: active === "Basic" ? "blue" : "black" }}>
          {plans.Basic.resolution}
        </GridItem>
        <GridItem style={{ color: active === "Standard" ? "blue" : "black" }}>
          {plans.Standard.resolution}
        </GridItem>
        <GridItem style={{ color: active === "Premium" ? "blue" : "black" }}>
          {plans.Premium.resolution}
        </GridItem>
        <GridItem>Devices you can support</GridItem>
        <GridItem style={{ color: active === "Mobile" ? "blue" : "black" }}>
          {plans.Mobile.devices}
        </GridItem>
        <GridItem style={{ color: active === "Basic" ? "blue" : "black" }}>
          {plans.Basic.devices}
        </GridItem>
        <GridItem style={{ color: active === "Standard" ? "blue" : "black" }}>
          {plans.Standard.devices}
        </GridItem>
        <GridItem style={{ color: active === "Premium" ? "blue" : "black" }}>
          {plans.Premium.devices}
        </GridItem>
      </GridContainer>
      <NextButton onClick={handleSubmit}>Next</NextButton>
    </div>
  );
};

export default PlanDetails;
