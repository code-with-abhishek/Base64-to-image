// Defining the reuired module
const fs = require("fs");
// Defining a base64 value of a image
const base64 = "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==";
// Defining the required module and making readable
var ReadableData = require("stream").Readable
// Creating buffer of image file
var imageBufferData = Buffer.from(base64, "base64")
// Defining abstract interface 
var streamObj = new ReadableData()
streamObj.push(imageBufferData)
streamObj.push(null)
// By Default it will save the image on your root directory.
streamObj.pipe(fs.createWriteStream("image_name.jpg"));
// If you want to save the image in your specified directory then you can use it like
streamObj.pipe(fs.createWriteStream("filePath/for/Image", "image_name.jpg"));
