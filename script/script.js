var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-white";
}






var slideIndex_ = 1;
showDivs_(slideIndex_);

function plusDivs_(n) {
  showDivs_(slideIndex_ += n);
}

function currentDiv_(n) {
  showDivs_(slideIndex_ = n);
}

function showDivs_(n) {
  var i;
  var x = document.getElementsByClassName("mySlides_");
  if (n > x.length) {slideIndex_ = 1}    
  if (n < 1) {slideIndex_ = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex_-1].style.display = "block";  
}

function myFunction() {
        var email;

        email = document.getElementById("textEmail").value;

            var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

            if (reg.test(textEmail.value) == false) {
              alert("invalid email");
              return false;
            } 
       return true;
}

function clearContents(element) {
  element.value = '';
}
