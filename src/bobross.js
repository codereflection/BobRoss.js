var bobross = (function(){
    canHazCanvas = function() {
        console.log("Can haz canvas? " + Modernizr.canvas);
        return Modernizr.canvas;
    }

    return {
        paintATree : function(){
            if (!canHazCanvas())
                return;

            var canvas = $("#treeCanvas")[0];
            var context = canvas.getContext("2d");

            // background
            context.fillStyle = "#fffaaa";
            context.fillRect(0,0,500,300);
            context.font = "20px _sans";

            // border
            context.strokeStyle = "#000000";
            context.strokeRect(5, 5, 490, 290);

            // text
            context.fillStyle = "#000000";
            context.textAlign = "center";
            context.fillText ("Happy Little Canvas", canvas.width / 2, 30);

            // trunk
            context.strokeStyle = "Brown";
            context.lineWidth = 10;
            context.lineCap = "square";
            context.beginPath();
            context.moveTo(canvas.width / 2, 290);
            context.lineTo(canvas.width / 2, 270);
            context.stroke();
            context.closePath();
        },
        sayHello : function(){
            return "Let's beat the devil out of it!";
        }
    };
})();
