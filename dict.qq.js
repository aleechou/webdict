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
            
            // loading of save to dict.cn
            var loading = document.createElement("span") ;
            loading.setAttribute('style',"float:right;margin-right:10px;display:none") ;
            loading.innerText = "submiting ... " ;
            titleBar.appendChild(loading) ;
            
            
            // form of save to dict.cn
            var form = document.createElement("form") ;
            form.id = "__dictcn_form"
            form.innerHTML = '<input id="___dictcn_newword" name="newword" /><input name="wordclass" value="0" />' ;
            form.setAttribute('action',"http://scb.dict.cn/index.php?do=AddWord") ;
            form.setAttribute('method',"post") ;
            form.setAttribute('style',"display:none") ;
            form.setAttribute('target',"___dict_iframe") ;
            titleBar.appendChild(form) ;
            
            // save to dict.cn new word book
            var lnk2 = document.createElement("a") ;
            lnk2.innerText = "[+]" ;
            lnk2.setAttribute('style',"float:right;margin-right:10px") ;
            lnk2.onclick = function(){
                
                // create new iframe for submit
                var iframe = document.getElementById("___dict_iframe") ;
                if(iframe)
                {
                    titleBar.removeChild(iframe) ;
                }
                iframe = document.createElement("iframe") ;
                iframe.id = iframe.name = "___dict_iframe" ;
                iframe.setAttribute('style',"display:none") ;
                titleBar.appendChild(iframe) ;
            
                loading.style.display = "inline" ;
                setTimeout(function(){
                    loading.style.display = "none" ;
                },2000);
                
                var input = document.getElementById("idQQCloudDictQueryInput") ;
                document.getElementById("___dictcn_newword").value = input.value ;
                document.getElementById("__dictcn_form").submit() ;
                
                // close query result panel
                document.getElementById("idQQCloudDictClearBtn").click() ;
            }
            titleBar.appendChild(lnk2) ;
            
            // open dict.cn
            var lnk3 = document.createElement("a") ;
            lnk3.innerText = "Dict.cn" ;
            lnk3.setAttribute('style',"float: right;margin-right:30px") ;
            lnk3.setAttribute('target',"_blank") ;
            lnk3.onclick = function(){
                var input = document.getElementById("idQQCloudDictQueryInput") ;
                this.href = "http://dict.cn/" + input.value ;
            }
            titleBar.appendChild(lnk3) ;
            
            // toggle display
            document.getElementById("idQQCloudDictFoldSwitchOn").addEventListener("click",function(){
                lnk.style.display = "none" ;
                lnk2.style.display = "none" ;
                lnk3.style.display = "none" ;
            }) ;
            document.getElementById("idQQCloudDictFoldSwitchOff").addEventListener("click",function(){
                lnk.style.display = "block" ;
                lnk2.style.display = "block" ;
                lnk3.style.display = "block" ;
            }) ;
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
            
            document.getElementById("idQQCloudDictFoldSwitchOff").click() ;
            
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