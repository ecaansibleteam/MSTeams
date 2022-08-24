const crypto = require('crypto');
// Token generated by Teams 
const sharedSecret = "z0gEIo9wHSVQU3SER+pMlNet6uQVZSEQfJBMZ4o1T/0="; // e.g. "+ZaRRMC8+mpnfGaGsBOmkIFt98bttL5YQRq3p2tXgcE="
const bufSecret = Buffer.from(sharedSecret, "base64");
var http = require('http');
var PORT = process.env.port || process.env.PORT || 8090;
http.createServer(function (request, response) {
    var payload = '';
    // Process the request
    request.on('data', function (data) {
        payload += data;
    });
    // Respond to the request
    request.on('end', function () {
        try {
            // Retrieve authorization HMAC information
           // var auth = this.headers['authorization'];
            // Calculate HMAC on the message we've received using the shared secret         
           // var msgBuf = Buffer.from(payload, 'utf8');
           // var msgHash = "HMAC " + crypto.createHmac('sha256', bufSecret).update(msgBuf).digest("base64");
            response.writeHead(200);
           // if (msgHash === auth) {
               // var responseMsg = '{ "type": "message", "text": "Hello from krishna @ ' + new Date().toLocaleString() +  ' " }'; 
		var responseMsg = '{ "type": "message", "text": "Oracle DB is stopping" }'; 
                var request = require('request');
                var url = 'https://awx-web-svc-awx.eca-5d3b077647f2e82a12132e1e840f7b71-0000.eu-de.containers.appdomain.cloud/api/v2/job_templates/44/launch/'
                var user = 'admin';
                var pass = 'password';
                // Save these for future requests
                var userId;
             	var options = {
						headers: {
							  'Authorization': 'Basic YWRtaW46cGFzc3dvcmQ=',
							  'Content-Type' : 'application/json'
						},
						uri:  url,
						method: 'POST',
						json: {'key':'value'}
			 };
			
				  
			request(options, function (err, httpResponse, body) {
				if (err){
					 console.log("Hubo un error", JSON.stringify(err));
					 
				}
				else
				//console.log("Correcto" + JSON.stringify(httpResponse));
				  console.log("Status of Job ID" , httpResponse.body.job , "is" , httpResponse.body.status);
				 //console.log(httpResponse.body.status);
			 
			 })
			 
			 
			 
        //} 
          //  else {
            //    var responseMsg = '{ "type": "message", "text": "Error: message sender cannot be authenticated." }';
           // } 
            response.write(responseMsg);
            response.end();
        } catch (err) {
            response.writeHead(400);
            return response.end("Error: " + err + "\n" + err.stack);
        }
    });
}).listen(PORT, error => {
    if (error) {
        console.log(error);
        return process.exit(1);
    } else {
        console.log('Listening on port: %s', PORT);
    }
});