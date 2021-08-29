
//domain/.netlify/functions/hello

exports.handler = async function(event,contex) {
return {
    statusCode: 200,
    body: 'hello world',

}
}