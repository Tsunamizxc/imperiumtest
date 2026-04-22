document.addEventListener('DOMContentLoaded', function() {
    const steps = document.querySelectorAll('.brief__form_list');
    const stageItems = document.querySelectorAll('.brief__stage_item');
    
    let currentStep = 0;
    const totalSteps = steps.length;
    
    function showStep(stepIndex) {
        steps.forEach((step, index) => {
            step.style.display = index === stepIndex ? 'flex' : 'none';
        });
        
        stageItems.forEach((item, index) => {
            if (index === stepIndex) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
        
        currentStep = stepIndex;
    }
    
    function isAnyCheckboxCheckedInStep(stepIndex) {
        const currentStepElement = steps[stepIndex];
        if (!currentStepElement) return false;
        
        const checkboxes = currentStepElement.querySelectorAll('input[type="checkbox"]');
        let isChecked = false;
        
        checkboxes.forEach(checkbox => {
            if (checkbox.checked) isChecked = true;
        });
        
        return isChecked;
    }
    
    function updateButtonState(stepIndex) {
        const isChecked = isAnyCheckboxCheckedInStep(stepIndex);
        const currentStepElement = steps[stepIndex];
        let button = null;
        
        if (stepIndex === totalSteps - 1) {
            button = currentStepElement.querySelector('.brief__form_submit-btn');
        } else {
            button = currentStepElement.querySelector('.brief__form_next-btn');
        }
        
        if (button) {
            if (isChecked) {
                button.removeAttribute('disabled');
                button.style.opacity = '1';
                button.style.cursor = 'pointer';
                button.style.pointerEvents = 'auto';
            } else {
                button.setAttribute('disabled', 'disabled');
                button.style.opacity = '0.5';
                button.style.cursor = 'not-allowed';
                button.style.pointerEvents = 'none';
            }
        }
    }
    
    function goToNextStep(currentStepIndex) {
        if (currentStepIndex < totalSteps - 1) {
            if (isAnyCheckboxCheckedInStep(currentStepIndex)) {
                showStep(currentStepIndex + 1);
                updateButtonState(currentStep + 1);
            }
        }
    }
    
    showStep(0);
    
    steps.forEach((step, stepIndex) => {
        const nextBtn = step.querySelector('.brief__form_next-btn');
        const submitBtn = step.querySelector('.brief__form_submit-btn');
        
        if (nextBtn) {
            nextBtn.addEventListener('click', function(e) {
                e.preventDefault();
                if (stepIndex === currentStep) {
                    goToNextStep(stepIndex);
                }
            });
        }
        
        if (submitBtn) {
            submitBtn.addEventListener('click', function(e) {
                e.preventDefault();
                if (isAnyCheckboxCheckedInStep(stepIndex)) {
                    document.querySelector('.brief__form').submit();
                }
            });
        }
    });
    
    steps.forEach((step, stepIndex) => {
        const checkboxes = step.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                updateButtonState(stepIndex);
            });
        });
    });
    
    stageItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            let canNavigate = true;
            if (index > 0) {
                for (let i = 0; i < index; i++) {
                    if (!isAnyCheckboxCheckedInStep(i)) {
                        canNavigate = false;
                        break;
                    }
                }
            }
            
            if (canNavigate && index !== currentStep) {
                showStep(index);
                updateButtonState(currentStep);
            }
        });
        item.style.cursor = 'pointer';
    });
    
    updateButtonState(0);
});