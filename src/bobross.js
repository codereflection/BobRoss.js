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

/*
            // text -- commented out because this is affecting the ground for some reason.. :/
            context.font = "30px Verdana";
            context.lineWidth = 1;
            context.strokeStyle = "e3e3e3";
            context.fillStyle = "#e3e3e3";
            context.fill();
            context.textAlign = "center";
            context.fillText("Happy Little Canvas", canvas.width / 2, 40);
*/


            // background
            var backGrad = context.createLinearGradient(0, 0, 0, 300);
            backGrad.addColorStop(0, "#4A6491");
            backGrad.addColorStop(1, "#D0E4F2");
            context.fillStyle = backGrad;
            context.fillRect(0,0,500,300);


            // ground
            context.lineWidth = 1;
            context.beginPath();
            context.moveTo(1, 260);
            context.bezierCurveTo(20, 250, 50, 280, center, 250);
            context.bezierCurveTo(center + 50, 250, center + 50, 240, canvas.width-1, 280);
            context.lineTo(canvas.width-1, canvas.height-1);
            context.lineTo(1, canvas.height-1);
            context.lineTo(1, 260);
            context.closePath();
            var groundGrad = context.createLinearGradient(0, 200, 0, canvas.height);
            groundGrad.addColorStop(0, "#232617");
            groundGrad.addColorStop(0.5, "#42350B");
            groundGrad.addColorStop(1, "#63661A");
            context.fillStyle = groundGrad;
            context.fill();
            context.strokeStyle = "#42350B";
            context.stroke();


            // trunk
            context.strokeStyle = "Brown";
            context.lineWidth = 1;
            context.lineCap = "square";
            context.beginPath();
            context.rect(center - 10, 260, 10, 25);
            var trunkGrad = context.createLinearGradient(center - 10, 0, center + 10, 0);
            trunkGrad.addColorStop(0, "#241A0C");
            trunkGrad.addColorStop(1, "#D6820D");
            context.fillStyle = trunkGrad;
            context.fill();
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

            // tree fill
            var branchGrad = context.createLinearGradient(center - 100, 150, center + 100, 50);
            branchGrad.addColorStop(0, "#466100");
            branchGrad.addColorStop(1, "#89B41C");
            context.fillStyle = branchGrad;
            context.fill();
            context.stroke();
            context.closePath();

            
            // border
            context.strokeStyle = "#000000";
            context.strokeRect(5, 5, 490, 290);
        },
        sayHello : function(){
            return "Let's beat the devil out of it!";
        }
    };
})();
