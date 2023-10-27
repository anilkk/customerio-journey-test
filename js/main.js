$(document).ready(function() {
    $("#addUserEmail").click(function() {
        analytics.identify({
            email: 'cool.person@example.com'
          });
        console.log("addUserEmail");
      });
  });