// add your code here

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function validateField() {
  

  if (fname.value.length == 0 && lname.value.length == 0 && cname.value.length == 0
    && jtitle.value.length == 0) {

    alert("Please enter Name");
    return false;
  }

  else if ((inputAlphabet(fname, "* For your first name please use alphabets only *"))
    && (inputAlphabet(lname, "* For your last name please use alphabets only *"))
    && (inputAlphabet(cname, "* Please enter a valid company name *"))
    && (inputAlphabet(jtitle, "* Please enter a valid job title *"))) {
    return true;
  }

  function inputAlphabet(fname, alertMsg) {
    var alphaExp = /^[a-zA-Z]+$/;
    if (fname.value.match(alphaExp)) {
      return true;
    } else {
      alert(alertMsg);
      fname.focus();
      return false;
    }
  }


  // function emailValidation(email, alertMsg) {
  //   var emailExp = /^[w-.+]+@[a-zA-Z0-9.-]+.[a-zA-z0-9]{2,4}$/;
  //   if (email.value.match(emailExp)) {
  //     return true;
  //   } else {
  //     alert(alertMsg);
  //     email.focus();
  //     return false;
  //   }
  // }
}
