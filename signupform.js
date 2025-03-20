const submitbtn=document.getElementById("submitbtn");


submitbtn.addEventListener("click",(event)=>{
    event.preventDefault();

    var nameregexp=/^[a-zA-Z]+$/;
    var emailregexp=/^[a-zA-Z0-9]+@gmail\.com$/;
    var phnoregexp=/^\d{10}$/;

    const name=document.getElementById("name");
    const email=document.getElementById("email");
    const phno=document.getElementById("phno");

    var valid=true;

    if(nameregexp.test(name.value)==false)
    {
        var nameerr=document.querySelector(".name-error");
        nameerr.style.display="inline";
        var valid=false;
    }
    else
    {
        var nameerr=document.querySelector(".name-error");
        nameerr.style.display="none";
    }

    if(emailregexp.test(email.value)==false)
    {
        var emailerr=document.querySelector(".email-error");
        emailerr.style.display="inline";
        var valid=false;
    }
    else
    {
        var emailerr=document.querySelector(".email-error");
        emailerr.style.display="none";
    }

    if(phnoregexp.test(phno.value)==false)
    {
        var phnoerr=document.querySelector(".phno-error");
        phnoerr.style.display="inline";
        var valid=false;
    }
    else
    {
        var phnoerr=document.querySelector(".phno-error");
        phnoerr.style.display="none";
    }

    if (valid) {
        Swal.fire({
            title: "Success!",
            text: "Form submitted successfully",
            icon: "success",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "OK",
        });
    }
})
