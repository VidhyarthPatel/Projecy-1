const icon = document.querySelector('#icon');
const text = document.querySelector('#heading');

text.innerHTML = 'Light Mode';

icon.addEventListener('click', ()=>{
    if(text.innerHTML === 'Light Mode'){
    document.body.style.backgroundColor = 'black';
    text.innerHTML = 'Dark Mode';
    text.style.color = 'white';
    icon.style.color = 'white';
    }else{
    document.body.style.backgroundColor = 'white';
    text.innerHTML = 'Light Mode';
    text.style.color = 'black';
    icon.style.color = 'black';
    }
})

