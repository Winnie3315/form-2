const form = document.forms.namedItem('signin')
const inputs = form.querySelectorAll('input')
const name = document.querySelector('#name')
const surname = document.querySelector('#surname')
const age = document.querySelector('#age')
const file = document.querySelector('#file')
const img = document.querySelector('#img')
let regular = /[A-Za-zА-Яа-яЁё]/g
let num = /[0-9]/g

file.onchange = (event) => {
    const file = event.target.files[0]
    if (file) {
        const reader = new FileReader()
        reader.onload = (e) => {
            img.src = e.target.result;
            img.style.display = 'block'
        }
        reader.readAsDataURL(file)
    }
}

name.oninput = (event) => {
    const value = event.target.value.replace(num, '')
    name.value = value
};

surname.oninput = (event) => {
    const value = event.target.value.replace(num, '')
    surname.value = value
};

age.oninput = (event) => {
    const value = event.target.value.replace(regular, '')
    age.value = value
}


inputs[0].onfocus = () => {
    console.log('focused');
}
inputs[0].onblur = () => {
    const parent = inputs[0].parentElement
    if(inputs[0].value.length === 0 && parent.classList.contains('req')) {
        parent.classList.add('error')
    }
}

form.onsubmit = (e) => {
    e.preventDefault();
    let error_counter = 0
    

    inputs.forEach(inp => {
        const parent = inp.parentElement
        if(inp.value.length === 0 && parent.classList.contains('req')) {
            parent.classList.add('error')
            error_counter++
        }
    })
    

    if(error_counter > 0) {
        console.log(error_counter);
        return
    }
    submit(e)
}



function submit(e) {
    const user = {}
    const fm = new FormData(e.target)

    fm.forEach((val, key) => user[key] = val)


    console.log(user);
}
