let checkedArrayWeek = [];
let checkedArrayregion = [];


function CheckedWeek(){
    $('input[name="week"]').change(function () {
        $('input[name="week"]').each(function () {
          var checked = $(this).prop("checked");
          localStorage.setItem("checked", checked);
          var weekContent = $(this).next();
          // console.log("로컬스토리지 넣기전: ", weekContent)
          localStorage.setItem("Label", weekContent[0].htmlFor);
          if (checked) weekContent.css("background-color", "#51d394");
          else weekContent.css("background-color", "#fff");
        });
      });
}


var cat1_num = new Array(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16);
var cat1_name = new Array('서울','부산','대구','인천','광주','대전','울산','강원','경기','경남','경북','전남','전북','제주','충남','충북');

var cat2_num = new Array();
var cat2_name = new Array();

cat2_num[1] = new Array(17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41);
cat2_name[1] = new Array('강남구','강동구','강북구','강서구','관악구','광진구','구로구','금천구','노원구','도봉구','동대문구','동작구','마포구','서대문구','서초구','성동구','성북구','송파구','양천구','영등포구','용산구','은평구','종로구','중구','중랑구');

cat2_num[2] = new Array(42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57);
cat2_name[2] = new Array('강서구','금정구','남구','동구','동래구','부산진구','북구','사상구','사하구','서구','수영구','연제구','영도구','중구','해운대구','기장군');

cat2_num[3] = new Array(58,59,60,61,62,63,64,65);
cat2_name[3] = new Array('남구','달서구','동구','북구','서구','수성구','중구','달성군');

cat2_num[4] = new Array(66,67,68,69,70,71,72,73,74,75);
cat2_name[4] = new Array('계양구','남구','남동구','동구','부평구','서구','연수구','중구','강화군','옹진군');

cat2_num[5] = new Array(76,77,78,79,80);
cat2_name[5] = new Array('광산구','남구','동구','북구','서구');

cat2_num[6] = new Array(81,82,83,84,85);
cat2_name[6] = new Array('대덕구','동구','서구','유성구','중구');

cat2_num[7] = new Array(86,87,88,89,90);
cat2_name[7] = new Array('남구','동구','북구','중구','울주군');

cat2_num[8] = new Array(91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108);
cat2_name[8] = new Array('강릉시','동해시','삼척시','속초시','원주시','춘천시','태백시','고성군','양구군','양양군','영월군','인제군','정선군','철원군','평창군','홍천군','화천군','횡성군');

cat2_num[9] = new Array(109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148);
cat2_name[9] = new Array('고양시 덕양구','고양시 일산구','과천시','광명시','광주시','구리시','군포시','김포시','남양주시','동두천시','부천시 소사구','부천시 오정구','부천시 원미구','성남시 분당구','성남시 수정구','성남시 중원구','수원시 권선구','수원시 장안구','수원시 팔달구','시흥시','안산시 단원구','안산시 상록구','안성시','안양시 동안구','안양시 만안구','오산시','용인시','의왕시','의정부시','이천시','파주시','평택시','하남시','화성시','가평군','양주군','양평군','여주군','연천군','포천군');

cat2_num[10] = new Array(149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168);
cat2_name[10] = new Array('거제시','김해시','마산시','밀양시','사천시','양산시','진주시','진해시','창원시','통영시','거창군','고성군','남해군','산청군','의령군','창녕군','하동군','함안군','함양군','합천군');

cat2_num[11] = new Array(169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192);
cat2_name[11] = new Array('경산시','경주시','구미시','김천시','문경시','상주시','안동시','영주시','영천시','포항시 남구','포항시 북구','고령군','군위군','봉화군','성주군','영덕군','영양군','예천군','울릉군','울진군','의성군','청도군','청송군','칠곡군');

cat2_num[12] = new Array(193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214);
cat2_name[12] = new Array('광양시','나주시','목포시','순천시','여수시','강진군','고흥군','곡성군','구례군','담양군','무안군','보성군','신안군','영광군','영암군','완도군','장성군','장흥군','진도군','함평군','해남군','화순군');

cat2_num[13] = new Array(215,216,217,218,219,220,221,222,223,224,225,226,227,228,229);
cat2_name[13] = new Array('군산시','김제시','남원시','익산시','전주시 덕진구','전주시 완산구','정읍시','고창군','무주군','부안군','순창군','완주군','임실군','장수군','진안군');

cat2_num[14] = new Array(230,231,232,233);
cat2_name[14] = new Array('서귀포시','제주시','남제주군','북제주군');

cat2_num[15] = new Array(234,235,236,237,238,239,240,241,242,243,244,245,246,247,248);
cat2_name[15] = new Array('공주시','논산시','보령시','서산시','아산시','천안시','금산군','당진군','부여군','서천군','연기군','예산군','청양군','태안군','홍성군');

cat2_num[16] = new Array(249,250,251,252,253,254,255,256,257,258,259,260);
cat2_name[16] = new Array('제천시','청주시 상당구','청주시 흥덕구','충주시','괴산군','단양군','보은군','영동군','옥천군','음성군','진천군','청원군');

