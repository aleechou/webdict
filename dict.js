(function(){

    function loadScript(url,onload){
        var element=document.createElement('script');
        element.setAttribute('src',url);
        if( onload )
        {
            element.onload = onload ;
        }
        document.body.appendChild(element);
    } ;
    function loadCss(url){
        var element=document.createElement('link');
        element.setAttribute('rel','stylesheet');
        element.setAttribute('type','text/css');
        element.setAttribute('href',url);
        document.head.appendChild(element);
    } ;
    
    loadScript('http://127.0.0.1/otp/dict/jquery.js') ;
    loadCss('http://127.0.0.1/otp/dict/jquery.ui/jquery-ui-1.8.23.custom.css') ;
    loadScript('http://127.0.0.1/otp/dict/jquery.ui/jquery-ui-1.8.23.custom.min.js',function(){
        
        var $ = jQuery ;
        
        // 
        // html+= '<iframe id="dict" width=525px height=675px style="margin-top:-175px;margin-left:-125px" src="http://dict.cn/subscription"></frame>' ;
        var iframe = null ;
    
        document.onselectionchange = function(){
            var sel = window.getSelection() ;
            if( !sel.rangeCount )
            {
                return ;
            }
            
            var range = sel.getRangeAt(0) ;
            var txt = range.toString() ;
            if( !txt.length )
            {
                return ;
            }
            
            $(divDlg).html('<iframe id="dict" width=525px height=675px style="margin-top:-175px;margin-left:-125px" src="http://dict.cn/'+txt+'"></frame>')
                    .dialog("open") ;
                    
            iframe = $(divDlg).find("iframe")[0] ;
            
        } ;
        
        
        $(divDlg).dialog({
            position: [20,10]
            , hide: "explode"
            , show: "explode"
            , autoOpen: false
            , resize: function(event,ui){
                if(!iframe)
                {
                    return ;
                }
                $(iframe)
                    .width(ui.size.width - parseInt($(iframe).css("margin-left")))
                    .height(ui.size.height - parseInt($(iframe).css("margin-top"))) ;
                console.log(ui.size.width - parseInt($(iframe).css("margin-left"))) ;
            }
            , width: 400
            , height: 500
        }) ;
        
        
    
    }) ;
    
        
    var divDlg = document.createElement('div');
    document.body.appendChild(divDlg);
    
})() ;
