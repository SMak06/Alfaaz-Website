var object2=$('#object2');
var layer=$('#layer');

layer.mousemove(function(e){
   var valueX=(e.pageX * -1 / 200);
   var valueY=(e.pageY * -1 / 200);

    object2.css({
        'transform':'translate3d('+valueX+'px,'+valueY+'px,0)'
    });
});
