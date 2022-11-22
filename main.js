var form = document.getElementById('ebac-form');

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        verificar();
    })

    function verificar(){
        var numberOne = document.getElementById('number-one')
        var numberX = Number(numberOne.value)
        var numberTwo = document.getElementById('number-two')
        var numberY = Number(numberTwo.value)
        var resp  = document.getElementById('resposta')

        if (numberX > numberY){
            resp.innerHTML = `O valor é INVÁLIDO`
        } else{
            resp.innerHTML = 'O valor é VÁLIDO'
        }
    }