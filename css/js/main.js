
let btnBorder = document.getElementById('btnBorder');

btnBorder.onclick = function() {


    console.log('Hello');

}


const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const num = document.querySelector('.num');



//  Sneaker Company

let a = 1;

plus.addEventListener("click", ()=>{

    a++;
    a = (a < 10) ? "0" + a : a;
    num.innerText = a;
    
});

minus.addEventListener("click", ()=>{
    if(a > 1){
        a--;
        a = (a < 10) ? "0" + a : a;
        num.innerText = a;
    }  
});


//   End Sneaker Company



//   Nav Bar  

let btnOpen = document.getElementById('open');

let btnclose = document.getElementById('close');

let cont = document.querySelector('.container');

 btnclose.classList.add('nane');
 cont.classList.add('nane');


btnclose.onclick = function(){

    cont.classList.add('nane');
    btnclose.classList.add('nane');
    btnOpen.classList.remove('nane');
    btnclose.style.display = 'none';
    overlay.style.display = 'none';
};

let overlay = document.querySelector('.overlay ');

btnOpen.onclick = function(){

    cont.classList.remove('nane');
    btnclose.classList.remove('nane');
    btnOpen.classList.add('nane');
    btnclose.style.display = 'flex';
    overlay.style.display = 'flex';
};



//    scroll-btn

let ScrollBtn = document.getElementById('scroll');

window.onscroll = function(){
    if(scrollY >= 400)
    {
        ScrollBtn.style.display = 'block';
    }else{
        ScrollBtn.style.display = 'none';
    }
}

ScrollBtn.onclick = function(){
    scroll({
        left:0,
        top:0,
        bahavior:"smooth"
    })
};


// let fixed = document.querySelector('#fixed');

// window.onscroll = function(){

//     if(scrollY >= 1)
//     {
//         fixed.style.position = 'fixed';
//     }else{
//         fixed.style.display = 'flex';
//     }

// }


