var lastX = -1;
var lastY = -1;

window.onload = function() {
    $("body").mousemove(function(e) {
        var newX = e.pageX;
        var newY = e.pageY;
        var reset = false;
        if (lastX == -1) {
            lastX = newX;
            reset = true;
        }
        if (lastY == -1) {
            lastY = newY;
            reset = true;
        }
        if (reset) {
            return;
        }
        else {
            // Alter camera direction
            // Get current direction
            var camera = $("#camera");
            var rotation = camera.attr("rotation");
            // Calcuate new direction
            var diffX = newX - lastX;
            var diffY = newY - lastY;
            var newPosX = (rotation.x + diffX);
            var newPosY = (rotation.y + diffY);
            // Set new direction
            $("#camera").attr('rotation', newPosX+', '+newPosY+', 0');
            // Update previous coordinates
            lastX = newX;
            lastY = newY;
        }
    });
}