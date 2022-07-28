var express=require('express');
var app=express();
app.get("/",(req,res)=>
{
    res.send(
        "<h1>Smart Agree</h1>"
        +"<h2>Login</h2>"
        +"<form>"
        +"<input type='text',placeholder='Enter Username'>"
        +"<br/>"
        +"<input type='password',placeholder='Enter Password'>"
        +"<br/>"
        +"<button>Submit</button>"
        +"</form>"
    );
});
var server=app.listen(9000);
console.log("Smart agree is running on port 9000");



