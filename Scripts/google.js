function qs(el) {
if (window.RegExp && window.encodeURIComponent) 
{var qe=encodeURIComponent(document.f.search.value);
return qe;
}
return el;
}
function keysearch()
{
	if(document.all.search.value=="" || document.all.search.value=="--�п�J����r--")
	{
		alert("�z��������J����r�~��i��j�M�I");
		document.all.search.focus();
		return false;
	}
	key = qs(document.all.search.value);
	url = "http://www.google.com/search?hl=zh-TW&q="+key+" site:http://www.unimicron.com/";
	window.open(url);
	return false;
}
