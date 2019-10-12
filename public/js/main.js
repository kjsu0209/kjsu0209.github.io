
        $(document).ready(function(){
            $('#intro_ani01').animate({
                    opacity: '1',
            });
            var timeout;
            $('body').on('mousewheel', function(e){
                var scrollValue = $(window).scrollTop();
                clearTimeout(timeout);  
                    timeout = setTimeout(function() {
                if(e.originalEvent.wheelDelta > 0) {
                        var obj = "intro";
                    if(scrollValue >= $("#question").offset().top-100 && scrollValue < $("#edu").offset().top-100){
                        obj = "intro";
                    }
                    else if(scrollValue >= $("#edu").offset().top-100 && scrollValue < $("#job").offset().top-100){
                        obj = "question";
                        $('#intro_ani02').animate({
                            opacity: '1',
                        });
                    }
                    else if(scrollValue >= $("#job").offset().top-100){
                        obj = "edu";
                    }
                    //console.log("up: " +scrollValue + ", " + obj);

                    var position = $("#"+obj).offset();
                    $('html, body').animate({scrollTop : position.top}, 1000);
                    
                }
                else {
                        var obj = "intro";
                        if(scrollValue >= $("#intro").offset().top && scrollValue < $("#question").offset().top-100){
                            obj = "question";
                            $('#intro_ani02').animate({
                                opacity: '1',
                            });
                        }
                        else if(scrollValue >= $("#question").offset().top && scrollValue < $("#edu").offset().top-100){
                            obj = "edu";
                        }
                        else if(scrollValue >= $("#edu").offset().top-100 && scrollValue < $("#job").offset().top){
                            obj = "job";
                        }
                        //console.log("down: " +scrollValue + ", " + obj);

                        var position = $("#"+obj).offset();
                        $('html, body').animate({scrollTop : position.top}, 1000);
                    
                }
            }, 100);

            });
        })

        function openCard(no, width){
            var card = document.getElementById(no);
            if(card.style.display === "none"){
                card.parentElement.style.width = '60%';            
                card.style.display = "block";
            }
            else if(card.style.display === "block"){
                card.parentElement.style.width = width;            
                card.style.display = "none";
            }
            else{
                card.parentElement.style.width = '60%';            
                card.style.display = "block";
            }
        }

        function ChangeTheme(){
            var oldlink = document.getElementsByTagName('link').item(0);
            var newlink = document.createElement("link");
            newlink.setAttribute("rel", "stylesheet");
            if(oldlink.getAttribute("href") == "./public/css/creative.css"){
                newlink.setAttribute("href", "./public/css/professional.css");
            }
            else{
                newlink.setAttribute("href", "./public/css/creative.css");
            }
            newlink.setAttribute("type", "text/css");
        
            document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
        }