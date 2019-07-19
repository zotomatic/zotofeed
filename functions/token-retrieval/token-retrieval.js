/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
exports.tokenRetriever = (req, res) => {
  try{
    let code = req.query.code ;
  
  	var request = require('request');

    var form = {
      "client_id": "e6c15fe94eeb4f24a01c15f678c8f7ef",
      "client_secret":"2c7817d27df74ee79cdef503b6acdccf",
      "grant_type":"authorization_code",
      "redirect_uri":"https://us-central1-zotofeed.cloudfunctions.net/token-retriever",
      "code": code
    }
    
    var url = 'https://api.instagram.com/oauth/access_token'; 
 
    request.post({url: url, form: form}, function (error, response, body) {
    	//store data in the usermanagement in dynamo db
		res.status(200).send(body);
    });
  
  } catch (e) {
    console.log('error:', e);
    res.status(500).send(e);
  }

};

