window.onload=function() {
    var text=document.querySelector(".top-left");
    var stil=window.getComputedStyle(text);
    document.getElementById("green_market").style.backgroundColor=stil.getPropertyValue("color");
    var btn = document.createElement("BUTTON");
    btn.innerHTML = "Start your scent journey";
    btn.style.fontSize="large";
    btn.style.fontFamily="Tommy";
    btn.style.color="black";
    btn.style.backgroundColor="rgb(224, 204, 188)";
    btn.style.border="medium solid black";
    document.querySelector(".button-header").appendChild(btn);
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];
    document.getElementById("subscribe").style.textAlign="center";

    var t;
    btn.onclick=function(){
        modal.style.display = "block";
        t=setTimeout(function(){
            var month=document.createElement("div");
            month.innerHTML="Month: ";
            document.getElementById("monthyear").appendChild(month);
            var text=document.createElement("div");
            var an=new Date();
            var an1=an.getFullYear();
            var luna=an.getMonth()+1;
            text.innerHTML=luna;
            document.getElementById("monthyear").style.textAlign="center";
            document.getElementById("monthyear").appendChild(text);
            var text2=document.createElement("div");
            text2.innerHTML="/";
            document.getElementById("monthyear").appendChild(text2);
            var text1=document.createElement("div");
            text1.innerHTML=an1;
            document.getElementById("monthyear").appendChild(text1);
        },2000);
    }
    span.onclick = function() {
        modal.style.display = "none";
        document.getElementById("monthyear").innerHTML="";
    }
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
            document.getElementById("monthyear").innerHTML="";
        }
    }

    function check_phone(phno) {
        var regex = /^\d{10}$/;
        if (regex.test(phno.value)) {
            return true;
        } else {
            alert("This is not a valid phone number!")
            return false;
        }
    }

    var form=document.getElementById("myform");
    //form.addEventListener('submit',e=>{
    form.onsubmit=function(){
        event.preventDefault();
        clearTimeout(t);
        var arr=[];
        var inputs=document.querySelectorAll("input");
        document.getElementById("monthyear").innerHTML="";
        for (i=1;i<3;++i){
            inputs[i].disabled=true;
            arr.push(inputs[i].value);
        }
        if (inputs[3].checked)
            arr.push("daily");
        else
            arr.push("weekly");
        inputs[3].disabled=true;
        inputs[4].disabled=true;
        var submitbut=document.getElementById("submitbuton");
        inputs[0].disabled=true;
        submitbut.disabled=true;
        if(check_phone(inputs[2])===true) {
            submitere();
        } else {
            location.reload();
        }
    }

    function submitere() {
        var client = document.getElementById("client").value;
        var email = document.getElementById("email").value;
        var tel = document.getElementById("tel").value;
        const data = {
            client: client,
            email: email,
            tel: tel
        }
        fetch('/p1', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.text())
            .then(data => {
                if (data.message === "Succes node") {
                    console.log(data);
                }
            });
    }

    var quotes=["“Look at how a single candle can both defy and define the darkness.”","“Every candle deserves great respect because they light us by burning their bodies and destroying themselves!”","“The candles were adored and worshipped like idols, for, after all, they invoked the gods of light.”","“A candle in your room is brighter than ten thousand stars in the sky.”"];
    var quote=quotes[Math.floor(Math.random()*quotes.length)].bold();
    var textquote=document.createElement("div");
    textquote.innerHTML=quote;
    textquote.style.fontSize="xx-large";
    var number=Math.floor(Math.random()*2);
    if (number===0){
        textquote.style.color="black";
        textquote.style.border="thick solid black";
        textquote.style.backgroundColor="rgb(224, 204, 188)";
    }
    else if (number===1){
        textquote.style.color="rgb(224, 204, 188)";
        textquote.style.border="thick solid #e0ccbc"
        textquote.style.backgroundColor="white";
    }
    textquote.classList.add("quote");
    document.getElementById("citat").appendChild(textquote);
}