var result = [];
// Get all links from the page
var elements = document.querySelectorAll("video");

for (let element of elements) {	
   result.push({
		"url": element.src
   });
}
console.log(result)
// Call completion to finish
completion(result);
