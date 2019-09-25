const request = require("request");
const fs = require("fs")
const input = process.argv.slice(2)
let url = input[0]
let path = input[1]

 function requestAndWrite (url, path) {
  request(url,(error, response, body)=> {
    console.log("error", error)
    fs.writeFile(path, body,(error) => {
      if (error){
        throw error;
        
      } else {
        console.log("worked")
      }
  });
  })
 }
 requestAndWrite(url,path)