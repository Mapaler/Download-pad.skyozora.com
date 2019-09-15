const fs = require('fs');
const http = require("http");
const https = require('https');

function downloadPage(monArr)
{
  if (monArr.length<=0)
  {
    console.log("-----下载完毕-----");
    return;
  }
  let mon = monArr.shift();
  let filename = "./pad.skyozora.com/" + mon.id + ".html";
  fs.access(filename,function(err){
    if(!err){
        //console.log("["+mon.id+".html]文件已经存在");
        downloadPage(monArr); //下载下一个
    }else if (mon.name["ja"] == undefined || /^\?+/.test(mon.name["ja"]))
    {
      console.log("[" + mon.id+"] 名字是问号");
      downloadPage(monArr); //下载下一个
    }else
    {
      console.log("开始下载文件[" + mon.id + ".html]");
/*
      https.get('https://pad.skyozora.com/pets/' + mon.id, function(res) {
        console.log(res.statusCode)
      }).on('error', console.log)
*/
      
      var options = {
        hostname: '127.0.0.1',
        port: 8888,
        path: 'https://pad.skyozora.com/pets/' + mon.id,
        method: 'get'
      };
      var req = http.request(options, function(res) {
        let out = fs.createWriteStream(filename);
        res.on('data', function (chunk) { 
          out.write(chunk, function () {});
        });
        res.on('end', function() {
          console.log("文件[" + mon.id + ".html]下载完毕，剩余["+monArr.length+"]个");
          out.end();
          downloadPage(monArr); //下载下一个
        });
        req.on('error', function(e) { 
          console.log('请求出现错误: ',e); 
        }); 
      });
      req.on('error', function(e){
          console.log("http请求错误 [" + mon.id + ".html] 请重试",e);
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