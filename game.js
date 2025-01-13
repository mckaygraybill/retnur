import './pixi.js';

(async () =>
{
	const app = new PIXI.Application();
	
	await app.init({ background: '#84a6c7', resizeTo: window });
	
	document.body.appendChild(app.canvas);
	
	
	    // Create gradient fill
    const fill = new PIXI.FillGradient(0, 0, 0, 36 * 1.7 * 7);

    const colors = [0x11cc80, 0xff1111].map((color) => PIXI.Color.shared.setValue(color).toNumber());

    colors.forEach((number, index) =>
    {
        const ratio = index / colors.length;

        fill.addColorStop(ratio, number);
    });

    const style = new PIXI.TextStyle({
        fontFamily: 'Garamond',
        fontSize: 160,
        fontWeight: 'bold',
        fill: { fill },
        stroke: { color: '#c0c0c0', width: 5, join: 'round' },
        dropShadow: {
            color: '#000000',
            blur: 4,
            angle: Math.PI / 2,
            distance: 6,
        },
    });
	
	const title = new PIXI.Text({
		text: 'retnur',
		style: style,
		x: 2 * app.canvas.width / 5,
		y: 30,
	});
	
	app.stage.addChild(title);
})();