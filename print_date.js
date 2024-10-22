setInterval(function(){
      var date = new Date();
      var format = "YYYY-MMM-DD DDD";
      dateConvert(date,format)
    }, 1);
    
    function dateConvert(dateobj,format){
     var year = dateobj.getFullYear();
     var month= ("0" + (dateobj.getMonth()+1)).slice(-2);
     var date = ("0" + dateobj.getDate()).slice(-2);
     var hours = ("0" + dateobj.getHours()).slice(-2);
     var minutes = ("0" + dateobj.getMinutes()).slice(-2);
     var seconds = ("0" + dateobj.getSeconds()).slice(-2);
     var day = dateobj.getDay();
     var months = ["1","2","3","4","5","6","7","8","9","10","11","12"];
     var converted_date = "";
    
    switch(format){
     case "YYYY-MM-DD":
      converted_date = year + "-" + month + "-" + date;
      break;
    case "YYYY-MMM-DD DDD":
      converted_date = year + "-" + months[parseInt(month)-1] + "-" + date
      + " " + hours + ":" + minutes + ":" + seconds;
      break;
    }
    //return converted_date;
    // to show it I used innerHTMl in a <p> tag
    document.getElementById("date_container").innerHTML = converted_date;
    }