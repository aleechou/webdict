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
           
        var titleBar = document.getElementById("idQQCloudDictPopupToolbar") ;
        if(titleBar)
        {
            var lnk = document.createElement("a") ;
            lnk.innerText = "生词本" ;
            lnk.setAttribute('style',"float: right;margin-right:30px") ;
            lnk.setAttribute('href',"http://scb.dict.cn/") ;
            lnk.setAttribute('target',"_blank") ;
            titleBar.appendChild(lnk) ;
            
            // form of save to dict.cn
            var form = document.createElement("form") ;
            form.id = "__dictcn_form"
            form.innerHTML = '<input id="___dictcn_newword" name="newword" /><input name="wordclass" value="0" />' ;
            form.setAttribute('action',"http://scb.dict.cn/index.php?do=AddWord") ;
            form.setAttribute('method',"post") ;
            form.setAttribute('style',"display:none") ;
            form.setAttribute('target',"_blank") ;
            titleBar.appendChild(form) ;
            
            // save to dict.cn
            lnk = document.createElement("a") ;
            lnk.innerText = "[+]" ;
            lnk.setAttribute('style',"float: right;margin-right:10px") ;
            lnk.onclick = function(){
                var input = document.getElementById("idQQCloudDictQueryInput") ;
                
                document.getElementById("___dictcn_newword").value = input.value ;
                document.getElementById("__dictcn_form").submit() ;
            }
            titleBar.appendChild(lnk) ;
            
            // open dict.cn
            lnk = document.createElement("a") ;
            lnk.innerText = "Dict.cn" ;
            lnk.setAttribute('style',"float: right;margin-right:30px") ;
            lnk.setAttribute('target',"_blank") ;
            lnk.onclick = function(){
                var input = document.getElementById("idQQCloudDictQueryInput") ;
                this.href = "http://dict.cn/" + input.value ;
            }
            titleBar.appendChild(lnk) ;
        }
        
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
            
            
            // http://scb.dict.cn/index.php?do=AddWord&wordclass=0&newword=hi
            // wordclass:0
            // newword:hi
            
        } ;
        
    });
    
})() ;