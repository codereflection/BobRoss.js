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
            var center = canvas.width / 2;

            // background
            context.fillStyle = "#aaaaaa";
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
            context.lineWidth = 20;
            context.lineCap = "square";
            context.beginPath();
            context.moveTo(center, 285);
            context.lineTo(center, 280);
            context.stroke();
            context.closePath();

            // branches
            context.strokeStyle = "Green";
            context.lineWidth = 2;
            context.lineCap = "square";
            context.beginPath();
            //   left side
            context.moveTo(center, 270);
            context.lineTo(center - 100, 270);
            context.lineTo(center - 60, 230);
            context.lineTo(center - 80, 230);
            context.lineTo(center - 40, 190);
            context.lineTo(center - 60, 190);
            context.lineTo(center - 20, 150);
            context.lineTo(center - 40, 150);
            context.lineTo(center, 110);

            //   right side
            context.lineTo(center + 40, 150);
            context.lineTo(center + 20, 150);
            context.lineTo(center + 60, 190);
            context.lineTo(center + 40, 190);
            context.lineTo(center + 80, 230);
            context.lineTo(center + 60, 230);
            context.lineTo(center + 100, 270);
            context.lineTo(center, 270);
            context.stroke();
            context.closePath();
        },
        sayHello : function(){
            return "Let's beat the devil out of it!";
        }
    };
})();
