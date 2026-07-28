const form = document.querySelector('#athleteRegistration');
const email = document.querySelector('#email');
const pass = document.querySelector('#pass');
const passRepeat = document.querySelector('#passRepeat');
const name = document.querySelector('#athleteName');
const phone = document.querySelector('#telphone');
const birthDate = document.querySelector('#birthDate');
const genre = document.querySelector('input[name="genre"]:checked');
const clubType = document.querySelector('input[name="clubType"]:checked');
const associationSelect = document.querySelector('#associationSelect');
const associationSelectContainer = document.querySelector('#selectContainer');
const associationText = document.querySelector('#associationText');
const associationTextContainer = document.querySelector('#textContainer');
const belt = document.querySelector('#belt');
const privacity = document.querySelector('#privacityAgree');
const terms = document.querySelector('#useAgree');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
})


//Validation Functions
function checkInputs()
{
    const emailValue = email.value.trim()
    const passValue = pass.value.trim()
    const passRepeatValue = passRepeat.value.trim()


}

function validateEmail(email)
{
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const emailProviders = ['gmail.com', 'hotmail.com', 'outlook.com', 'yahoo.com', 'yahoo.com.br'];
    const validEmail = emailRegex.test(emailValue);

}

//Misc Functions

const radioClubTypes = document.querySelectorAll('input[name="clubType"]');

function activateFields(activateInputs, desactivateInputs)
{
    activateInputs.forEach(input => input.disable = false);
    desactivateInputs.forEach(input => input.disable = true);
}

activateFields([],[associationSelect, associationText]);

radioClubTypes.forEach(
    function(radio)
    {
        radio.addEventListener(
            'change',
            function()
            {
                if(this.value == 0 || this.value == 1)
                {
                    associationSelectContainer.style.display = "block";
                    associationTextContainer.style.display = "none";
                    activateFields([associationSelect],[associationText]);
                }
                else if(this.value == 2)
                {
                    associationSelectContainer.style.display = "none";
                    associationTextContainer.style.display = "block";
                    activateFields([associationText],[associationSelect]);
                }
            }
        )
    }
)