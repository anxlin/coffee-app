let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
   loginForm.classList.add('active');
}

document.querySelector('#close-login-form').onclick = () =>{
   loginForm.classList.remove('active');
}

let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .nav');

menu.onclick = () =>{
   menu.classList.toggle('fa-times');
   navbar.classList.toggle('active');
}

window.onscroll = () =>{
   loginForm.classList.remove('active');
   menu.classList.remove('fa-times');
   navbar.classList.remove('active');

   if(window.scrollY > 0){
      document.querySelector('.header').classList.add('active');
   }else{
      document.querySelector('.header').classList.remove('active');
   }
}


let input = document.querySelector('.entered-list');
let addBtn = document.querySelector('.add-list');
let tasks = document.querySelector('.tasks');

//add btn disabled
input.addEventListener('keyup', () => {
    if (input.value.trim() != 0) {
        addBtn.classList.add('active')
    } else {
        addBtn.classList.remove('active')
    }
})

// add new item to list
addBtn.addEventListener('click', () => {
    if (input.value.trim() != 0) {
        let newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML = `
        <p> ${input.value} </p> 
        <div class = "item-btn" >
        <i class="fa-sharp fa-solid fa-list-check"></i>
        <i class = "fa-sharp fa-solid fa-xmark" > </i> 
        </div> 
        `
        tasks.appendChild(newItem);
        input.value = '';
    } else {
        alert('Please enter a task')
    }
})

// delete 
tasks.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-xmark')) {
        e.target.parentElement.parentElement.remove();
    }


})

//mark items as completed
tasks.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-list-check')) {
        e.target.parentElement.parentElement.classList.toggle('completed');
    }
})

let about = document.querySelector('.about');

let menu2 = document.querySelector('.menu');
let gallery = document.querySelector('.gallery');
let reviews = document.querySelector('.reviews');
let contact = document.querySelector('.contact');
let blogs = document.querySelector('.blogs');
let footercont= document.querySelector('.footer container');


document.querySelector('#dark-btn').onclick = () =>{
   about.classList.toggle('dark-mode');
   menu2.classList.toggle('dark-mode');
   gallery.classList.toggle('dark-mode');
   contact.classList.toggle('dark-mode');
   reviews.classList.toggle('dark-mode');
   blogs.classList.toggle('dark-mode');
   footercont.classList.toggle('dark-mode');

}

function popupToggle() {
    const popup = document.getElementById('popup');
    popup.classList.toggle('active')
}

let l = document.getElementById("email").value;
let p = document.getElementById("password").value;
let button=document.querySelectorAll('.link-btn')
button.onclick=function(){
let t="error";
    if (l=="anelya@mail.ru"&&p=="1234" || l=="moldir@mail.ru"&&p=="4321" ){
        document.getElementById("mess").innerHTML=l;
        document.getElementById("mess").innerHTML=p;

    }else{
        document.getElementById("mess").innerHTML=t;
    }
    console.log("h")

}
