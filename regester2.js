function book(){
    var name=document.getElementById("FN").value;
    var mail=document.getElementById("email").value;
    var phone=document.getElementById("PN").value;

    localStorage.setItem("fullname",name);
    localStorage.setItem("Email",mail);
    localStorage.setItem("phonenum",phone);



    return false;
}


function info(){

    var fname=document.getElementById("std_name").value;
    var birth=document.getElementById("std_dob").value;
    var email=document.getElementById("mail").value;
    
    var phoneno=document.getElementById("phone").value;
    var add=document.getElementById("address").value;
    var loc=document.getElementById("city").value;
    var nation=document.getElementById("country").value;
    // var lang=document.getElementById("std_lang").value;
    // var olang=document.getElementById("std_otherlang").value;
    // var fname=document.getElementById("std_name").value;
    // var fname=document.getElementById("std_name").value;
    // var fname=document.getElementById("std_name").value;
    // var iname=document.getElementById("clgins").value;
    // var clevel=document.getElementById("clglevel").value;
    // var sname=document.getElementById("skulins").value;
    // var slevel=document.getElementById("skulevel").value;
    // var fname=document.getElementById("std_name").value;
    // var fname=document.getElementById("std_name").value;



    localStorage.setItem("FULLNAME",fname);
    localStorage.setItem("DOB",birth);
    localStorage.setItem("EMAIL",email);
    localStorage.setItem("phnno",phoneno);
    // localStorage.setItem("phnno",phoneno);
//    localStorage.setItem("gender",ele);
    localStorage.setItem("address",add);
    localStorage.setItem("location",loc);
    localStorage.setItem("country",nation);
    // localStorage.setItem("language",lang);
    // localStorage.setItem("olanguage",olang);
    // localStorage.setItem("ins_name",iname);
    // localStorage.setItem("clg_level",clevel);
    // localStorage.setItem("scl_name",sname);
    // localStorage.setItem("scl_level",slevel);

    return false;

}
function winfo(){
    var lang=document.getElementById("std_lang").value;
var olang=document.getElementById("std_otherlang").value;
localStorage.setItem("language",lang);
localStorage.setItem("olanguage",olang);
return false;

}
function xinfo(){
    var iname=document.getElementById("clgins").value;
    var clevel=document.getElementById("clglevel").value;
    var sname=document.getElementById("skulins").value;
    var slevel=document.getElementById("skulevel").value;


    localStorage.setItem("ins_name",iname);
    localStorage.setItem("clg_level",clevel);
    localStorage.setItem("scl_name",sname);
    localStorage.setItem("scl_level",slevel);
    return false;
}
