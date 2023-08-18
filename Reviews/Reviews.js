
var namee = $('#name').val();
var phone = $('#phone').val();
var content = $('#comment').val();

function comment(){
    $.ajax({
        type: 'POST',
        url: '/api/lecture/comment/{id}',
        data : JSON.stringify({
            "name" : namee,
            "phone" : phone,
            "content" : content
        })
    })
}

function comment_change(){
    $.ajax({
        type: 'PUT',
        url: '/api/lecture/comment/{id}',
        data : JSON.stringify({
            "name" : namee,
            "phone" : phone,
            "content" : content
        }),
        success : function(data){
            // 200:ok,
            // 400:bad_request,
            // 401:unauthorized //해당 강좌에 신청하지 않은 유저일 경우
        }
    })
}

function comment_delete(){
    $.ajax({
        type: 'DELETE',
        url: '/api/lecture/comment/{id}',
        success : function(data){
            // 200:ok,
            // 400:bad_request,
            // 401:unauthorized //해당 강좌에 신청하지 않은 유저일 경우
          }
    })
}