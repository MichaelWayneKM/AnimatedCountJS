var speed = 1;

/* Call this function with a string containing the ID name to
 * the element containing the number you want to do a count animation on.*/
function incEltNbr(id) {
  elt = document.getElementById(id);
  endNbr = Number(document.getElementById(id).innerHTML);
  incNbrRec(0, endNbr, elt);
}

/*A recursive function to increase the number.*/
function incNbrRec(i, endNbr, elt) {
  if (i <= endNbr) {
    elt.innerHTML = i.toFixed(2);
    setTimeout(function() {//Delay a bit before calling the function again.
      incNbrRec(i + .01, endNbr, elt);
    }, speed);
    if(i < endNbr/2) {
      speed += 2
    } else {
      speed -= 2
    }
    
  }
}

/*Function called on button click*/
function incNbr(){
  incEltNbr("nbr");
}

incEltNbr("nbr"); /*Call this funtion with the ID-name for that element to increase the number within*/
