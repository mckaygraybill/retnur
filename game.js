import './pixi.js';

(async () =>
{
	const app = new PIXI.Application();
	
	await app.init({ background: '#84a6c7', resizeTo: window });
	
	document.body.appendChild(app.canvas);
	
	const title = new PIXI.Text({
		text: 'retnur',
		style: {
			fontFamily: 'Garamond',
			fontSize: 72,
		},
		x: app.canvas.width / 2,
		y: app.canvas.height / 2,
	});
	
	app.stage.addChild(title);
})();