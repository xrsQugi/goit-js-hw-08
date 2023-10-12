import throttle from 'lodash.throttle';

const LOCAL_STORAGE_KEY = '"feedback-form-state"';
const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

function onFormInput(e) {
  let storageFilter = localStorage.getItem(LOCAL_STORAGE_KEY);
  storageFilter = storageFilter ? JSON.parse(storageFilter) : {};
  storageFilter[e.target.name] = e.target.value;
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(storageFilter));
}

function onFormSubmit(e) {
  e.preventDefault();
  const formData = new FormData(form);
  formData.forEach((value, name) => console.log(`${name}: ${value}`));
  e.currentTarget.reset();
  localStorage.removeItem(LOCAL_STORAGE_KEY);
}
