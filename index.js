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
for(var i = 0;i<4 ;i++) {
    for (var j = 0; j < 4; j++) {
        var graphics = new PIXI.Graphics();
        graphics.beginFill(0xff700B, 1);
        graphics.drawRect(app.renderer.width / 8 + j * 155, app.renderer.height / 8 * 3 + i * 155, 150, 150);
        app.stage.addChild(graphics);
    }
}
function redomnumber()
{
    return Math.floor(Math.random() * 4);
}
var x = redomnumber();
var y = redomnumber();

var graphics = new PIXI.Graphics();
graphics.beginFill(999933, 1);
graphics.drawRect(app.renderer.width / 8 + x * 155, app.renderer.height / 8 * 3 + y * 155, 150, 150);
app.stage.addChild(graphics);

var basicnumber = new PIXI.Text('2',{
    fontSize:100
});
basicnumber.anchor.set(0.5);
basicnumber.x =100/1.4 + app.renderer.width/8 + x * 155;
basicnumber.y =100/1.4 + app.renderer.height/8 * 3 + y * 155;

app.stage.addChild(basicnumber);