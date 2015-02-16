
var CreatePage = (function(){
  var _pages = {};
  function _create(name, options){
    if(typeof _pages[name] === 'undefined'){
      return;
    }
    _pages[name](options);
  }
  function attach(name, page){
    _pages[name] = page;
  }
  return {
    attach: attach,
    list: function(){
      _.each(_pages, function(str){ alert(str); });
    },
    _create: _create
  };
})();
