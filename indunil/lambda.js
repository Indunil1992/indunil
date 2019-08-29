exports.handler = function(event, context, callback) {
    console.log("test API")
    callback(null, {"message": "Successfully executed"});
}