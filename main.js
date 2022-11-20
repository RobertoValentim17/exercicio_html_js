let form = document.getElementById ('form')

form.addEventListener ('submit', function (e) {
    e.preventDefault();
    verificar ();
})

    function verificar() {
    let numberx = document.getElementById('number-one');
    let number1 = number(numberx.value);
    let numbery = document.getElementById('number-two');
    let number2 = number(numbery.value);
    var resp = document.getElementById('resposta');

    if (number1 > number2) {
        resp.innerHTML = `O valor é INVÁLIDO`;
    } else {
        resp.innerHTML = 'O valor é VÁLIDO';
        }
    }

