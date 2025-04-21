// Navbar Feauture

function navbarMotion() {
    var element = $("#listaNav");
    var toogle = $("#menuToogle");
  
      element.toggleClass("hideNav");
      element.toggleClass("showNav");
      toogle.toggleClass("menuShow");
      toogle.toggleClass("menuHide");
  
  }