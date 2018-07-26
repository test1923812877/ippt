function calc() {
  var min = document.getElementById("min").value;
  var sec = document.getElementById("sec").value;
  var push = document.getElementById("push").value;
  var sit = document.getElementById("sit").value;
  //alert(min);
  //alert(sec);
  //alert(push);
  //alert(sit);
  if ((min=="" || sec=="" || push=="" || sit=="")) {
    alert("Please enter all fields");
  }
  
  else if (!(Number.isInteger(Number(min)) && Number.isInteger(Number(sec)) && Number.isInteger(Number(push)) && Number.isInteger(Number(sit)))) {
    alert("Please enter Integers only");
  }

  else {
    sec=Number(sec);
    min=Number(min);
    push=Number(push);
    sit=Number(sit);
    var pushdict = {
      60: 25,
      50: 15
    };
    var sitdict = {
      60: 25,
      50: 15
    }
    var rundict= {
      500: 50,
      100: 20
    }

    var run=Math.ceil((min*60+sec)/10)*10
    //run=run*10;

    result(
      pushdict[push]+
      sitdict[sit]+
      rundict[run]
          )
    
  }
}

function result(x) {
  var award="gold";
  document.getElementById("result").innerHTML = "Points:"+x+"<br>Award:"+award;

}