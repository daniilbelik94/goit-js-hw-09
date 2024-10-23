const feedbackForm = document.querySelector('.feedback-form');

feedbackForm.addEventListener('input', onChangeInputData);
feedbackForm.addEventListener('submit', onSubmitForm);

let formData = {
  email: '',
  message: '',
};

function init() {
  const dataFromLS = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (localStorage.getItem('feedback-form-state') == null) return;

  formData = dataFromLS;

  for (const key in dataFromLS) {
    if (dataFromLS.hasOwnProperty(key)) {
      feedbackForm.elements[key].value = dataFromLS[key];
    }
  }
}

init();

function onChangeInputData(e) {
  const elementName = e.target.name;
  const elementValue = e.target.value;
  formData[elementName] = elementValue;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onSubmitForm(e) {
  e.preventDefault();
  if (
    feedbackForm.elements.email.value.trim() !== '' &&
    feedbackForm.elements.message.value.trim() !== ''
  ) {
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    e.target.reset();
  } else {
    alert('Fill please all fields');
  }
}
