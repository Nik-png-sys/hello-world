$(function() {
   $('.scroll-down').click (function() {
     $('html, body').animate({scrollTop: $('section.ok').offset().top }, 'slow');
     return false;
   });
 });

 function myFunction() {
   var popup = document.getElementById("btn1");
   popup.classList.toggle("show");
 }

 dragElement(document.getElementById("mydiv1"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

dragElement(document.getElementById("mydiv2"));

function dragElement(elmnt) {
 var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
 if (document.getElementById(elmnt.id + "header")) {
   // if present, the header is where you move the DIV from:
   document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
 } else {
   // otherwise, move the DIV from anywhere inside the DIV:
   elmnt.onmousedown = dragMouseDown;
 }

 function dragMouseDown(e) {
   e = e || window.event;
   e.preventDefault();
   // get the mouse cursor position at startup:
   pos3 = e.clientX;
   pos4 = e.clientY;
   document.onmouseup = closeDragElement;
   // call a function whenever the cursor moves:
   document.onmousemove = elementDrag;
 }

 function elementDrag(e) {
   e = e || window.event;
   e.preventDefault();
   // calculate the new cursor position:
   pos1 = pos3 - e.clientX;
   pos2 = pos4 - e.clientY;
   pos3 = e.clientX;
   pos4 = e.clientY;
   // set the element's new position:
   elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
   elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
 }

 function closeDragElement() {
   // stop moving when mouse button is released:
   document.onmouseup = null;
   document.onmousemove = null;
 }
}

dragElement(document.getElementById("mydiv3"));

function dragElement(elmnt) {
 var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
 if (document.getElementById(elmnt.id + "header")) {
   // if present, the header is where you move the DIV from:
   document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
 } else {
   // otherwise, move the DIV from anywhere inside the DIV:
   elmnt.onmousedown = dragMouseDown;
 }

 function dragMouseDown(e) {
   e = e || window.event;
   e.preventDefault();
   // get the mouse cursor position at startup:
   pos3 = e.clientX;
   pos4 = e.clientY;
   document.onmouseup = closeDragElement;
   // call a function whenever the cursor moves:
   document.onmousemove = elementDrag;
 }

 function elementDrag(e) {
   e = e || window.event;
   e.preventDefault();
   // calculate the new cursor position:
   pos1 = pos3 - e.clientX;
   pos2 = pos4 - e.clientY;
   pos3 = e.clientX;
   pos4 = e.clientY;
   // set the element's new position:
   elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
   elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
 }

 function closeDragElement() {
   // stop moving when mouse button is released:
   document.onmouseup = null;
   document.onmousemove = null;
 }
}

dragElement(document.getElementById("mydiv4"));

function dragElement(elmnt) {
 var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
 if (document.getElementById(elmnt.id + "header")) {
   // if present, the header is where you move the DIV from:
   document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
 } else {
   // otherwise, move the DIV from anywhere inside the DIV:
   elmnt.onmousedown = dragMouseDown;
 }

 function dragMouseDown(e) {
   e = e || window.event;
   e.preventDefault();
   // get the mouse cursor position at startup:
   pos3 = e.clientX;
   pos4 = e.clientY;
   document.onmouseup = closeDragElement;
   // call a function whenever the cursor moves:
   document.onmousemove = elementDrag;
 }

 function elementDrag(e) {
   e = e || window.event;
   e.preventDefault();
   // calculate the new cursor position:
   pos1 = pos3 - e.clientX;
   pos2 = pos4 - e.clientY;
   pos3 = e.clientX;
   pos4 = e.clientY;
   // set the element's new position:
   elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
   elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
 }

 function closeDragElement() {
   // stop moving when mouse button is released:
   document.onmouseup = null;
   document.onmousemove = null;
 }
}

dragElement(document.getElementById("mydiv5"));

function dragElement(elmnt) {
 var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
 if (document.getElementById(elmnt.id + "header")) {
   // if present, the header is where you move the DIV from:
   document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
 } else {
   // otherwise, move the DIV from anywhere inside the DIV:
   elmnt.onmousedown = dragMouseDown;
 }

 function dragMouseDown(e) {
   e = e || window.event;
   e.preventDefault();
   // get the mouse cursor position at startup:
   pos3 = e.clientX;
   pos4 = e.clientY;
   document.onmouseup = closeDragElement;
   // call a function whenever the cursor moves:
   document.onmousemove = elementDrag;
 }

 function elementDrag(e) {
   e = e || window.event;
   e.preventDefault();
   // calculate the new cursor position:
   pos1 = pos3 - e.clientX;
   pos2 = pos4 - e.clientY;
   pos3 = e.clientX;
   pos4 = e.clientY;
   // set the element's new position:
   elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
   elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
 }

 function closeDragElement() {
   // stop moving when mouse button is released:
   document.onmouseup = null;
   document.onmousemove = null;
 }
}

dragElement(document.getElementById("mydiv6"));

function dragElement(elmnt) {
 var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
 if (document.getElementById(elmnt.id + "header")) {
   // if present, the header is where you move the DIV from:
   document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
 } else {
   // otherwise, move the DIV from anywhere inside the DIV:
   elmnt.onmousedown = dragMouseDown;
 }

 function dragMouseDown(e) {
   e = e || window.event;
   e.preventDefault();
   // get the mouse cursor position at startup:
   pos3 = e.clientX;
   pos4 = e.clientY;
   document.onmouseup = closeDragElement;
   // call a function whenever the cursor moves:
   document.onmousemove = elementDrag;
 }

 function elementDrag(e) {
   e = e || window.event;
   e.preventDefault();
   // calculate the new cursor position:
   pos1 = pos3 - e.clientX;
   pos2 = pos4 - e.clientY;
   pos3 = e.clientX;
   pos4 = e.clientY;
   // set the element's new position:
   elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
   elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
 }

 function closeDragElement() {
   // stop moving when mouse button is released:
   document.onmouseup = null;
   document.onmousemove = null;
 }
}

dragElement(document.getElementById("mydiv7"));

function dragElement(elmnt) {
 var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
 if (document.getElementById(elmnt.id + "header")) {
   // if present, the header is where you move the DIV from:
   document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
 } else {
   // otherwise, move the DIV from anywhere inside the DIV:
   elmnt.onmousedown = dragMouseDown;
 }

 function dragMouseDown(e) {
   e = e || window.event;
   e.preventDefault();
   // get the mouse cursor position at startup:
   pos3 = e.clientX;
   pos4 = e.clientY;
   document.onmouseup = closeDragElement;
   // call a function whenever the cursor moves:
   document.onmousemove = elementDrag;
 }

 function elementDrag(e) {
   e = e || window.event;
   e.preventDefault();
   // calculate the new cursor position:
   pos1 = pos3 - e.clientX;
   pos2 = pos4 - e.clientY;
   pos3 = e.clientX;
   pos4 = e.clientY;
   // set the element's new position:
   elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
   elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
 }

 function closeDragElement() {
   // stop moving when mouse button is released:
   document.onmouseup = null;
   document.onmousemove = null;
 }
}

dragElement(document.getElementById("mydiv8"));

function dragElement(elmnt) {
 var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
 if (document.getElementById(elmnt.id + "header")) {
   // if present, the header is where you move the DIV from:
   document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
 } else {
   // otherwise, move the DIV from anywhere inside the DIV:
   elmnt.onmousedown = dragMouseDown;
 }

 function dragMouseDown(e) {
   e = e || window.event;
   e.preventDefault();
   // get the mouse cursor position at startup:
   pos3 = e.clientX;
   pos4 = e.clientY;
   document.onmouseup = closeDragElement;
   // call a function whenever the cursor moves:
   document.onmousemove = elementDrag;
 }

 function elementDrag(e) {
   e = e || window.event;
   e.preventDefault();
   // calculate the new cursor position:
   pos1 = pos3 - e.clientX;
   pos2 = pos4 - e.clientY;
   pos3 = e.clientX;
   pos4 = e.clientY;
   // set the element's new position:
   elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
   elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
 }

 function closeDragElement() {
   // stop moving when mouse button is released:
   document.onmouseup = null;
   document.onmousemove = null;
 }
}

dragElement(document.getElementById("mydiv9"));

function dragElement(elmnt) {
 var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
 if (document.getElementById(elmnt.id + "header")) {
   // if present, the header is where you move the DIV from:
   document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
 } else {
   // otherwise, move the DIV from anywhere inside the DIV:
   elmnt.onmousedown = dragMouseDown;
 }

 function dragMouseDown(e) {
   e = e || window.event;
   e.preventDefault();
   // get the mouse cursor position at startup:
   pos3 = e.clientX;
   pos4 = e.clientY;
   document.onmouseup = closeDragElement;
   // call a function whenever the cursor moves:
   document.onmousemove = elementDrag;
 }

 function elementDrag(e) {
   e = e || window.event;
   e.preventDefault();
   // calculate the new cursor position:
   pos1 = pos3 - e.clientX;
   pos2 = pos4 - e.clientY;
   pos3 = e.clientX;
   pos4 = e.clientY;
   // set the element's new position:
   elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
   elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
 }

 function closeDragElement() {
   // stop moving when mouse button is released:
   document.onmouseup = null;
   document.onmousemove = null;
 }
}

dragElement(document.getElementById("mydiv10"));

function dragElement(elmnt) {
 var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
 if (document.getElementById(elmnt.id + "header")) {
   // if present, the header is where you move the DIV from:
   document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
 } else {
   // otherwise, move the DIV from anywhere inside the DIV:
   elmnt.onmousedown = dragMouseDown;
 }

 function dragMouseDown(e) {
   e = e || window.event;
   e.preventDefault();
   // get the mouse cursor position at startup:
   pos3 = e.clientX;
   pos4 = e.clientY;
   document.onmouseup = closeDragElement;
   // call a function whenever the cursor moves:
   document.onmousemove = elementDrag;
 }

 function elementDrag(e) {
   e = e || window.event;
   e.preventDefault();
   // calculate the new cursor position:
   pos1 = pos3 - e.clientX;
   pos2 = pos4 - e.clientY;
   pos3 = e.clientX;
   pos4 = e.clientY;
   // set the element's new position:
   elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
   elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
 }

 function closeDragElement() {
   // stop moving when mouse button is released:
   document.onmouseup = null;
   document.onmousemove = null;
 }
}

dragElement(document.getElementById("mydiv11"));

function dragElement(elmnt) {
 var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
 if (document.getElementById(elmnt.id + "header")) {
   // if present, the header is where you move the DIV from:
   document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
 } else {
   // otherwise, move the DIV from anywhere inside the DIV:
   elmnt.onmousedown = dragMouseDown;
 }

 function dragMouseDown(e) {
   e = e || window.event;
   e.preventDefault();
   // get the mouse cursor position at startup:
   pos3 = e.clientX;
   pos4 = e.clientY;
   document.onmouseup = closeDragElement;
   // call a function whenever the cursor moves:
   document.onmousemove = elementDrag;
 }

 function elementDrag(e) {
   e = e || window.event;
   e.preventDefault();
   // calculate the new cursor position:
   pos1 = pos3 - e.clientX;
   pos2 = pos4 - e.clientY;
   pos3 = e.clientX;
   pos4 = e.clientY;
   // set the element's new position:
   elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
   elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
 }

 function closeDragElement() {
   // stop moving when mouse button is released:
   document.onmouseup = null;
   document.onmousemove = null;
 }
}

dragElement(document.getElementById("mydiv12"));

function dragElement(elmnt) {
 var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
 if (document.getElementById(elmnt.id + "header")) {
   // if present, the header is where you move the DIV from:
   document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
 } else {
   // otherwise, move the DIV from anywhere inside the DIV:
   elmnt.onmousedown = dragMouseDown;
 }

 function dragMouseDown(e) {
   e = e || window.event;
   e.preventDefault();
   // get the mouse cursor position at startup:
   pos3 = e.clientX;
   pos4 = e.clientY;
   document.onmouseup = closeDragElement;
   // call a function whenever the cursor moves:
   document.onmousemove = elementDrag;
 }

 function elementDrag(e) {
   e = e || window.event;
   e.preventDefault();
   // calculate the new cursor position:
   pos1 = pos3 - e.clientX;
   pos2 = pos4 - e.clientY;
   pos3 = e.clientX;
   pos4 = e.clientY;
   // set the element's new position:
   elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
   elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
 }

 function closeDragElement() {
   // stop moving when mouse button is released:
   document.onmouseup = null;
   document.onmousemove = null;
 }
}

dragElement(document.getElementById("mydiv13"));

function dragElement(elmnt) {
 var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
 if (document.getElementById(elmnt.id + "header")) {
   // if present, the header is where you move the DIV from:
   document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
 } else {
   // otherwise, move the DIV from anywhere inside the DIV:
   elmnt.onmousedown = dragMouseDown;
 }

 function dragMouseDown(e) {
   e = e || window.event;
   e.preventDefault();
   // get the mouse cursor position at startup:
   pos3 = e.clientX;
   pos4 = e.clientY;
   document.onmouseup = closeDragElement;
   // call a function whenever the cursor moves:
   document.onmousemove = elementDrag;
 }

 function elementDrag(e) {
   e = e || window.event;
   e.preventDefault();
   // calculate the new cursor position:
   pos1 = pos3 - e.clientX;
   pos2 = pos4 - e.clientY;
   pos3 = e.clientX;
   pos4 = e.clientY;
   // set the element's new position:
   elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
   elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
 }

 function closeDragElement() {
   // stop moving when mouse button is released:
   document.onmouseup = null;
   document.onmousemove = null;
 }
}

dragElement(document.getElementById("mydiv14"));

function dragElement(elmnt) {
 var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
 if (document.getElementById(elmnt.id + "header")) {
   // if present, the header is where you move the DIV from:
   document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
 } else {
   // otherwise, move the DIV from anywhere inside the DIV:
   elmnt.onmousedown = dragMouseDown;
 }

 function dragMouseDown(e) {
   e = e || window.event;
   e.preventDefault();
   // get the mouse cursor position at startup:
   pos3 = e.clientX;
   pos4 = e.clientY;
   document.onmouseup = closeDragElement;
   // call a function whenever the cursor moves:
   document.onmousemove = elementDrag;
 }

 function elementDrag(e) {
   e = e || window.event;
   e.preventDefault();
   // calculate the new cursor position:
   pos1 = pos3 - e.clientX;
   pos2 = pos4 - e.clientY;
   pos3 = e.clientX;
   pos4 = e.clientY;
   // set the element's new position:
   elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
   elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
 }

 function closeDragElement() {
   // stop moving when mouse button is released:
   document.onmouseup = null;
   document.onmousemove = null;
 }
}

dragElement(document.getElementById("mydiv15"));

function dragElement(elmnt) {
 var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
 if (document.getElementById(elmnt.id + "header")) {
   // if present, the header is where you move the DIV from:
   document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
 } else {
   // otherwise, move the DIV from anywhere inside the DIV:
   elmnt.onmousedown = dragMouseDown;
 }

 function dragMouseDown(e) {
   e = e || window.event;
   e.preventDefault();
   // get the mouse cursor position at startup:
   pos3 = e.clientX;
   pos4 = e.clientY;
   document.onmouseup = closeDragElement;
   // call a function whenever the cursor moves:
   document.onmousemove = elementDrag;
 }

 function elementDrag(e) {
   e = e || window.event;
   e.preventDefault();
   // calculate the new cursor position:
   pos1 = pos3 - e.clientX;
   pos2 = pos4 - e.clientY;
   pos3 = e.clientX;
   pos4 = e.clientY;
   // set the element's new position:
   elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
   elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
 }

 function closeDragElement() {
   // stop moving when mouse button is released:
   document.onmouseup = null;
   document.onmousemove = null;
 }
}

dragElement(document.getElementById("mydiv16"));

function dragElement(elmnt) {
 var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
 if (document.getElementById(elmnt.id + "header")) {
   // if present, the header is where you move the DIV from:
   document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
 } else {
   // otherwise, move the DIV from anywhere inside the DIV:
   elmnt.onmousedown = dragMouseDown;
 }

 function dragMouseDown(e) {
   e = e || window.event;
   e.preventDefault();
   // get the mouse cursor position at startup:
   pos3 = e.clientX;
   pos4 = e.clientY;
   document.onmouseup = closeDragElement;
   // call a function whenever the cursor moves:
   document.onmousemove = elementDrag;
 }

 function elementDrag(e) {
   e = e || window.event;
   e.preventDefault();
   // calculate the new cursor position:
   pos1 = pos3 - e.clientX;
   pos2 = pos4 - e.clientY;
   pos3 = e.clientX;
   pos4 = e.clientY;
   // set the element's new position:
   elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
   elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
 }

 function closeDragElement() {
   // stop moving when mouse button is released:
   document.onmouseup = null;
   document.onmousemove = null;
 }
}

dragElement(document.getElementById("mydiv17"));

function dragElement(elmnt) {
 var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
 if (document.getElementById(elmnt.id + "header")) {
   // if present, the header is where you move the DIV from:
   document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
 } else {
   // otherwise, move the DIV from anywhere inside the DIV:
   elmnt.onmousedown = dragMouseDown;
 }

 function dragMouseDown(e) {
   e = e || window.event;
   e.preventDefault();
   // get the mouse cursor position at startup:
   pos3 = e.clientX;
   pos4 = e.clientY;
   document.onmouseup = closeDragElement;
   // call a function whenever the cursor moves:
   document.onmousemove = elementDrag;
 }

 function elementDrag(e) {
   e = e || window.event;
   e.preventDefault();
   // calculate the new cursor position:
   pos1 = pos3 - e.clientX;
   pos2 = pos4 - e.clientY;
   pos3 = e.clientX;
   pos4 = e.clientY;
   // set the element's new position:
   elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
   elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
 }

 function closeDragElement() {
   // stop moving when mouse button is released:
   document.onmouseup = null;
   document.onmousemove = null;
 }
}

dragElement(document.getElementById("mydiv18"));

function dragElement(elmnt) {
 var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
 if (document.getElementById(elmnt.id + "header")) {
   // if present, the header is where you move the DIV from:
   document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
 } else {
   // otherwise, move the DIV from anywhere inside the DIV:
   elmnt.onmousedown = dragMouseDown;
 }

 function dragMouseDown(e) {
   e = e || window.event;
   e.preventDefault();
   // get the mouse cursor position at startup:
   pos3 = e.clientX;
   pos4 = e.clientY;
   document.onmouseup = closeDragElement;
   // call a function whenever the cursor moves:
   document.onmousemove = elementDrag;
 }

 function elementDrag(e) {
   e = e || window.event;
   e.preventDefault();
   // calculate the new cursor position:
   pos1 = pos3 - e.clientX;
   pos2 = pos4 - e.clientY;
   pos3 = e.clientX;
   pos4 = e.clientY;
   // set the element's new position:
   elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
   elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
 }

 function closeDragElement() {
   // stop moving when mouse button is released:
   document.onmouseup = null;
   document.onmousemove = null;
 }
}

dragElement(document.getElementById("mydiv19"));

function dragElement(elmnt) {
 var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
 if (document.getElementById(elmnt.id + "header")) {
   // if present, the header is where you move the DIV from:
   document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
 } else {
   // otherwise, move the DIV from anywhere inside the DIV:
   elmnt.onmousedown = dragMouseDown;
 }

 function dragMouseDown(e) {
   e = e || window.event;
   e.preventDefault();
   // get the mouse cursor position at startup:
   pos3 = e.clientX;
   pos4 = e.clientY;
   document.onmouseup = closeDragElement;
   // call a function whenever the cursor moves:
   document.onmousemove = elementDrag;
 }

 function elementDrag(e) {
   e = e || window.event;
   e.preventDefault();
   // calculate the new cursor position:
   pos1 = pos3 - e.clientX;
   pos2 = pos4 - e.clientY;
   pos3 = e.clientX;
   pos4 = e.clientY;
   // set the element's new position:
   elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
   elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
 }

 function closeDragElement() {
   // stop moving when mouse button is released:
   document.onmouseup = null;
   document.onmousemove = null;
 }
}

dragElement(document.getElementById("mydiv20"));

function dragElement(elmnt) {
 var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
 if (document.getElementById(elmnt.id + "header")) {
   // if present, the header is where you move the DIV from:
   document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
 } else {
   // otherwise, move the DIV from anywhere inside the DIV:
   elmnt.onmousedown = dragMouseDown;
 }

 function dragMouseDown(e) {
   e = e || window.event;
   e.preventDefault();
   // get the mouse cursor position at startup:
   pos3 = e.clientX;
   pos4 = e.clientY;
   document.onmouseup = closeDragElement;
   // call a function whenever the cursor moves:
   document.onmousemove = elementDrag;
 }

 function elementDrag(e) {
   e = e || window.event;
   e.preventDefault();
   // calculate the new cursor position:
   pos1 = pos3 - e.clientX;
   pos2 = pos4 - e.clientY;
   pos3 = e.clientX;
   pos4 = e.clientY;
   // set the element's new position:
   elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
   elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
 }

 function closeDragElement() {
   // stop moving when mouse button is released:
   document.onmouseup = null;
   document.onmousemove = null;
 }
}

dragElement(document.getElementById("mydiv21"));

function dragElement(elmnt) {
 var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
 if (document.getElementById(elmnt.id + "header")) {
   // if present, the header is where you move the DIV from:
   document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
 } else {
   // otherwise, move the DIV from anywhere inside the DIV:
   elmnt.onmousedown = dragMouseDown;
 }

 function dragMouseDown(e) {
   e = e || window.event;
   e.preventDefault();
   // get the mouse cursor position at startup:
   pos3 = e.clientX;
   pos4 = e.clientY;
   document.onmouseup = closeDragElement;
   // call a function whenever the cursor moves:
   document.onmousemove = elementDrag;
 }

 function elementDrag(e) {
   e = e || window.event;
   e.preventDefault();
   // calculate the new cursor position:
   pos1 = pos3 - e.clientX;
   pos2 = pos4 - e.clientY;
   pos3 = e.clientX;
   pos4 = e.clientY;
   // set the element's new position:
   elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
   elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
 }

 function closeDragElement() {
   // stop moving when mouse button is released:
   document.onmouseup = null;
   document.onmousemove = null;
 }
}
