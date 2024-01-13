let button = document.getElementById('btn');

button.addEventListener('click', () => {
    const length = parseInt(document.getElementById('length').value);
    const mass = parseInt(document.getElementById('mass').value);
    const result = document.getElementById('output');
    let height_status=false, mass_status=false;

    if(length === '' || isNaN(length) || (length <= 0)){
        document.getElementById('length_error').innerHTML = 'Please provide a valid length';
    }else{
        document.getElementById('length_error').innerHTML = '';
        length_status=true;
    }

    if(mass === '' || isNaN(mass) || (mass <= 0)){
        document.getElementById('mass_error').innerHTML = 'Please provide a valid mass';
    }else{
        document.getElementById('mass_error').innerHTML = '';
        mass_status=true;
    }

    if(length_status && mass_status){
        const bmi = (mass / ((length*length)/10000)).toFixed(2);

        if(bmi < 18.6){
            result.innerHTML = 'Under mass : ' + bmi;
        }else if(bmi >= 18.6 && bmi < 24.9){
            result.innerHTML = 'Normal : ' + bmi;
        }else{
            result.innerHTML = 'Over mass : ' + bmi;
        }
    }else{
        alert('The form has errors');
        result.innerHTML = '';
    }
    document.getElementById('btn').addEventListener('click', function() {
        var length = parseFloat(document.getElementById('length').value);
        var mass = parseFloat(document.getElementById('mass').value);
        var genderMale = document.getElementById('male').checked;
        var genderFemale = document.getElementById('female').checked;
        var activeLifestyle = document.getElementById('active').checked;
        var sedentaryLifestyle = document.getElementById('sedentary').checked;
        var genderError = document.getElementById('gender_error');
        if (!genderMale && !genderFemale) {
            genderError.textContent = 'Please select gender';
            genderError.style.color = 'red';
            return; 
        } else {
            genderError.textContent = ''; 
        }
    
        
        var lifestyleError = document.getElementById('lifestyle_error');
        if (!activeLifestyle && !sedentaryLifestyle) {
            lifestyleError.textContent = 'Please select at least one lifestyle';
            lifestyleError.style.color = 'red';
            return;
        } else {
            lifestyleError.textContent = ''; 
        }
    
    });
    document.getElementById('btn').addEventListener('click', function() {
        var height = document.getElementById('length').value;
        var mass = document.getElementById('mass').value;
        var gender = document.querySelector('input[name="gender"]:checked');
        var lifestyleCheckboxes = document.querySelectorAll('input[name="lifestyle"]:checked');
    
      
        output.innerHTML += '<p>length: ' + length + ' CM</p>';
        output.innerHTML += '<p>mass: ' + mass + ' KG</p>';
    
        if (gender) {
            output.innerHTML += '<p>Gender: ' + gender.value + '</p>';
        }
    
        if (lifestyleCheckboxes.length > 0) {
            output.innerHTML += '<p>Lifestyle: ';
            lifestyleCheckboxes.forEach(function(checkbox) {
                output.innerHTML += checkbox.value + ' ';
            });
            output.innerHTML += '</p>';
        }
    });
    
});