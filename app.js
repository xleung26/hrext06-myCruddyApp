$(document).ready(function(){
  console.log('jQuery loaded');

  // write to local storage from input when button save clicked

  let i = 0;
  for (i = 0; i < parseInt(localStorage.key(localStorage.length-1)) + 1; i++){
  let taskID = "" + i;
  let myItemInStorage = localStorage.getItem(taskID)
  //appending all the to do list on the display
  
  if (myItemInStorage !== null) {
    $newtaskID = $('<div id="tasks"></div>')
    $newtaskID.addClass(taskID).append('<input type="checkbox" name="anotherCheckBox" class=' + taskID + '><label for="anotherCheckBox">' + myItemInStorage + '</label>');
    $('.list-display-field').append($newtaskID);
  }

  };

  // console.log(parseInt(localStorage.key(localStorage.length-1)));

  $('.btn-submit').on('click', function(){
    if (($('.text-entry').val()) !== ""){
      console.log($('.text-entry').val());
      $newtaskID = $('<div id="tasks"></div>')
      let taskID = "" + i;
      localStorage.setItem(taskID, $('.text-entry').val());
      var myItemInStorage = localStorage.getItem(taskID);
      console.log('myItemInStorage', myItemInStorage);
      $newtaskID.addClass(taskID).append('<input type="checkbox" name="anotherCheckBox" class=' + taskID + '><label for="anotherCheckBox">' + myItemInStorage + '</label>');
      $('.list-display-field').append($newtaskID);
      i++; 
    }
    // display the value here
    //$('.list-display-field').text(myItemInStorage); // ??
      ($('input[type="checkbox"]')).change(function () {
    ($('input[type="checkbox"]')).each(function () {
      if(this.checked){
        ($(this)).siblings().css({"color":"red", "font-size": "110%", "font-weight": "bold"})
      }
      else {
        ($(this)).siblings().css({"color":"black", "font-size": "110%", "font-weight": "normal"})
      }
    });
  });
  });

  // delete from local storage when delete button clicked
  
  $('.btn-delete').on('click', function () {
      // if (($(this)).prop("checked")) {
    ($('input[type="checkbox"]')).each(function () {
      let clickedItems = [];
      if(this.checked){
        clickedItems.push(($(this)).attr('class'));
        ($(this)).parent().remove();
        }
        // console.log(this);
      localStorage.removeItem(clickedItems);
    });
  });

  $('.btn-clear').on('click', function(){
    localStorage.clear();
    $("div[id=tasks]").remove();
  });

  ($('input[type="checkbox"]')).change(function () {
    ($('input[type="checkbox"]')).each(function () {
      if(this.checked){
        ($(this)).siblings().css({"color":"red", "font-size": "110%", "font-weight": "bold"})
      }
      else {
        ($(this)).siblings().css({"color":"black", "font-size": "100%", "font-weight": "bold"})
      }
    });
  });
  
});