//处理移动端滚动穿透问题
var ModalHelper = (function(bodyCls) {
    var scrollTop;
    return {
        afterOpen: function() {
            if(navigator.userAgent.match("iPhone")){
                scrollTop = document.scrollingElement.scrollTop;
            }else{
                scrollTop = document.body.scrollTop;
            }
            //document.body.classList.add(bodyCls);
            document.body.setAttribute("class",bodyCls)
            //$("body").addClass(bodyCls)
            document.body.style.top = -scrollTop + 'px';
        },
        beforeClose: function() {
            //document.body.classList.remove(bodyCls);
            document.body.removeAttribute("class",bodyCls)
            //$("body").removeClass(bodyCls)
            // scrollTop lost after set position:fixed, restore it back.
            if(navigator.userAgent.match("iPhone")){
                document.scrollingElement.scrollTop = scrollTop;
            }else{
                document.body.scrollTop = scrollTop;
            }
        }
    };
})('modal-open');