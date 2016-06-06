function qs(el) {
if (window.RegExp && window.encodeURIComponent) 
{var qe=encodeURIComponent(document.f.search.value);
return qe;
}
return el;
}
function keysearch()
{
	if(document.all.search.value=="" || document.all.search.value=="--請輸入關鍵字--")
	{
		alert("您必須先輸入關鍵字才能進行搜尋！");
		document.all.search.focus();
		return false;
	}
	key = qs(document.all.search.value);
	url = "http://www.google.com/search?hl=zh-TW&q="+key+" site:http://www.unimicron.com/";
	window.open(url);
	return false;
}
