$(function(){
  $('#lastName, #firstName').focus(function(){//appel de la fonction avec le focus sur les input
    $(this).css('border','1px solid green');//met la bordure en vert sur l'input
  })
  $('#lastName, #firstName').focusout(function(){//appel de la fonction avec le focus hors des input
    $(this).css('border','1px solid red');//met la bordure en rouge sur l'input
  })
})
