$(document).ready(function() {
    $("#addUserEmail").click(function() {
        // generate a 4 letter random string
        var randomString = Math.random().toString(36).substring(2, 6);
        var testEmail = "test." +randomString + "@example.com";
        analytics.identify(testEmail, {
            email: testEmail
          });
        console.log("addUserEmail");
      });

    $("#trackMyAction").click(function() {
        analytics.track('track_my_action_event', {
            title: 'How to send a track event',
            course: 'Intro to Analytics',
          });
        console.log("trackMyAction");
    });
  });