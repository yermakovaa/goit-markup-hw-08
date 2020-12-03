const refs = {
  form: document.querySelector('.js-speaker-form'),
};

refs.form.addEventListener('submit', onFormConsoleData);

function onFormConsoleData(e) {
  e.preventDefault();
  new FormData(e.currentTarget).forEach((value, name) =>
    console.log(`${name}: ${value}`),
  );
  e.currentTarget.reset();
}
