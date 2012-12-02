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
    
    loadScript('http://dict.qq.com/cloudgetjs',function(){
        
        
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
            
            var input = document.getElementById("idQQCloudDictQueryInput") ;
            if(input)
            {
                input.value = txt ;
            }
            
            
        } ;
        
    });
    
})() ;