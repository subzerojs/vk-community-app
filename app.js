

  var data = {
        "title": "Я в",
       
        "head": [
        {
            "text": "url"
        }
        ],
        "body": [
            [
              {"text": "https://github.com/vnjson"}
            ],
            [
              {"text": "https://pinterest.com/bakakasin"}
            ],
            [
              {"text": "https://twitter.com/bakakasin"}
            ]
        ]

    }

var app = {

}   
  VK.init(function() {
    
document
  .getElementById('update-w')
  .addEventListener('click', function(){
   // VK.callMethod("appWidgets.update", 'table', 'return ' + JSON.stringify(data) + ';');
    //VK.Api.call("appWidgets.update", 'table', 'return ' + JSON.stringify(data) + ';');
  })
//  
    document
        .getElementById('add-w')
        .addEventListener('click', function(e){
          //e.preventDefault();
          VK.callMethod("showGroupSettingsBox", +65);
         
        VK.callMethod("showAppWidgetPreviewBox", 'table', 'return ' + JSON.stringify(data) + ';') 
          VK.addCallback('onSettingsChanged', function(){

            
          });
         
          VK.addCallback('onAppWidgetPreviewSuccess', function (){
            alert("Виджет успешно подключен");
          });  
        })
   
  }, function() {
     // API initialization failed
     alert('[ initialization faled ]')
}, '5.69');
