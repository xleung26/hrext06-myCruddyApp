$(document).ready(function(){
  console.log('jQuery loaded');

  // write to local storage ????
    /*
    NOTE
    works like an object, will not remove
     previously added data by calling setItem on a
    new keyName
  */
    //store the input value locally
    // will it overwrite when new text is entered - yes it will (sweet)


  // when button is clicked, read the value above
  $('.btn-submit').on('click', function(){
    localStorage.setItem('test of text-entry value', $('.text-entry').val());
    var myItemInStorage = localStorage.getItem('test of text-entry value');
    console.log('myItemInStorage', myItemInStorage);

  });
  
  

});