import React, { createContext, useState, useContext } from 'react';

const PlanContext = createContext();

const PlanProvider = ({ children }) => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  return (
    <PlanContext.Provider value={{ selectedPlan, setSelectedPlan }}>
      {children}
    </PlanContext.Provider>
  );
};

const usePlanContext = () => {
  return useContext(PlanContext);
};

export { PlanProvider, usePlanContext };
