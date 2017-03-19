function($){
$.mathUtils={
  sum: function(arr){
    var total=0;
    $.each(arr,function(index,value){
     value=$.trim(value);
       value=parseFloat(value)||0;
        total+=value;
      });
     return total;
   };
  average:function(arr){
    if($.isArrary(arr)){
      return $.sum(arr)/arr.length;
      }
     return ' ';
    };
})(jQuery);
