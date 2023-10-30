document.addEventListener('DOMContentLoaded', function () {
    const stepContainers = document.querySelectorAll('.step-container');
    const stepButtons = document.querySelectorAll('.step');
    const nextButtons = document.querySelectorAll('[id$="-next"]');
    const backButtons = document.querySelectorAll('[id$="-back"]');
    const sidebarButtons = document.querySelectorAll('[id$="-button"]');
  
    let currentStep = 0;
  
    function hideAllSteps() {
      stepContainers.forEach((stepContainer) => {
        stepContainer.style.display = 'none';
      });
    }
  
    function showCurrentStep() {
      stepContainers[currentStep].style.display = 'block';
    }
  
    function goToNextStep() {
      if (currentStep < stepContainers.length - 1) {
        hideAllSteps();
        currentStep++;
        showCurrentStep();
      }
    }
  
    function goToPreviousStep() {
      if (currentStep > 0) {
        hideAllSteps();
        currentStep--;
        showCurrentStep();
      }
    }
  
    nextButtons.forEach((nextButton, index) => {
      nextButton.addEventListener('click', function (e) {
        e.preventDefault();
        if (currentStep === index) {
          goToNextStep();
        }
      });
    });
  
    backButtons.forEach((backButton, index) => {
      backButton.addEventListener('click', function (e) {
        e.preventDefault();
        if (currentStep === index + 1) {
          goToPreviousStep();
        }
      });
    });
  
    sidebarButtons.forEach((sidebarButton, index) => {
      sidebarButton.addEventListener('click', function () {
        hideAllSteps();
        currentStep = index;
        showCurrentStep();
      });
    });
  
    hideAllSteps();
    showCurrentStep();
  });
  