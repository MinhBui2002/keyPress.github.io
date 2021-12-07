const box = document.querySelector('.box')

const eKey = document.querySelector('.card.key p:last-child')
const eLocation = document.querySelector('.card.location p:last-child')
const eWhich = document.querySelector('.card.which p:last-child')
const eCode = document.querySelector('.card.code p:last-child')
const result = document.querySelector('.result');

var alert = document.querySelector('.alert');

document.addEventListener('keydown', function (e) {

    let keyName = e.keyCode === 32 ? 'Space' : e.key

        eKey.innerHTML = keyName;
        eLocation.innerHTML = e.location;
        eWhich.innerHTML = e.which;
        eCode.innerHTML = e.code;
        result.innerHTML = keyName;


        alert.classList.add("hide");
        box.classList.remove("hide");
    })
