
 // loader
 var loader = function () {
  setTimeout(function () {
    if ($('#ftco-loader').length > 0) {
       $('#ftco-loader').removeClass('show');
    }
  }, 1000);
};
loader();

mybutton = document.getElementById("gototop");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    mybutton.style.display = "flex";  
  } else {
    mybutton.style.display = "none";
  }
}



