var snackbarContainer = null;

$(document).ready(function(){
  console.log("ilarious ready");
  snackbarContainer = document.querySelector('#cb-toast-msg');
});

$('#post-to-ilarious01').submit(function(e){
  console.log("#post-to-ilarious01");
  
  $.ajax({
    type : 'POST',
    url : 'https://webtask.it.auth0.com/api/run/wt-lucas_isasmendi-gmail_com-0/ilarious/ilarious01?webtask_no_cache=1',
    data : {user : $('#user').val(), funcm : $('#funcm').val() },
    dataType    : 'json',
    headers : {
      Authorization : 'Bearer ' + localStorage.getItem('token')
    }
  }).done(function(data) {
    console.log("data",data)
    var data = {message: data.responseJSON.message};
    snackbarContainer.MaterialSnackbar.showSnackbar(data);    
    if(data.statusCode == 200){
      console.log("ok",data)
    } else {
      console.log("bc !== 200",data)
    }
  }).error(function(error) {
    console.log("error",error)
    var data = {message: error.responseJSON.message};
    snackbarContainer.MaterialSnackbar.showSnackbar(data);  
  });
  e.preventDefault();
});