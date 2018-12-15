$(document).ready(function(){
  console.log('jQuery loaded');

  // write to local storage from input when button save clicked
  $('.btn-submit').on('click', function(){
    localStorage.setItem('inputFieldValue', $('.text-entry').val());
    var myItemInStorage = localStorage.getItem('test of text-entry value');
    console.log('myItemInStorage', myItemInStorage);
  });

  // delete from local storage when delete button clicked
  $('.btn-delete').on('click', function(){
    localStorage.removeItem('inputFieldValue');
  });
  

});