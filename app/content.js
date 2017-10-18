$('body :not(script)').contents().filter(function() {
  return this.nodeType === 3; // text nodes
}).replaceWith(function() {
  return this.nodeValue.replace(this.nodeValue, mockingSpongebob(this.nodeValue));
});

function mockingSpongebob(text) {
  var res = "";
  var next = Math.floor(Math.random() * 3) + 1; // random number from [1,3]
  for(var i = 0; i < text.length; ++i) {
    if(i === next) {
	  res += text.charAt(i).toUpperCase();
	  next += Math.floor(Math.random() * 3) + 1; 
	} else {
	  res += text.charAt(i);
	}
  }
  return res;
}