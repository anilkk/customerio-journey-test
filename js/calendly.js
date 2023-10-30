function isCalendlyScheduledEvent(e) {
    return e.data.event &&
           e.data.event.indexOf('calendly.event_scheduled') === 0;
}

window.addEventListener(
    'message',
    function(e) {
        if (isCalendlyScheduledEvent(e)) {
            console.log('Calendly data', e.data);
            var inviteeUri = e.data.payload.invitee.uri;
            var eventId = inviteeUri.split('/')[4];
            var inviteeId = inviteeUri.split('/')[6];

            // write a code to ftech data from backend api
            // and update the event with the data
            $.ajax({
                type: 'GET',
                CORS: true ,
                contentType:'application/json',
                secure: true,
                headers: {
                    'Access-Control-Allow-Origin': '*'
                },
                url: `https://manage-calendly-event.vercel.app/api/getinviteeinfo?eventId=${eventId}&inviteeId=${inviteeId}`,
                success: function(data) {
                    console.log(data);
                    var userEmail = data.email;
                    if (userEmail) {
                            // update the event with the data    
                            analytics.identify(userEmail, {
                                email: userEmail
                            });
                            console.log("addUserEmail");
                        }
                    }
            });
        }
    }
);