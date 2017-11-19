

  var data = {
        "title": "Проекты",

        "head": [
        {
            "text": "Наименование"
        }, 
        {
            "text": "Описание",
            "align": "center"
        },
        {
          "text": "Версия"
        }
        ],
        "body": [
            [
              {"text": "vnjson-js"},
              {"text": "vnjson-cli"},
              {"text": "vnjson-sdk"},
             /* {"text": "vnjson-tgtq"}*/
            ],
            [
              {"text": "Библиотека выполняющая ВН в браузере"},
              {"text": "Консольная программа, на базе nodejs"},
              {"text": "GUI обертка вокруг CLI версии"},
             /* {"text": "Создание текстовых квестов для телеграмма"}*/
            ],
            [
              {"text": "v0.9.0"},
              {"text": "v0.4.7"},
              {"text": "v0.7.0"},
             /* {"text": "v0.3.2"}*/
            ]
        ]
    };

var app = {
      getCommits: function(){
       var url = 'https://api.github.com/repos/vnjson/vnjson.js/commits';
       fetch(url)
          .then( r => r.json() )
          .then( data => {
            data.forEach(function(item){
             var tpl =  `<li class='commit'>
                            <span>${item.commit.message} </span>
                            <span>${item.commit.committer.name} </span>
                            <span>${item.commit.committer.date}</span>
                         </li>`
              
              document
                .getElementById('commitsTable')
                .innerHTML += tpl;
  
            })
            
          });
      }
}   
  VK.init(function() {
    app.getCommits();
 // VK.callMethod("appWidgets.update", 'table', 'return ' + JSON.stringify(data) + ';');
//  
    document
        .getElementById('add-w')
        .addEventListener('click', function(e){
          //e.preventDefault();
          VK.callMethod("showGroupSettingsBox", +65);
           VK.callMethod("showAppWidgetPreviewBox", 'table', 'return ' + JSON.stringify(data) + ';');
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