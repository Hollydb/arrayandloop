$(document).ready(function() {
  console.log("Jquery is loaded");
  $("#submit").click(function(event){
  event.preventDefault();
  var fav =[ "first", "second", "third", "fourth"];
  var favArray= [ ];
  fav.forEach(function(fav) {
    var all = $('input#' + fav).val();
    favArray.push(all[0]);
    console.log (favArray);

    favArray.push(favArray[3]);
    console.log(favArray);

  //
  //
  //
  //
  // // var first =$('input#first').val ();
  // // var second =$('input#second').val ();
  // // var third =$('input#third').val ();
  // // var fourth =$('input#fourth').val ();
  // // console.log (first, second, third, fourth);
  // // var all = [first, second, third, fourth];
  // console.log (all);
  // all[2];
  // // // all.push(all[0]);
  // // console.log (all);
  // $('#insert1').html(all[0]);
  // $('#insert2').html(all[1]);
  // $('#insert3').html(all[3]);
  // $('#insert4').html(all[2]);

});
});
});
