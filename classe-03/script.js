const q = document.querySelector('#q');
const genero = document.querySelector('#genero');

genero.addEventListener('change', function(event) {
    console.log(event.target.value);
    q.value = event.target.value !== 'Procurar' ? event.target.value : q.value;
});