// �����J�n�Ϊ��Ϥ�
img1 = new Image(16, 16);
img1.src="images/spinner.gif";
img2 = new Image(220, 19);
img2.src="images/ajax-loader.gif";
// �}�l
$(document).ready(function(){
// ���modal box
$("#login_link").click(function(){
$('#login_form').modal();
});
// ����Qsubmit ��...
$("#status > form").submit(function(){
// ����Submit ���s
$('#submit').hide();
// ��ܱ��൥�ݹϤ�
$('#ajax_loading').show();
// 'this' �����O�o�Ӫ��
var str = $(this).serialize();
// -- �}�lAJAX �I�s--
$.ajax({
type: "POST",
url: "/LoginTest/doLogin", // Server �ݪ�URL
data: str,
dataType: "json", // �^�Ǫ���Ʈ榡
success: function(result){ // �p�G�����s�����\
$("#status").ajaxComplete(function(event, request, settings){
// Show 'Submit' Button
$('#submit').show();
// ���õ��ݹϮ�
$('#ajax_loading').hide();
if(result.message == 'OK') // �n�J���\
{
var login_response = '<div id="logged_in">' +
'<div style="width: 350px; float: left; margin-left: 70px;">' +
'<div style="width: 40px; float: left;">' +
'<img style="margin: 10px 0px 10px 0px;" align="absmiddle";"src="images/ajax-loader.gif">' +
'</div>' +
'<div style="margin: 10px 0px 0px 10px; float: right; width:300px;">'+
"�n�J���\! <br /> �е��ݾɦV�ܷ|������...</div></div>";
$('a.modalCloseImg').hide(); // simple modal ���F��A���n�ʡC
$('#simplemodal-container').css("width","500px"); // ����modal
���e
$('#simplemodal-container').css("height","120px");
$(this).html(login_response); // Refers to 'status'
// ���T��A���ܥt�@��(���ե�)
setTimeout('go_to_private_page()', 3000);
}
else // �n�J����
{
var login_response = result.message;
$('#login_response').html(login_response);
}
});
}
});
// -- ����AJAX �I�s--
return false;
}); // end submit event
});
function go_to_private_page()
{
window.location = 'news_show32.htm'; // Members Area
}
