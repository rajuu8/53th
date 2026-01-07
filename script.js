let p = document.querySelector('p');
let text = p.innerHTML

let random = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

let x = 0 ;

function randomText () {

    let raju = text.split("").map((char,index)=>{

        if(index < x){
            return char
        }

        return random.split("")[ Math.floor(Math.random()*random.length) ]
    }).join("")
    
    p.innerText = raju  
    x += 0.2  
};


let dash = p.addEventListener("mouseenter",()=> {
    
randomText();

let clear = setInterval(randomText,50)
    
})
