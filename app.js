$(document).ready(function(){
  console.log('jQuery loaded');

  // write to local storage ????
    // read the input value
    $('.text-entry').val('this is a value');
    localStorage.setItem('test of text-entry value', $('.text-entry').val());
    // works like an object, will not remove
    // previously added data by calling setItem on a
    // new keyName
    // store the input value locally
  // how do we validate local storage ???
  // when button is clicked, read the value above
});