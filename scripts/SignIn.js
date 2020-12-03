function Result(){
    //getting the user value
   var name= myForm.Name.value;
   var surname=myForm.Surname.value
   var BirthDate=myForm.Bdate.value;
   var email=myForm.mail.value;
   var password=myForm.password.value;
   var gender=myForm.gender.value;
   //putting in a string 
   var str="\nUser Information"+"\n"+"User-Name:"+name+"\n"+"User-Surname: "+surname+"\n"+"Birth Date: "+BirthDate+"\n"+"Email: "+email+"\n"+"Password: "+password+"\n\n\n";
   
   //generating a random color
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);

   //If the user clicks the Male Radio button the css color of the user information will change to the random color;
   if(myForm.gender.value=="M"){
    var disp=document.getElementById("display");
      disp.value=str;
      
      disp.style.color='rgb('+r+','+g+','+b+')';
      disp.style.fontSize='15px';
      disp.style.fontWeight='bold';
      disp.style.textAlign='center';
      disp.style.paddingTop='20px';
  }
  //else the print it normal
   else{
       myForm.display.value+=str;
   }
}