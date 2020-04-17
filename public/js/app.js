const weatherForm = document.querySelector('form');
const search = document.querySelector('input');

const message0ne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const location = search.value;

    message0ne.textContent = 'Loading, please wait!'
    messageTwo.textContent = ''
    fetch('/weather?address=' + location).then((response) => {
        response.json().then( (data) => {
            if(data.error){
                message0ne.textContent = data.error;
            } else {
            message0ne.textContent = data.location;
            messageTwo.textContent = data.forecast;
            }
        });
    });
});