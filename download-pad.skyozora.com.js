
var fs = require('fs');
var http = require("http");

function downloadPage(monArr)
{
  let mon = monArr.shift();
  let filename = "./pad.skyozora.com/" + mon.id + ".html";
  fs.access(filename,function(err){
    if(!err){
        //console.log("["+mon.id+".html]文件已经存在");
        downloadPage(monArr); //下载下一个
    }else if (/^\?+/.test(mon.name["ja"]))
    {
      console.log("[" + mon.id+"] 名字是问号");
      downloadPage(monArr); //下载下一个
    }else
    {
      console.log("开始下载文件[" + mon.id + ".html]");
      var options = { 
        hostname: 'pad.skyozora.com', 
        port: 80, 
        path: '/pets/' + mon.id, 
        method: 'get' 
      };
      var req = http.request(options, function(res) { 
        /*
        console.log('STATUS: ' + res.statusCode); 
        console.log('HEADERS: ' + JSON.stringify(res.headers)); 
        res.setEncoding('utf8');
        var contentLength = parseInt(res.headers['content-length']);
        var downLength = 0;
        */
        let out = fs.createWriteStream(filename);
        res.on('data', function (chunk) { 
          /*
          downLength += chunk.length;
          var progress =  Math.floor(downLength*100 / contentLength);
          var str = "下载："+ progress +"%";
          console.log(str);
          */
          out.write(chunk, function () {
          });
        });
        res.on('end', function() {
          console.log("文件[" + mon.id + ".html]下载完毕，剩余["+monArr.length+"]个");
          /*
          if (isNaN(contentLength)) {
            console.log("没有 content length");
          }else if(downLength < contentLength) {
            console.log("下载错误，请重试[" + mon.id + ".html]");
          }
          */
          out.end();
          downloadPage(monArr); //下载下一个
        });
        req.on('error', function(e) { 
          console.log('请求出现错误: ' + e.message); 
        }); 
      });
      req.on('error', function(e){
          console.log("http请求错误 [" + mon.id + ".html] 请重试");
      });
      req.end();
    }
  })

}

fs.readFile('../mon.json',function(err,data){
	if(err){
		return console.error(err);
	}
  var mons = JSON.parse(data.toString());
  downloadPage(mons);
})