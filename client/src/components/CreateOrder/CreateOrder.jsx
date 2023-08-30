import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Stepper, Step, StepLabel, Button } from '@material-ui/core';

const CreateOrder = () => {
    const history = useNavigate();
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleConfirmOrder = async () => {
        try {
            // Create an order using the provided /orders API endpoint
            // Display the success message
            console.log('Your order is confirmed.');
        } catch (error) {
            console.error('Error creating order:', error);
        }
    };

    const steps = ['Step 1', 'Step 2', 'Step 3']; // Define your steps here

    const getStepContent = (stepIndex) => {
        // Customize step content based on stepIndex
        // For example: return <Step1Form />;
    };

    return (
        <div>
            <p>Hii this is akashdfrtgfdstg</p>
            {/* <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper> */}
            {/* <div>
                {activeStep === steps.length ? (
                    <div>
                        <p>Your order is confirmed.</p>
                    </div>
                ) : (
                    <div>
                        <div>{getStepContent(activeStep)}</div>
                        <div>
                            <Button disabled={activeStep === 0} onClick={handleBack}>
                                Back
                            </Button>
                            <Button variant="contained" color="primary" onClick={handleNext}>
                                {activeStep === steps.length - 1 ? 'Confirm Order' : 'Next'}
                            </Button>
                        </div>
                    </div>
                )}
            </div> */}
        </div>
    );
};

export default CreateOrder;


// import React from 'react'

// const CreateOrder = () => {
//   return (
//     <div>sdfg</div>
//   )
// }

// export default CreateOrder
