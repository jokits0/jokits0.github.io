let antImg = document.querySelector('img');
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

antImg.onclick = function() {

    let imgSrc = antImg.getAttribute('src');

    if (imgSrc === '/images/black-ant.jpg'){
        antImg.setAttribute('src', '/images/fire-ant.jpg');
        myHeading.textContent = "Fire ANT!"
    }
    else{
        antImg.setAttribute('src', '/images/black-ant.jpg');
        myHeading.textContent = "Black ant!"
    }
};


function setUserName(){
    let myName = prompt('Name: ');
    
    if(!myName) {
        setUserName();
      } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Hello ' + myName;
      }
}

myButton.onclick = function() {
    setUserName();
}
