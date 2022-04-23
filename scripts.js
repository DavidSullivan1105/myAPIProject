let jokeBubble = document.querySelector(`.jokeBubble`);
let heckler1 = document.getElementById("BOO")
let heckler2 = document.getElementById("You Suck");
let heckler3 = document.getElementById("GO HOME, CLOWN");
const baseURL = "https://cors-anywhere.herokuapp.com/https://api.yomomma.info/";
heckler1.style.display = "none";
heckler2.style.display = "none";
heckler3.style.display = "none";

jokeBubble.addEventListener("click", fetchJoke);

function fetchJoke(e) {
    e.preventDefault();
    fetch (baseURL) 
    .then (result => result.json())
    .then (json => {
        console.log(json);
        displayJokes(json)
    });
}   ; 

function displayJokes(jokes) {
        let joke = document.createElement("h3");
        joke.innerText = jokes.joke;
        jokeBubble.appendChild(joke);
        joke.style = `font-family: Helvetica; text-align: center; position: relative; top: 15px; margin: 10px`;
        
        
        
        jokeBubble.appendChild(joke);
        
        jokeBubble.addEventListener("click" , () => {
            jokeBubble.removeChild(joke);
            fetchJoke();
             })
        
        // jokeBubble.addEventListener("click", () => {
        //    let heckle = document.createElement("div");
        //    let heckleText = document.createElement("h3");
        //    heckleText.innerText = "GO HOME, CLOWN!!!"
        //    heckle.style = "width: 150px; height: 75px; text-align: center; background-color: white; border: 3px solid white; border-radius: 20%; position: relative; bottom: -20em; left: 30em";
        //    document.body.appendChild(heckle);
        //    heckle.appendChild(heckleText);
        //    document.body.removeChild(heckle);
        // })
        
    //     document.body.appendChild(heckle);
    //     jokeBubble.addEventListener("click", () => {
    //         console.log(heckle);
    //         heckle.removeChild();
    //  })
    }
        
    
    



    

    
   let interval = 3000, i = 0;
    setInterval(function(){
        i++;
        if (i % 2 !==0) {
            document.getElementById("BOO").style.display = `block`;
            
        } else {
            document.getElementById("BOO").style.display = `none`;
        }
    }, interval);
    
   

    
    
   let interval2 = 6000, j = 0;
   setInterval(function(){
       j++;
       if (j % 2 !== 0) {
           document.getElementById("You Suck").style.display = `block`;

       } else {
           document.getElementById("You Suck").style.display = `none`;
       }
   }, interval2);

let interval3 = 4500, x = 0;
setInterval(function(){
    x++;
    if (x % 2 !==0) {
        document.getElementById("GO HOME, CLOWN").style.display = `block`;
    } else {
        document.getElementById("GO HOME, CLOWN").style.display = `none`;
    }
}, interval3);