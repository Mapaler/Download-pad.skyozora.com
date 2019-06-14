var fs = require('fs');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

fs.readFile('pad.skyozora.com/1.html',function(err,data){
	if(err){
		return console.error(err);
	}
	var htmlText = data.toString();//将二进制的数据转换为字符串

	const dom = new JSDOM(data);

	var a = dom.window.document.querySelector("#wrapper>table:nth-of-type(3) tr:nth-of-type(2)>td>table:nth-of-type(2) td table tr>td:nth-of-type(2)>h2");
	console.log(a.textContent);

})