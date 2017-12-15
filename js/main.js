function deletePhoto(){
	if(confirm('Вы действительно хотите удалить фотографию')){
		$.post({ 
				url: '/office/contender/account/ajax/delete-photo/',
				type: 'post',
				success: function (data) {
					console.log(data.data);
					location.reload(); 
				}
			});
	}
}
function setCookie (name, value, expires, path, domain, secure) {
      document.cookie = name + "=" + escape(value) +
        ((expires) ? "; expires=" + expires : "") +
        ((path) ? "; path=" + path : "") +
        ((domain) ? "; domain=" + domain : "") +
        ((secure) ? "; secure" : "");
}

function getCookie(name) {
	var cookie = " " + document.cookie;
	var search = " " + name + "=";
	var setStr = null;
	var offset = 0;
	var end = 0;
	if (cookie.length > 0) {
		offset = cookie.indexOf(search);
		if (offset != -1) {
			offset += search.length;
			end = cookie.indexOf(";", offset)
			if (end == -1) {
				end = cookie.length;
			}
			setStr = unescape(cookie.substring(offset, end));
		}
	}
	return(setStr);
}

function SetWeaknesses(){
	if (getCookie("css_weaknesses" ) != null){
		setCookie("css_weaknesses", "css", "Mon, 01-Jan-2017 00:00:00 GMT", "/");
		console.log(1);
	} else {
		console.log(2);
		setCookie("css_weaknesses", "css", "Mon, 01-Jan-2020 00:00:00 GMT", "/");
	}
	location.reload();
}