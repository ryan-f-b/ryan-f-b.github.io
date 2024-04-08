let project = document.getElementsByClassName('projectImage')[0];
let project1 = document.getElementsByClassName('projectImage')[1];
let project2 = document.getElementsByClassName('projectImage')[2];
let project3 = document.getElementsByClassName('projectImage')[3];
let project4 = document.getElementsByClassName('projectImage')[4];

let reduceOpacity = function(event) {
    event.target.style.opacity = '0.5';
}

let restoreOpacity = (event) => {
    event.target.style.opacity = '1';
}
    
project.onmouseover = reduceOpacity;
project.onmouseout = restoreOpacity;
project1.onmouseover = reduceOpacity;
project1.onmouseout = restoreOpacity;
project2.onmouseover = reduceOpacity;
project2.onmouseout = restoreOpacity;
project3.onmouseover = reduceOpacity;
project3.onmouseout = restoreOpacity;
project4.onmouseover = reduceOpacity;
project4.onmouseout = restoreOpacity;
