// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", function () {
        requestUrl = "data/name.json";
        request = new XMLHttpRequest();
        request.onreadystatechange = function() { 
          handleResponse(request); 
        };
        request.open("GET", requestUrl, true);
        request.send(null); // for POST only

        function handleResponse(request) {
          if ((request.readyState == 4) &&
            (request.status == 200)) {
              res = JSON.parse(request.responseText);
              var message = 
                res.firstName + " " + res.lastName
              if (res.likesChineseFood) {
                message += " likes Chinese food";
              }
              else {
                message += " doesn't like Chinese food";
              }
              message += " and uses ";
              message += res.numberOfDisplays + 1;
              message += " displays for coding.";

              document.querySelector("#content")
                .innerHTML = "<h2>" + message + "</h2>";
          }
        };
      
      });
  }
);





