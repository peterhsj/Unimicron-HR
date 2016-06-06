// 先載入要用的圖片
img1 = new Image(16, 16);
img1.src="images/spinner.gif";
img2 = new Image(220, 19);
img2.src="images/ajax-loader.gif";
// 開始
$(document).ready(function(){
// 顯示modal box
$("#login_link").click(function(){
$('#login_form').modal();
});
// 當表單被submit 時...
$("#status > form").submit(function(){
// 隱藏Submit 按鈕
$('#submit').hide();
// 顯示旋轉等待圖片
$('#ajax_loading').show();
// 'this' 指的是這個表單
var str = $(this).serialize();
// -- 開始AJAX 呼叫--
$.ajax({
type: "POST",
url: "/LoginTest/doLogin", // Server 端的URL
data: str,
dataType: "json", // 回傳的資料格式
success: function(result){ // 如果網路連結成功
$("#status").ajaxComplete(function(event, request, settings){
// Show 'Submit' Button
$('#submit').show();
// 隱藏等待圖案
$('#ajax_loading').hide();
if(result.message == 'OK') // 登入成功
{
var login_response = '<div id="logged_in">' +
'<div style="width: 350px; float: left; margin-left: 70px;">' +
'<div style="width: 40px; float: left;">' +
'<img style="margin: 10px 0px 10px 0px;" align="absmiddle";"src="images/ajax-loader.gif">' +
'</div>' +
'<div style="margin: 10px 0px 0px 10px; float: right; width:300px;">'+
"登入成功! <br /> 請等待導向至會員網頁...</div></div>";
$('a.modalCloseImg').hide(); // simple modal 的東西，不要動。
$('#simplemodal-container').css("width","500px"); // 改變modal
長寬
$('#simplemodal-container').css("height","120px");
$(this).html(login_response); // Refers to 'status'
// 等三秒，跳至另一頁(測試用)
setTimeout('go_to_private_page()', 3000);
}
else // 登入失敗
{
var login_response = result.message;
$('#login_response').html(login_response);
}
});
}
});
// -- 結束AJAX 呼叫--
return false;
}); // end submit event
});
function go_to_private_page()
{
window.location = 'news_show32.htm'; // Members Area
}
