var express =require("express");  //lib-----Node Module
var app=express();  // will create app object from express package

var onAboutUs=function(req, res){
    res.send("Chief Mentor :Ravi Tambade");
};
var onData=function(req, res){

    var products=[
        {"id":23, "title":"Gerbera", "description": "Wedding Flower"},
        {"id":24, "title":"Jasmine", "description": "Smelling Flower"},
        {"id":25, "title":"Lotus", "description": "Worship Flower"}
    ];
    res.send(products);
}

var onDefault=function(req, res){
    res.send("<h1>KHALBAL GROUP MANGALWEDHA</h1>"+
              "<hr/>"+
              "<h2>TEAM MEMBERS </h2>"+
              "<ol>"+
                    " <li>PAVAN GAIKAVAD:CHEIF DIRECTor</li>"+
                    " <li>VIJAY MANE:BUISNESS EXECUTIVE</li>"+
                    " <li>SAMADHAN KOSHTI:OWNER OF RELEANCE INDUUSTRIES</li>"+
                    " <li>AMOL GOVE:CIVIL ENGINEER</li>"+
             "</ol>"+"<a href="https://www.instagram.com/khalbal_tar_honarach/?hl=en">To visit our ibsta page click here</a>");
};
app.get("/",onDefault);  // Request handler functions are registered
app.get("/api/products", OnData);
app.get("/aboutus",onAboutUs);  // Request handler functions are registered
var server=app.listen(8081);
console.log("Server is running on port 8081");
