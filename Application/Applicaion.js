var namee = $('#name').val();
var phone = $('#phone').val();


function Application(){
 $.ajax({
    type : 'POST',
    url : '/api/lecture/application/{id}',
    data : JSON.stringify({
        "name" : namee,
        "phone" : phone
    }),
    success : function(data){
        // 200:ok,
        // 400:bad_request,
        // 401:unauthorized
    }
 })   
}