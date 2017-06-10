/**
 * Created by lx on 2017/6/10.
 */
var app = new PIXI.Application(window.innerWidth,window.innerHeight,{backgroundColor: 0x1099bb});
document.body.appendChild(app.view);

var basicText = new PIXI.Text('2048',{
    fontSize:250
});
basicText.anchor.set(0.6);
basicText.x = app.renderer.width/2;
basicText.y = app.renderer.height/4;

app.stage.addChild(basicText);
var grid = [];
for( var i = 0;i < 4;i++)
{
    grid[i]=[0,0,0,0];
}

function redomnumber()
{
    return Math.floor(Math.random() * 4);
}
var rowIndex = redomnumber();
var columnIndex = redomnumber();


grid[rowIndex][columnIndex] = 2;

for(var i = 0;i<4 ;i++) {
    for (var j = 0; j < 4; j++) {
        drawCell(i, j);
    }
}

function drawCell(rowIndex,columnIndex)
{
    var color = 0x0000FF;
    if(grid[rowIndex][columnIndex] === 2) {
        color = 0xFF0000;
    }

    var graphics = new PIXI.Graphics();
    graphics.beginFill(color, 1);
    graphics.drawRect(app.renderer.width / 8 + rowIndex * 155, app.renderer.height / 8 * 3 + columnIndex * 155, 150, 150);
    app.stage.addChild(graphics);

    if(grid[rowIndex][columnIndex] !== 0)
    {
        var basicnumber = new PIXI.Text(grid[rowIndex][columnIndex],{
            fontSize:100
        });
        basicnumber.anchor.set(0.5);
        basicnumber.x =100/1.4 + app.renderer.width/8 + rowIndex * 155;
        basicnumber.y =100/1.4 + app.renderer.height/8 * 3 + columnIndex * 155;
        app.stage.addChild(basicnumber);
    }
}

document.addEventListener('keydown',function(event)
{
    if(event.key === "ArrowRight")
    {
        console.log(event);
    }
}
);

