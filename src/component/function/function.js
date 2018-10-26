import $ from "jquery";

export function request(data,cb){
   var setting = {
    "async": true,
    "crossDomain": true,
    "url": data.url,
    "method": data.requestType,
    "headers": {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    "data":data.payload,
    "dataType": "json",
    "success":function(result){
        return cb(null,result);
    },
    "error":function(result){
        return cb(result,null);
    }
   }
   $.ajax(setting);
}