function region_change(key,sel){
    if(key == '') return;
    var index = parseInt(key) ;
        if( index >= 0 && index < cat2_name.length){
            var name = cat2_name[index];
            var val = cat2_num[index];

            for(i=sel.length-1; i>=0; i--)
                sel.options[i] = null;
            sel.options[0] = new Option('-선택-','', '', true);
            for(i=0; i<name.length; i++){
                sel.options[i+1] = new Option(name[i],val[i]);
            }
        }
        localStorage.setItem("area_num",key);
        localStorage.setItem("area1", cat1_name[key-1]);
        localStorage.setItem("catnum", cat2_num[key]);
        localStorage.setItem("catname", cat2_name[key]);
        // console.log(cat1_name[key-1],cat2_name[index]);
}
function loggg(area){
  var area1 = localStorage.getItem("area1");
  checkedArrayregion.push(area1);
  // console.log(checkedArrayregion);
  var key = localStorage.getItem("area_num");
  
  if (key == 1) {
    area = area - 16; 
    var area2 = cat2_name[key][area-1];
    checkedArrayregion.push(area2);
  }
  if (key == 2) {
    area = area - 41; 
    var area2 = cat2_name[key][area-1];
    checkedArrayregion.push(area2);
  }
  if (key == 3) {
    area = area - 57; 
    var area2 = cat2_name[key][area-1];
    checkedArrayregion.push(area2);
  }
  if (key == 4) {
    area = area - 65; 
    var area2 = cat2_name[key][area-1];
    checkedArrayregion.push(area2);
  }
  if (key == 5) {
    area = area - 75; 
    var area2 = cat2_name[key][area-1];
    checkedArrayregion.push(area2);
  }
  if (key == 6) {
    area = area - 80; 
    var area2 = cat2_name[key][area-1];
    checkedArrayregion.push(area2);
  }
  if (key == 7) {
    area = area - 85; 
    var area2 = cat2_name[key][area-1];
    checkedArrayregion.push(area2);
  }
  if (key == 8) {
    area = area - 90; 
    var area2 = cat2_name[key][area-1];
    checkedArrayregion.push(area2);
  }
  if (key == 9) {
    area = area - 108; 
    var area2 = cat2_name[key][area-1];
    checkedArrayregion.push(area2);
  }
  if (key == 10) {
    area = area - 148; 
    var area2 = cat2_name[key][area-1];
    checkedArrayregion.push(area2);
  }
  if (key == 11) {
    area = area - 168; 
    var area2 = cat2_name[key][area-1];
    checkedArrayregion.push(area2);
  }
  if (key == 12) {
    area = area - 192; 
    var area2 = cat2_name[key][area-1];
    checkedArrayregion.push(area2);
  }
  if (key == 13) {
    area = area - 214; 
    var area2 = cat2_name[key][area-1];
    checkedArrayregion.push(area2);
  }
  if (key == 14) {
    area = area - 229; 
    var area2 = cat2_name[key][area-1];
    checkedArrayregion.push(area2);
  }
  if (key == 15) {
    area = area - 233; 
    var area2 = cat2_name[key][area-1];
    checkedArrayregion.push(area2);
  }
  if (key == 16) {
    area = area - 248; 
    var area2 = cat2_name[key][area-1];
    checkedArrayregion.push(area2);
  }

  // checkedArrayregion = checkedArrayregion.slice(-2);
  var removeBy2 = checkedArrayregion.length -2;
  if (removeBy2 > 0) {
    checkedArrayregion.splice(0,removeBy2);
  }
  console.log(checkedArrayregion);
  
}



var title = $('#title').val();
var intro = $('#intro').val();
var region = $('#region').val();
var week = $('#week').val();
var images = $('#imagePreview').val();
var introText = $("#intro").val();
function clickSubmit(){
  // intro.replaceAll("<br>", "\r\n");
  $(document).ready(function() {
    var convertedText = introText.replace(/<br>/g, "\r\n");
  });
  var checked = localStorage.getItem("checked");
  var weekContent = localStorage.getItem("Label");
  if (checked) { //check된 요일을 배열에 넣는 코드
    checkedArrayWeek.push(weekContent);
      if (checked) {
        console.log("요일 요소: " ,weekContent);
        checkedArrayWeek.push(weekContent);
      }
      checkedArrayWeek = new Set(checkedArrayWeek);
      console.log("요일 배열: ", checkedArrayWeek);
  }
  
  function refresh(){
    $.ajax({
      type : 'POST',
      url : '/api/lecture/board',
      data : JSON.stringify({
        "title" : title,
        "intro" : intro,
        "region" : checkedArrayregion, // ex. ['인천', '부평구']
        "week" : checkedArrayWeek, //checkedArrayWeek에 요일이 담겨있음
        "images" : images
      }),
      success : function(data){
        // 200:ok,
        // 400:bad_request,
        // 401:unauthorized
      }
    });
  }
  refresh();
}




//이미지 등록하고 삭제하는 함수
$(document).ready(function() {
  $("#uploadButton").change(function(event) {
      var selectedFile = event.target.files[0];
      if (selectedFile) {
          var reader = new FileReader();
          reader.onload = function(e) {
              $("#imagePreview").attr("src", e.target.result);
          };
          reader.readAsDataURL(selectedFile);
      }
  });
  $("#delete_img").click(function(){
    $("#imagePreview").attr("src", "../img/gray_box.png");
  })
});