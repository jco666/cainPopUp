function xc(){cainPopUp.click()}
!function(j,c,o){"object"==typeof exports&&"object"==typeof module?module.exports=o:"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports[j]=o:c[j]=o}("cainPopUp","undefined"!=typeof self?self:this,{
	ua:navigator.userAgent,
	wo:"width=1000,toolbar=1,menubar=1,resizable=1,scrollbars=1",
	init(args){
		args=args||{};
		this.times=void 0!==args.times&&parseInt(args.times)||99999;
		this.clickInterval=void 0!==args.clickInterval&&parseInt(args.clickInterval)||15;
		this.cycleInterval=void 0!==args.cycleInterval&&parseInt(args.cycleInterval)||24;
		this.url=void 0!==args.url?args.url:window.location.href;
		this.cookieName=void 0!==args.cookieName?args.cookieName:'__cfduid';

		x = new Date;
		this.exp = (new Date(x.getTime() + 36E5 * this.cycleInterval)).toGMTString();
		mat=document.cookie.match(new RegExp("(^| )"+this.cookieName+"=([^;]+)")),this.val=mat&&parseInt(mat[2])||0;
		this._click();
	},
	_url(){
		return Array.isArray(this.url)?this.url[Math.floor(Math.random() * this.url.length)]:this.url
	},
	_click(){
		if (!(this.val >= this.times)){
			document.addEventListener ? document.addEventListener("click", xc, !1) : document.attachEvent ? document.attachEvent("onclick", xc) : document.onclick = xc;
			for (zg = document.getElementsByTagName("iframe"), i = 0; i < zg.length; i++)
				if (void 0 === captureFirstClick || captureFirstClick) {
					rect = zg[i].getBoundingClientRect();
					el = document.createElement("div");
					el.style.position = "absolute";
					el.style.left = rect.left + "px";
					el.style.top = rect.top + "px";
					el.style.width = rect.width + "px";
					el.style.height = rect.height + "px";
					el.style.cursor = "pointer";
					el.className = "x128-event";
					el.addEventListener ? el.addEventListener("click", xc, !1) : el.attachEvent ? el.attachEvent("onclick", xc) : el.onclick = xc;
					document.getElementsByTagName("body")[0].appendChild(el)
				}
		}
	},
	click(){
		if (!(this.val >= this.times)){
			bb = bk = !1;
			for (c1 = 12; 20 >= c1; c1++)
				if (-1 < this.ua.search("Firefox/" + c1)) {
					bk = !0;
					break
				} for (c1 = 21; 40 >= c1; c1++)
				if (-1 < this.ua.search("Chrome/" + c1)) {
					bb = !0;
					break
				} bk == !0 || bb == !0 ? (this.wo = "width=" + screen.width + ", height=" + screen.height + ",toolbar=1,menubar=1,resizable=1,scrollbars=1;", window.open(this._url(), "_blank")) :
				-1 < this.ua.search("Firefox/3") || -1 < this.ua.search("Safari") ? (this.wo = "width=" + screen.width + ", height=" + screen.height + ",toolbar=1,menubar=1,resizable=1,scrollbars=1", window.open(this._url(), "_blank")) : -1 < this.ua.search("Firefox") ? (this.wo = "width=" + screen.width + ", height=" + screen.height + ",toolbar=1,menubar=1,resizable=1,scrollbars=1", window.open(this._url(), "_blank")) : -1 < this.ua.search("Opera") ? window.open(this._url(), "_blank") : -1 < this.ua.search("Chrome") ? (this.wo = "width=" + screen.width + ", height=" +
					screen.height + ",toolbar=1,menubar=1,resizable=1,scrollbars=1", window.open(this._url(), "_blank")) : -1 < this.ua.search("MSIE") ? (this.wo = "width=" + screen.width + ", height=" + screen.height + ",toolbar=1,menubar=1,resizable=1,scrollbars=1", window.open(this._url(), "_blank")) : window.open(this._url(), "_blank");
			this.val++;
			document.cookie = this.cookieName+"=" + this.val + ";expires=" + this.exp + ";path=/"
		}
		for (ifs = document.getElementsByClassName("x128-event"),a = 0; a < ifs.length; a++) ifs[0].remove();
		document.addEventListener ? document.removeEventListener("click", xc, !1) : document.attachEvent ? document.detachEvent("onclick", xc) : document.onclick = null;
		setTimeout(this._click,this.clickInterval*1000);
	}
});
