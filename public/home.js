$(document).ready(function() {

console.log("connected");

enter();

})// end of document.ready

function enter() {
  $(document).keypress(function(e) {
    if(e.which == 13) {
      document.getElementById('nextPage').click();
    }
  });
}
