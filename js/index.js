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
      59: 25,
      58: 25,
      57: 24,
      56: 24,
      55: 24,
      54: 24,
      53: 23,
      52: 23,
      51: 23,
      50: 23,
      49: 22,
      48: 22,
      47: 22,
      46: 22,
      45: 21,
      44: 21,
      43: 21,
      42: 21,
      41: 20,
      40: 20,
      39: 20,
      38: 20,
      37: 19,
      36: 19,
      35: 19,
      34: 18,
      33: 18,
      32: 18,
      31: 17,
      30: 17,
      29: 17,
      28: 16,
      27: 16,
      26: 16,
      25: 15,
      24: 15,
      23: 14,
      22: 13,
      21: 12,
      20: 11,
      19: 10,
      18: 9,
      17: 8,
      16: 6,
      15: 4,
      14: 2,
      13: 1,
      12: 0,
      11: 0,
      10: 0,
      9: 0,
      8: 0,
      7: 0,
      6: 0,
      5: 0,
      4: 0,
      3: 0,
      2: 0,
      1: 0
    };
    var sitdict = {
      60: 25,
    59: 25,
    58: 25,
    57: 24,
    56: 24,
    55: 24,
    54: 24,
    53: 23,
    52: 23,
    51: 23,
    50: 23,
    49: 22,
    48: 22,
    47: 22,
    46: 22,
    45: 21,
    44: 21,
    43: 21,
    42: 21,
    41: 20,
    40: 20,
    39: 20,
    38: 20,
    37: 19,
    36: 19,
    35: 18,
    34: 18,
    33: 17,
    32: 16,
    31: 15,
    30: 14,
    29: 14,
    28: 13,
    27: 13,
    26: 12,
    25: 11,
    24: 10,
    23: 9,
    22: 8,
    21: 7,
    20: 7,
    19: 6,
    18: 6,
    17: 5,
    16: 4,
    15: 3,
    14: 2,
    13: 1,
    12: 0,
    11: 0,
    10: 0,
    9: 0,
    8: 0,
    7: 0,
    6: 0,
    5: 0,
    4: 0,
    3: 0,
    2: 0,
    1: 0
    }
    var rundict= {
      510: 50,
      520: 50,
      530: 50,
      540: 49,
      550: 48,
      560: 47,
      570: 46,
      580: 45,
      590: 44,
      600: 43,
      610: 42,
      620: 41,
      630: 40,
      640: 39,
      650: 38,
      660: 38,
      670: 37,
      680: 37,
      690: 36,
      700: 36,
      710: 35,
      720: 35,
      730: 34,
      740: 33,
      750: 32,
      760: 31,
      770: 30,
      780: 29,
      790: 28,
      800: 27,
      810: 26,
      820: 25,
      830: 24,
      840: 23,
      850: 22,
      860: 21,
      870: 20,
      880: 19,
      890: 18,
      900: 16,
      910: 14,
      920: 12,
      930: 10,
      940: 8,
      950: 6,
      960: 4,
      970: 2,
      980: 1,
      990: 0,
      1000: 0,
      1010: 0,
      1020: 0,
      1030: 0,
      1040: 0,
      1050: 0,
      1060: 0,
      1070: 0,
      1080: 0,
      1090: 0,
      1100: 0
    }

    var run=Math.ceil((min*60+sec)/10)*10
    //run=run*10;
    var resultpush=pushdict[push]
    var resultsit=sitdict[sit]
    var resultrun=rundict[run]
    if (push<1) {resultpush=0}
    if (push>60) {resultpush=25}
    if (sit<1) {resultsit=0}
    if (sit>60) {resultsit=25}
    if (run<510) {resultrun=50}
    if (run>1100) {resultrun=0}
    
    var result=resultpush+resultsit+resultrun
          
      
    var award;
    if (resultpush==0 || resultsit==0 || resultrun==0) {
      award="fail";
    }
    else if (result<51) {award="fail"}
    else if (result<61) {award="pass"}
    else if (result<75) {award="incentive"}
    else if (result<85) {award="silver"}
    else {award="gold"}
    
  document.getElementById("result").innerHTML = "Points:"+result+"<br>Award:"+award;
    
    
    
  }
}