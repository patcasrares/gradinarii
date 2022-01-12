// JavaScript Document

$(document).ready(function() {
    //playSound("audio/bufnita.mp3")
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });

$(document).onclick = () =>{
    alert(1)
}