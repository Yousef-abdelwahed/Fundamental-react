import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
//
import { nanoid } from "nanoid";
//
import MainReview from "./components/04-reviews/MainReview";
import MainQuiz from "./components/03-quiz/MainQuiz";
import MenuMain from "./components/05-menu/MenuMain";

//
import Paragraph from "./components/08-paragraph/Paragraph";
import MainColorComponent from "./components/09-Colors/MainColorComponent";
import MainGroceryComponent from "./components/10-grocery-bud/MainGroceryComponent";
import TourMainComponent from "./components/02-ToursCard/TourProject/TourMainComponent";

const steps = [
  {
    label: <h4>Tours</h4>,
    description: `set up the questions array as a state variable using the useState hook. This will allow you to modify the data and have those changes automatically reflected in the rendered output
    and use accordion style`,
    components: <TourMainComponent />,
  },
  {
    label: <h4>Quiz</h4>,
    description: `set up the questions array as a state variable using the useState hook. This will allow you to modify the data and have those changes automatically reflected in the rendered output
    and use accordion style`,
    components: <MainQuiz />,
  },
  {
    label: <h4>review</h4>,
    description: `we have list of items and we want to only display one person at a time,And we also have this option to pick the random one.`,
    components: <MainReview />,
  },
  {
    label: <h4>Menu</h4>,
    description: ``,
    components: <MenuMain />,
  },
  {
    label: <h4>paragraph generator</h4>,
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,

    components: <Paragraph />,
  },
  {
    label: <h4>Color Generator </h4>,
    description:
      "An ad group contains one or more ads which target a shared set of keywords.",

    components: <MainColorComponent />,
  },
  {
    label: <h4>Grocery</h4>,
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,

    components: <MainGroceryComponent />,
  },
  {
    label: "Create an ad",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
    components: "",
    //  <MainGroceryComponent />,
  },
];

const App = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <>
      <section className="my-5">
        <Box sx={{ maxWidth: 700 }} className="text-white m-auto">
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((step, index) => (
              <Step key={nanoid()}>
                <span className="text-white">
                  <StepLabel
                    optional={
                      index === steps.length - 1 ? (
                        <Typography className="text-success" variant="caption">
                          Last step
                        </Typography>
                      ) : null
                    }
                  >
                    <span className="text-white"> {step.label}</span>
                  </StepLabel>
                </span>

                <StepContent>
                  <Typography>{step.description}</Typography>
                  <main>{step.components}</main>

                  <Box sx={{ mb: 2 }}>
                    <div>
                      <Button
                        variant="contained"
                        onClick={handleNext}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        {index === steps.length - 1 ? "Finish" : "Next"}
                      </Button>
                      <Button
                        disabled={index === 0}
                        onClick={handleBack}
                        sx={{ mt: 1, mr: 1 }}
                        className="text-warning"
                      >
                        Back
                      </Button>
                    </div>
                  </Box>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length && (
            <Paper square elevation={0} sx={{ p: 3 }}>
              <Typography>
                All steps completed - you&apos;re finished
              </Typography>
              <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                Reset
              </Button>
            </Paper>
          )}
        </Box>
      </section>
    </>
  );
};

export default App;
