window.onload = function() {
    var camera = $("#camera");
    var position = camera.attr("position");
    console.log(position);
    position.y = 1.6;
    camera.attr("position", position.x + ', ' + position.y + ', ' + position.z);
}