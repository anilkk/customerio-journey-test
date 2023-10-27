$(document).ready(function() {
    $("#addUserEmail").click(function() {
        analytics.identify({
            email: 'cool.person@example.com'
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