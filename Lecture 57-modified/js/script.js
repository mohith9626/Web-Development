// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", function () {
        requestUrl = "data/name.txt";
        request = new XMLHttpRequest();
        request.onreadystatechange = function() { 
          handleResponse(request); 
        };
        request.open("GET", requestUrl, true);
        request.send(null); // for POST only

        function handleResponse(request) {
          if ((request.readyState == 4) &&
            (request.status == 200)) {
              var name = request;

              document.querySelector("#content").innerHTML = "<h2>Hello " + name + "!</h2>";
          }
        };
      
      });
  }
);





