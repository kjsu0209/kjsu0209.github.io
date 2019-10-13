
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

        function HideAnswer(str){
            var e = document.getElementById('answer_field');
            var c = document.getElementById(str);
            c.style.border = "2px solid white";
            c.style.color = "white";
            c.setAttribute("onclick", "ShowAnswer(`" + str + "`)");
            if(str == "Q1"){
                c.innerHTML = "<p>Q1. Can you tell me a little about yourself?</p><i>show answer ▶</i>";
            }
            else if(str =="Q2"){
                c.innerHTML = "<p>Q2. What Do You Do For Fun?</p><i>show answer ▶</i>";
            }
            else if(str == "Q3"){
                c.innerHTML = "<p>Q3. What Is Your Strength?</p><i>show answer ▶</i>";
            }
            e.innerHTML = "";
        }

        function ShowAnswer(str){
            var e = document.getElementById('answer_field');
            var c = document.getElementById(str);
            document.getElementById("Q1").style.border = "2px solid white";
            document.getElementById("Q1").style.color = "white";
            document.getElementById("Q2").style.border = "2px solid white";
            document.getElementById("Q2").style.color = "white";
            document.getElementById("Q3").style.border = "2px solid white";
            document.getElementById("Q3").style.color = "white";
            switch(str){
                case "Q1":
                    document.getElementById("Q2").innerHTML = "<p>Q2. What Do You Do For Fun?</p><i >show answer ▶</i>";
                    document.getElementById("Q3").innerHTML = "<p>Q3. What Is Your Strength?</p><i >show answer ▶</i>";    
                    document.getElementById("Q2").setAttribute("onclick", "ShowAnswer(`Q2`)");
                    document.getElementById("Q3").setAttribute("onclick", "ShowAnswer(`Q3`)");
                    e.innerHTML = "Self-motivated, proactive student <br>who wants to meet <br>opportunity for professional insight.";
                    c.innerHTML = "<p>Q1. Can you tell me a little about yourself?</p><i onclick='HideAnswer(`Q1`)'>hide answer ▶</i>";
                    c.style.border = "2px solid #f8d668";
                    c.style.color = "#f8d668";
                    c.setAttribute("onclick", "HideAnswer(`Q1`)");

                    break;
                case "Q2":
                        document.getElementById("Q1").innerHTML = "<p>Q1. Can you tell me a little about yourself?</p><i >show answer ▶</i>";
                        document.getElementById("Q3").innerHTML = "<p>Q3. What Is Your Strength?</p><i >show answer ▶</i>";    
                        document.getElementById("Q1").setAttribute("onclick", "ShowAnswer(`Q1`)");
                        document.getElementById("Q3").setAttribute("onclick", "ShowAnswer(`Q3`)");
                        var str ="I'm into baking these days :)<br>I also like to travel around the world.<br>Here're my photos.<br>";
                    str += "<img src='./public/img/tr1.PNG' width='150px' height='150px' style='border-radius:50%; margin: 1rem; float:left;'>"
                    str += "<img src='./public/img/tr2.PNG' width='150px' height='150px' style='border-radius:50%; margin: 1rem; float:left;'>"
                    str += "<img src='./public/img/tr3.PNG' width='150px' height='150px' style='border-radius:50%; margin: 1rem; float:left;'>"
                    e.innerHTML = str;
                    c.setAttribute("onclick", "HideAnswer(`Q2`)");
                    c.innerHTML = "<p>Q2. What Do You Do For Fun?</p><i >hide answer ▶</i>";
                    c.style.border = "2px solid #f8d668";
                    c.style.color = "#f8d668";
                    break;
                case "Q3":
                    e.innerHTML ="Frontiership is one of my strengths.<br>It draws me to do lots of challenges.<br>Like living in foreign country.";
                    document.getElementById("Q1").innerHTML = "<p>Q1. Can you tell me a little about yourself?</p><i >show answer ▶</i>";
                    document.getElementById("Q2").innerHTML = "<p>Q2. What Do You Do For Fun?</p><i >show answer ▶</i>";
                    document.getElementById("Q1").setAttribute("onclick", "ShowAnswer(`Q1`)");
                    document.getElementById("Q2").setAttribute("onclick", "ShowAnswer(`Q2`)");
                    c.innerHTML = "<p>Q3. What Is Your Strength?</p><i onclick='HideAnswer(`Q3`)'>hide answer ▶</i>";
                    c.style.border = "2px solid #f8d668";
                    c.style.color = "#f8d668";
                    c.setAttribute("onclick", "HideAnswer(`Q3`)");
                    break;
            }
        }