$(function(){
    $("#info").click(function(){
        var lng=ChooseLanguage.lang.value;
        switch(lng){
            case "TR":
                $("#trVersion").toggle(3000);
                $("h1").html("Oyun Hakkında");
                $("#info").attr('value', 'Bilgiyi Göster');
                $("a").html("Oyuna Geri Dön");
                break;
            case"ENG":
            $("#infoMessage").toggle(3000);
            $("h1").html("Game Information");
            $("#info").attr('value', 'Show Information');
            $("a").html("Back to Game");
               break;
            default:
                alert("choose a language");
        }
       

    });
    $("#start").click(function(){     
        var box1=document.getElementById("box1");
        var box2=document.getElementById("box2");
        var box3=document.getElementById("box3");
        var box4=document.getElementById("box4");

        //FOR BOX1
        var randPosX1 = Math.floor((Math.random()*400));
        var randPosY1 = Math.floor((Math.random()*900));
       
        box1.style.top=randPosX1+'px';
        box1.style.left=randPosY1+'px';
        //FOR BOX2
        var randPosX2 = Math.floor((Math.random()*400));
        var randPosY2 = Math.floor((Math.random()*900));
       
        box2.style.top=randPosX2+'px';
        box2.style.left=randPosY2+'px';

        //FOR BOX3
        var randPosX3 = Math.floor((Math.random()*400));
        var randPosY3 = Math.floor((Math.random()*900));
       
        box3.style.top=randPosX3+'px';
        box3.style.left=randPosY3+'px';

        var randPosX4 = Math.floor((Math.random()*400));
        var randPosY4 = Math.floor((Math.random()*900));
       
        box4.style.top=randPosX4+'px';
        box4.style.left=randPosY4+'px';

        var rnd1=Math.floor((Math.random()*100));
        var rnd2=Math.floor((Math.random()*100));
        var rnd3=Math.floor((Math.random()*100));
        var rnd4=Math.floor((Math.random()*100));
        if((rnd1==rnd2)|| (rnd1==rnd3)||(rnd1==rnd4)){
            rnd1=Math.floor(Math.random()*100);
        }
        else if((rnd2==rnd3)||(rnd2==rnd4)){
            rnd2=Math.floor(Math.random()*100);
        }
        else if(rnd3==rnd4){
            rnd3=Math.floor(Math.random()*100);

        }
        $("#game").click(function(){
            //BOX1
            $("#num1").fadeToggle("slow",function(){
            document.getElementById("num1").innerHTML=rnd1;
            });
            //BOX2
            $("#num2").fadeToggle("slow",function(){
                document.getElementById("num2").innerHTML=rnd2;
            });
            //BOX3
            $("#num3").fadeToggle("slow",function(){
                document.getElementById("num3").innerHTML=rnd3;
            });
            //BOX4
            $("#num4").fadeToggle("slow",function(){
                document.getElementById("num4").innerHTML=rnd4;
            });

           
        });
          $("#numbers").click(function(){
            var numbers=[$("#num1").html(),$("#num2").html(),$("#num3").html(),$("#num4").html()];
            document.getElementById("demo").innerHTML = numbers;
            numbers.sort(function(a, b){return b - a});
            document.getElementById("result").innerHTML = numbers;

            var first=numbers[numbers.length-4];
            var second=numbers[numbers.length-3];
            var third=numbers[numbers.length-2];
            var forth=numbers[numbers.length-1];
           
            $(".box").click(function(){
                $("#message1").show(1000);
                $("#matchValue1").click(function(){
                    //1... 4 haneli olarak bakılıyor
                  if($("#num1").html()==first){
                        //BOX1 is 1. and Yellow
                        $("#box1").css("background-color","yellow");
                        $(".box").click(function(){
                            $("#message1").hide();
                             $("#message2").show(1000);
                             $("#matchValue2").click(function(){
                                 if($("#num2").html()==second){
                                    //Box2 is 2. and green
                                    $("#box2").css("background-color","green");
                                    $(".box").click(function(){
                                        $("#message2").hide();
                                        $("#message3").show(1000);
                                        $("#matchValue3").click(function(){
                                           if($("#num3").html()==third){
                                               //Box3 is 3. and pink
                                            $("#box3").css("background-color","pink");
                                           
                                            $(".box").click(function(){
                                                $("#message3").hide();
                                                $("#message4").show(1000);
                                                $("#matchValue4").click(function(){
                                                    if($("#num4").html()==forth){
                                                         //Box 4 is 4. and orange
                                                         $("#box4").css("background-color","orange");
                                                         $("#body").hide(800);
                                                         $("#container").hide();
                                                         $("body").css("background-color","blue");
                                                         $("#message5").show(1000);
                                                         $("#message5").html("You Finish the Memorization Game");
                                                         $("#message6").show(1000);
                                                         $("#message6").html("<a href='Game.html' style='text-decoration: none; color: white;'>Back to Game</a>");
                                                         

                                                    }
                                                });
                                            });
                                           }
                                           else{
                                               //Box 3 is 4. and orange
                                            $("#box3").css("background-color","orange");
                                            $(".box").click(function(){
                                                $("#message3").hide();
                                                $("#message4").show(1000);
                                                $("#matchValue4").click(function(){
                                                    if($("#num4").html()==third){
                                                        //Box4 is 3. and pink
                                                        $("#box4").css("background-color","pink");
                                                        $("#body").hide(800);
                                                        $("#container").hide();
                                                        $("body").css("background-color","blue");
                                                        $("#message5").show(1000);
                                                        $("#message5").html("You Finish the Memorization Game");
                                                        $("#message6").show(1000);
                                                         $("#message6").html("<a href='Game.html' style='text-decoration: none; color: white;'>Back to Game</a>");
                                                    }
                                                });
                                            });
                                           }
                                        });

                                    });
                                 }
                                 else if($("#num3").html()==second){
                                       //Box 3 2. and Green
                                    $("#box3").css("background-color","green");
                                   
                                    $(".box").click(function(){
                                        $("#message2").hide();
                                        $("#message3").show(1000);
                                        $("#matchValue3").click(function(){
                                            if($("#num2").html()==third){
                                                //Box 2 3. and pink
                                                $("#box2").css("background-color","pink");
                                               
                                                $(".box").click(function(){
                                                    $("#message3").hide();
                                                    $("#message4").show(1000);
                                                    $("#matchValue4").click(function(){
                                                        if($("#num4").html()==forth){
                                                            //Box 4 4. and orange
                                                            $("#box4").css("background-color","orange");
                                                            $("#body").hide(800);
                                                            $("#container").hide();
                                                            $("body").css("background-color","blue");
                                                            $("#message5").show(1000);
                                                            $("#message5").html("You Finish the Memorization Game");
                                                            $("#message6").show(1000);
                                                         $("#message6").html("<a href='Game.html' style='text-decoration: none; color: white;'>Back to Game</a>");
                                                        }
                                                    });
                                                });

                                            }
                                            else{
                                                //BOX 4 3. and Orange
                                                $("#box4").css("background-color","pink");
                                                $(".box").click(function(){
                                                    $("#message3").hide();
                                                    $("#message4").show(1000);
                                                    $("#matchValue4").click(function(){
                                                        if($("#num2").html()==forth){
                                                            //BOX2 4. and orange
                                                            $("#box2").css("background-color","orange");
                                                            $("#body").hide(800);
                                                            $("#container").hide();
                                                            $("body").css("background-color","blue");
                                                            $("#message5").show(1000);
                                                            $("#message5").html("You Finish the Memorization Game");
                                                            $("#message6").show(1000);
                                                         $("#message6").html("<a href='Game.html' style='text-decoration: none; color: white;'>Back to Game</a>");
                                                        }
                                                    });
                                                });
                                            }
                                        });
                                    });
                                }
                                 else{
                                     //BOX4 2. AND GREEN
                                     $("#box4").css("background-color","green");
                                     
                                     $(".box").click(function(){
                                        $("#message2").hide();
                                         $("#message3").show(1000);
                                         $("#matchValue3").click(function(){
                                             if($("#num3").html()==third){
                                                 //BOX3 3. AND PİNK
                                                 $("#box3").css("background-color","pink");
                                                 $(".box").click(function(){
                                                  $("#message3").hide();
                                                  $("#message4").show(1000);
                                                  $("#matchValue4").click(function(){
                                                     if($("#num2").html()==forth){
                                                         //BOX2 4. AND ORANGE
                                                         $("#box2").css("background-color","orange");
                                                         $("#body").hide(800);
                                                         $("#container").hide();
                                                         $("body").css("background-color","blue");
                                                         $("#message5").show(1000);
                                                         $("#message5").html("You Finish the Memorization Game");
                                                         $("#message6").show(1000);
                                                         $("#message6").html("<a href='Game.html' style='text-decoration: none; color: white;'>Back to Game</a>");
                                                     }
                                                  });
                                                 });
                                             }
                                             else{
                                                 //BOX2 3. AND PİNK
                                                 $("#box2").css("background-color","pink");
                                                
                                                 $(".box").click(function(){
                                                    $("#message3").hide();
                                                    $("#message4").show(1000);
                                                    $("#matchValue4").click(function(){
                                                        if($("#num3").html()==forth){
                                                            //BOX3 4. AND ORANGE
                                                            $("#box3").css("background-color","orange");
                                                            $("#body").hide(800);
                                                            $("#container").hide();
                                                            $("body").css("background-color","blue");
                                                            $("#message5").show(1000);
                                                            $("#message5").html("You Finish the Memorization Game");
                                                            $("#message6").show(1000);
                                                         $("#message6").html("<a href='Game.html' style='text-decoration: none; color: white;'>Back to Game</a>");
                                                        }
                                                    });
                                                 });
                                             }
                                         });
                                     });


                                 }
                             });
                        });
                   }
                   //2... 4 haneli olarak bakılıyor
                   else if($("#num2").html()==first){
                        //BOX2 1. AND YELLOW
                        $("#box2").css("background-color","yellow");
                        
                        $(".box").click(function(){
                            $("#message1").hide();
                            $("#message2").show(1000);
                            $("#matchValue2").click(function(){
                                //21.. 4 haneli olarak bakılıyor
                                if($("#num1").html()==second){
                                    //BOX1 2. AND GREEN
                                    $("#box1").css("background-color","green");
                                   
                                    $(".box").click(function(){
                                        $("#message2").hide();
                                        $("#message3").show(1000);
                                        $("#matchValue3").click(function(){
                                            //2134  4 haneli olarak bakılıyor
                                            if($("#num3").html()==third){
                                                //BOX3 3. AND PİNK
                                                $("#box3").css("background-color","pink");
                                                
                                                $(".box").click(function(){
                                                    $("#message3").hide();
                                                    $("#message4").show(1000);
                                                    $("#matchValue4").click(function(){
                                                        if($("#num4").html()==forth){
                                                            //BOX4 4. AND orange
                                                            $("#box4").css("background-color","orange");
                                                            $("#body").hide(800);
                                                            $("#container").hide();
                                                            $("body").css("background-color","blue");
                                                            $("#message5").show(1000);
                                                            $("#message5").html("You Finish the Memorization Game");
                                                            $("#message6").show(1000);
                                                         $("#message6").html("<a href='Game.html' style='text-decoration: none; color: white;'>Back to Game</a>");
                                                        }
                                                    });
                                                });
                                            }
                                            else{
                                                 //2143  4 haneli olarak bakılıyor

                                                //BOX4 3. AND PİNK
                                                $("#box4").css("background-color","pink");
                                              
                                                $(".box").click(function(){
                                                    $("#message3").hide();
                                                    $("#message4").show(1000);
                                                    $("#matchValue4").click(function(){
                                                        if($("#num3").html()==forth){
                                                            //BOX3 4. AND ORANGE
                                                            $("#box3").css("background-color","orange");
                                                            $("#body").hide(800);
                                                            $("#container").hide();
                                                            $("body").css("background-color","blue");
                                                            $("#message5").show(1000);
                                                            $("#message5").html("You Finish the Memorization Game");
                                                            $("#message6").show(1000);
                                                         $("#message6").html("<a href='Game.html' style='text-decoration: none; color: white;'>Back to Game</a>");
                                                        }
                                                    });
                                                });
                                            }
                                        });
                                    });
                                }
                                 //23.. 4 haneli olarak bakılıyor
                                else if($("#num3").html()==second){
                                    //BOX3 2. AND GREEN
                                    $("#box3").css("background-color","green");
                                    
                                    $(".box").click(function(){
                                        $("#message2").hide();
                                        $("#message3").show(1000);
                                        $("#matchValue3").click(function(){
                                            //2314 Haneli olarak bakılıyor
                                             if($("#num1").html()==third){
                                                 //BOX1 3. AND PİNK
                                                 $("#box1").css("background-color","pink");
                                                 
                                                 $(".box").click(function(){
                                                    $("#message3").hide();
                                                    $("#message4").show(1000);
                                                    $("#matchValue4").click(function(){
                                                        if($("#num4").html()==forth){
                                                            //BOX4 4. AND ORANGE
                                                            $("#box4").css("background-color","orange");
                                                            $("#body").hide(800);
                                                            $("#container").hide();
                                                            $("body").css("background-color","blue");
                                                            $("#message5").show(1000);
                                                            $("#message5").html("You Finish the Memorization Game");
                                                            $("#message6").show(1000);
                                                         $("#message6").html("<a href='Game.html' style='text-decoration: none; color: white;'>Back to Game</a>");
                                                        }
                                                    });
                                                 });
                                             }
                                             //2341 Haneli olarak bakılıyor
                                             else
                                             {
                                                //BOX4 3. AND PİNK
                                                $("#box4").css("background-color","pink");
                                                
                                                $(".box").click(function(){
                                                    $("#message3").hide();
                                                    $("#message4").show(1000);
                                                    $("#matchValue4").click(function(){
                                                        if($("#num1").html()==forth){
                                                            //BOX1 4. AND ORANGE
                                                            $("#box1").css("background-color","orange");
                                                            $("#body").hide(800);
                                                            $("#container").hide();
                                                            $("body").css("background-color","blue");
                                                            $("#message5").show(1000);
                                                            $("#message5").html("You Finish the Memorization Game");
                                                            $("#message6").show(1000);
                                                         $("#message6").html("<a href='Game.html' style='text-decoration: none; color: white;'>Back to Game</a>");
                                                        }
                                                    });
                                                });
                                             }
                                        });
                                    });
                                }
                                //24.. 4 haneli olarak bakılıyor
                                else{
                                    //BOX4 2. AND GREEN
                                    $("#box4").css("background-color","green");
                                   
                                    $(".box").click(function(){
                                        $("#message2").hide();
                                        $("#message3").show(1000);
                                        $("#matchValue3").click(function(){
                                            //2413  4 haneli olarak bakılıyor
                                            if($("#num1").html()==third){
                                                 //BOX1 3. AND pink
                                                $("#box1").css("background-color","pink");
                                                
                                                $(".box").click(function(){
                                                    $("#message3").hide();
                                                    $("#message4").show(1000);
                                                    $("#matchValue4").click(function(){
                                                        if($("#num3").html()==forth){
                                                             //BOX3 4. AND orange
                                                            $("#box3").css("background-color","orange");
                                                            $("#body").hide(800);
                                                            $("#container").hide();
                                                            $("body").css("background-color","blue");
                                                            $("#message5").show(1000);
                                                            $("#message5").html("You Finish the Memorization Game");
                                                            $("#message6").show(1000);
                                                         $("#message6").html("<a href='Game.html' style='text-decoration: none; color: white;'>Back to Game</a>");
                                                        }
                                                    });
                                                });

                                            }
                                            else{
                                             //2431  4 haneli olarak bakılıyor
                                             //BOX3 3. AND PİNK
                                             $("#box3").css("background-color","pink");
                                            
                                             $(".box").click(function(){
                                                $("#message3").hide();
                                                $("#message4").show(1000);
                                                $("#matchValue4").click(function(){
                                                    if($("#num1").html()==forth){
                                                        //BOX1 4. AND orange
                                                        $("#box1").css("background-color","orange");
                                                        $("#body").hide(800);
                                                        $("#container").hide();
                                                        $("body").css("background-color","blue");
                                                        $("#message5").show(1000);
                                                        $("#message5").html("You Finish the Memorization Game");
                                                        $("#message6").show(1000);
                                                         $("#message6").html("<a href='Game.html' style='text-decoration: none; color: white;'>Back to Game</a>");
                                                    }
                                                });
                                             });
                                            }
                                        });
                                    });
                                }
                            });
                        });
                   }
                   //3...    4 haneli olarak bakılıyor
                   else if($("#num3").html()==first){
                       //BOX3 1. AND YELLOW
                       $("#box3").css("background-color","yellow");
                       $(".box").click(function(){
                        $("#message1").hide();
                        $("#message2").show(1000);
                        $("#matchValue2").click(function(){
                            //31.. 4 haneli olarak bakılıyor
                            if($("#num1").html()==second){
                                //BOX1 2. AND GREEN
                                $("#box1").css("background-color","green");
                               
                                $(".box").click(function(){
                                    $("#message2").hide();
                                    $("#message3").show(1000);
                                    $("#matchValue3").click(function(){
                                        //3124  4 haneli olarak bakılıyor
                                        if($("#num2").html()==third){
                                            //BOX3 3. AND PİNK
                                            $("#box2").css("background-color","pink");
                                            
                                            $(".box").click(function(){
                                                $("#message3").hide();
                                                $("#message4").show(1000);
                                                $("#matchValue4").click(function(){
                                                    if($("#num4").html()==forth){
                                                        //BOX4 4. AND orange
                                                        $("#box4").css("background-color","orange");
                                                        $("#body").hide(800);
                                                        $("#container").hide();
                                                        $("body").css("background-color","blue");
                                                        $("#message5").show(1000);
                                                        $("#message5").html("You Finish the Memorization Game");
                                                        $("#message6").show(1000);
                                                         $("#message6").html("<a href='Game.html' style='text-decoration: none; color: white;'>Back to Game</a>");
                                                    }
                                                });
                                            });
                                        }
                                        else{
                                             //3142  4 haneli olarak bakılıyor

                                            //BOX4 3. AND PİNK
                                            $("#box4").css("background-color","pink");
                                          
                                            $(".box").click(function(){
                                                $("#message3").hide();
                                                $("#message4").show(1000);
                                                $("#matchValue4").click(function(){
                                                    if($("#num2").html()==forth){
                                                        //BOX3 4. AND ORANGE
                                                        $("#box2").css("background-color","orange");
                                                        $("#body").hide(800);
                                                        $("#container").hide();
                                                        $("body").css("background-color","blue");
                                                        $("#message5").show(1000);
                                                        $("#message5").html("You Finish the Memorization Game");
                                                        $("#message6").show(1000);
                                                         $("#message6").html("<a href='Game.html' style='text-decoration: none; color: white;'>Back to Game</a>");
                                                    }
                                                });
                                            });
                                        }
                                    });
                                });
                            }
                             //32.. 4 haneli olarak bakılıyor
                            else if($("#num2").html()==second){
                                //BOX3 2. AND GREEN
                                $("#box2").css("background-color","green");
                                
                                $(".box").click(function(){
                                    $("#message2").hide();
                                    $("#message3").show(1000);
                                    $("#matchValue3").click(function(){
                                        //3214 Haneli olarak bakılıyor
                                         if($("#num1").html()==third){
                                             //BOX1 3. AND PİNK
                                             $("#box1").css("background-color","pink");
                                             
                                             $(".box").click(function(){
                                                $("#message3").hide();
                                                $("#message4").show(1000);
                                                $("#matchValue4").click(function(){
                                                    if($("#num4").html()==forth){
                                                        //BOX4 4. AND ORANGE
                                                        $("#box4").css("background-color","orange");
                                                        $("#body").hide(800);
                                                        $("#container").hide();
                                                        $("body").css("background-color","blue");
                                                        $("#message5").show(1000);
                                                        $("#message5").html("You Finish the Memorization Game");
                                                        $("#message6").show(1000);
                                                         $("#message6").html("<a href='Game.html' style='text-decoration: none; color: white;'>Back to Game</a>");
                                                    }
                                                });
                                             });
                                         }
                                         //3241 Haneli olarak bakılıyor
                                         else
                                         {
                                            //BOX4 3. AND PİNK
                                            $("#box4").css("background-color","pink");
                                            
                                            $(".box").click(function(){
                                                $("#message3").hide();
                                                $("#message4").show(1000);
                                                $("#matchValue4").click(function(){
                                                    if($("#num1").html()==forth){
                                                        //BOX1 4. AND ORANGE
                                                        $("#box1").css("background-color","orange");
                                                        $("#body").hide(800);
                                                        $("#container").hide();
                                                        $("body").css("background-color","blue");
                                                        $("#message5").show(1000);
                                                        $("#message5").html("You Finish the Memorization Game");
                                                        $("#message6").show(1000);
                                                         $("#message6").html("<a href='Game.html' style='text-decoration: none; color: white;'>Back to Game</a>");
                                                    }
                                                });
                                            });
                                         }
                                    });
                                });
                            }
                            //34.. 4 haneli olarak bakılıyor
                            else{
                                //BOX4 2. AND GREEN
                                $("#box4").css("background-color","green");
                               
                                $(".box").click(function(){
                                    $("#message2").hide();
                                    $("#message3").show(1000);
                                    $("#matchValue3").click(function(){
                                        //3412  4 haneli olarak bakılıyor
                                        if($("#num1").html()==third){
                                             //BOX1 3. AND pink
                                            $("#box1").css("background-color","pink");
                                            
                                            $(".box").click(function(){
                                                $("#message3").hide();
                                                $("#message4").show(1000);
                                                $("#matchValue4").click(function(){
                                                    if($("#num2").html()==forth){
                                                         //BOX3 4. AND orange
                                                        $("#box2").css("background-color","orange");
                                                        $("#body").hide(800);
                                                        $("#container").hide();
                                                        $("body").css("background-color","blue");
                                                        $("#message5").show(1000);
                                                        $("#message5").html("You Finish the Memorization Game");
                                                        $("#message6").show(1000);
                                                         $("#message6").html("<a href='Game.html' style='text-decoration: none; color: white;'>Back to Game</a>");
                                                    }
                                                });
                                            });

                                        }
                                        else{
                                         //3421  4 haneli olarak bakılıyor
                                         //BOX2 3. AND PİNK
                                         $("#box2").css("background-color","pink");
                                        
                                         $(".box").click(function(){
                                            $("#message3").hide();
                                            $("#message4").show(1000);
                                            $("#matchValue4").click(function(){
                                                if($("#num1").html()==forth){
                                                    //BOX1 4. AND orange
                                                    $("#box1").css("background-color","orange");
                                                    $("#body").hide(800);
                                                    $("#container").hide();
                                                    $("body").css("background-color","blue");
                                                    $("#message5").show(1000);
                                                    $("#message5").html("You Finish the Memorization Game");
                                                    $("#message6").show(1000);
                                                         $("#message6").html("<a href='Game.html' style='text-decoration: none; color: white;'>Back to Game</a>");
                                                }
                                            });
                                         });
                                        }
                                    });
                                });
                            }
                        });
                    });

                   }
                    //4...    4 haneli olarak bakılıyor
                   else{
                       //BOX4 1. AND YELLOW
                       $("#box4").css("background-color","yellow");
                       $(".box").click(function(){
                        $("#message1").hide();
                        $("#message2").show(1000);
                        $("#matchValue2").click(function(){
                            //41.. 4 haneli olarak bakılıyor
                            if($("#num1").html()==second){
                                //BOX1 2. AND GREEN
                                $("#box1").css("background-color","green");
                               
                                $(".box").click(function(){
                                    $("#message2").hide();
                                    $("#message3").show(1000);
                                    $("#matchValue3").click(function(){
                                        //4123  4 haneli olarak bakılıyor
                                        if($("#num2").html()==third){
                                            //BOX3 3. AND PİNK
                                            $("#box2").css("background-color","pink");
                                            
                                            $(".box").click(function(){
                                                $("#message3").hide();
                                                $("#message4").show(1000);
                                                $("#matchValue4").click(function(){
                                                    if($("#num3").html()==forth){
                                                        //BOX4 4. AND orange
                                                        $("#box3").css("background-color","orange");
                                                        $("#body").hide(800);
                                                        $("#container").hide();
                                                        $("body").css("background-color","blue");
                                                        $("#message5").show(1000);
                                                        $("#message5").html("You Finish the Memorization Game");
                                                        $("#message6").show(1000);
                                                         $("#message6").html("<a href='Game.html' style='text-decoration: none; color: white;'>Back to Game</a>");
                                                    }
                                                });
                                            });
                                        }
                                        else{
                                             //4132  4 haneli olarak bakılıyor

                                            //BOX4 3. AND PİNK
                                            $("#box3").css("background-color","pink");
                                          
                                            $(".box").click(function(){
                                                $("#message3").hide();
                                                $("#message4").show(1000);
                                                $("#matchValue4").click(function(){
                                                    if($("#num2").html()==forth){
                                                        //BOX3 4. AND ORANGE
                                                        $("#box2").css("background-color","orange");
                                                        $("#body").hide(800);
                                                        $("#container").hide();
                                                        $("body").css("background-color","blue");
                                                        $("#message5").show(1000);
                                                        $("#message5").html("You Finish the Memorization Game");
                                                        $("#message6").show(1000);
                                                         $("#message6").html("<a href='Game.html' style='text-decoration: none; color: white;'>Back to Game</a>");
                                                    }
                                                });
                                            });
                                        }
                                    });
                                });
                            }
                             //42.. 4 haneli olarak bakılıyor
                            else if($("#num2").html()==second){
                                //BOX3 2. AND GREEN
                                $("#box2").css("background-color","green");
                                
                                $(".box").click(function(){
                                    $("#message2").hide();
                                    $("#message3").show(1000);
                                    $("#matchValue3").click(function(){
                                        //4213 Haneli olarak bakılıyor
                                         if($("#num1").html()==third){
                                             //BOX1 3. AND PİNK
                                             $("#box1").css("background-color","pink");
                                             
                                             $(".box").click(function(){
                                                $("#message3").hide();
                                                $("#message4").show(1000);
                                                $("#matchValue4").click(function(){
                                                    if($("#num3").html()==forth){
                                                        //BOX4 4. AND ORANGE
                                                        $("#box3").css("background-color","orange");
                                                        $("#body").hide(800);
                                                        $("#container").hide();
                                                        $("body").css("background-color","blue");
                                                        $("#message5").show(1000);
                                                        $("#message5").html("You Finish the Memorization Game");
                                                        $("#message6").show(1000);
                                                         $("#message6").html("<a href='Game.html' style='text-decoration: none; color: white;'>Back to Game</a>");
                                                    }
                                                });
                                             });
                                         }
                                         //4231 Haneli olarak bakılıyor
                                         else
                                         {
                                            //BOX4 3. AND PİNK
                                            $("#box3").css("background-color","pink");
                                            
                                            $(".box").click(function(){
                                                $("#message3").hide();
                                                $("#message4").show(1000);
                                                $("#matchValue4").click(function(){
                                                    if($("#num1").html()==forth){
                                                        //BOX1 4. AND ORANGE
                                                        $("#box1").css("background-color","orange");
                                                        $("#body").hide(800);
                                                        $("#container").hide();
                                                        $("body").css("background-color","blue");
                                                        $("#message5").show(1000);
                                                        $("#message5").html("You Finish the Memorization Game");
                                                        $("#message6").show(1000);
                                                         $("#message6").html("<a href='Game.html' style='text-decoration: none; color: white;'>Back to Game</a>");
                                                    }
                                                });
                                            });
                                         }
                                    });
                                });
                            }
                            //43.. 4 haneli olarak bakılıyor
                            else{
                                //BOX4 2. AND GREEN
                                $("#box3").css("background-color","green");
                               
                                $(".box").click(function(){
                                    $("#message2").hide();
                                    $("#message3").show(1000);
                                    $("#matchValue3").click(function(){
                                        //4312  4 haneli olarak bakılıyor
                                        if($("#num1").html()==third){
                                             //BOX1 3. AND pink
                                            $("#box1").css("background-color","pink");
                                            
                                            $(".box").click(function(){
                                                $("#message3").hide();
                                                $("#message4").show(1000);
                                                $("#matchValue4").click(function(){
                                                    if($("#num2").html()==forth){
                                                         //BOX3 4. AND orange
                                                        $("#box2").css("background-color","orange");
                                                        $("#body").hide(800);
                                                        $("#container").hide();
                                                        $("body").css("background-color","blue");
                                                        $("#message5").show(1000);
                                                        $("#message5").html("You Finish the Memorization Game");
                                                        $("#message6").show(1000);
                                                         $("#message6").html("<a href='Game.html' style='text-decoration: none; color: white;'>Back to Game</a>");
                                                    }
                                                });
                                            });

                                        }
                                        else{
                                         //4321  4 haneli olarak bakılıyor
                                         //BOX2 3. AND PİNK
                                         $("#box2").css("background-color","pink");
                                        
                                         $(".box").click(function(){
                                            $("#message3").hide();
                                            $("#message4").show(1000);
                                            $("#matchValue4").click(function(){
                                                if($("#num1").html()==forth){
                                                    //BOX1 4. AND orange
                                                    $("#box1").css("background-color","orange");
                                                    $("#body").hide(800);
                                                    $("#container").hide();
                                                    $("body").css("background-color","blue");
                                                    $("#message5").show(1000);
                                                    $("#message5").html("You Finish the Memorization Game");
                                                    $("#message6").show(1000);
                                                         $("#message6").html("<a href='Game.html' style='text-decoration: none; color: white;'>Back to Game</a>");
                                                }
                                            });
                                         });
                                        }
                                    });
                                });
                            }
                        });
                    });
                       
                   }
                });


                                    
            });
            
         });

    });
});
   

