// COPY PASTE THE CODE INSIDE JS1k 2019 SHIM FROM https://js1k.com/2019-x/rules
(R=_=>{

	// timer
	requestAnimationFrame(R),
	t = t % 300 + .06,
	
	// screen
	a.width = a.height = W = 900,
	c.fillStyle = "#111",
	c.globalCompositeOperation = "lighter",
	c.strokeStyle = "#333",
	c.fillRect(0, 0, W, W),
	c.translate(W / 2, 600),
	c.shadowColor = "#0ff",
	
	// breakout
	j = 82,
	z = t / 9 - 23,
	p = z < 3 ? z : 3,
	x += o = !x | x > 78 ? -o : o,
	y += q = !y | y > 200 ? -q : q,
	z > 0 && (c.shadowBlur = 5) &
		(z > 5 && c.strokeRect(-j / 2 * p, -j * 2 * p, j * p, j * 2.8 * p)) &
			c.fillRect((x - j / 2) * p, (y - j * 2) * p, 2 * p, 4 * p) &
			c.fillRect((x - j / 2) * p * y / j / 3 - 9 * p, j / 2 * p, 18 * p, 8 * p);
	c.shadowBlur = 0;
	
	// tunnel
	for(i = 1; i++ < 24; c.clip()){
		p = t + i | 0, // layer position
		z = W / (i - t % 1), // perspective scaling
		s = z / 40, // dot size
		k = p < 128 ? 0 : Math.sin(Math.sin(p / 12) ** 5) * W * 9 / z, // horizontal offset
		l = p < 175 ? 0 : k, // vertical offset
		
		// color and lightness
		c.fillStyle=`hsl(${p % 128 < 64 ? 200 : 300},75%,${50 + Math.sin(p/8) * 50}%)`,
		c.globalAlpha = .06 - (i < 4) * t % 1 * .06,
		c.fill(),
		c.globalAlpha = 1,
		
		// gates
		c.fillStyle="#9bf";
		if (p < 144 & p % 32 < 1)for (j = 16; j--;)c.fillRect(z / 8 * j - z, -W / 2 - z * 3, s / 2, W);
		c.lineWidth = z / 8,
		p < 144 & p > 16 && (p % 16 || c.stroke()),
		c.beginPath();

		// layers
		for(j = 24; j--;)
			// shapeshifter plugins
			r = z * [
				.6 / Math.sin((j * .183 + 1.82) % 1.57 + .79), // square
				p % 4 | p < 48 ? 1 / Math.sin((j * .183 + 1.82) % 1.57 + .79) : 1, // corridor
				.6 / Math.sin((j * .183 + 1.82 + p / 6) % 1.57 + .79), // square spiral
				.6 / Math.sin((j * .262 + 1.7) % 1.57 + .79), // circus entrance
				.6, // circle
				Math.sin(j >> 1 & p) / 3 + 1, // cave
				Math.sin(j / 2 + p) / 4 - Math.sin(p / 2) / 6 + .7 - !(j * p % 9) / 6, // crystals
				.6 / Math.sin((j * .183 + 1.82) % 1.57 + .79) + Math.sin(p / 4 + t / 3) / 4 // square with pulse
			][p >> 5],
			c.lineTo(X = k + Math.sin(j * .183 - 2.1) * r,
				Y = l - Math.sin(j * .183 + 5.74) * r * (p > 192 ? 3 : 1)), // add point to polygon path
			// switcher plugins
			[					
				j % 17 == 3, // railing
				j % 17 == 3 + (Math.sin(p / 2 + t * 2) * (2 + Math.sin(t) * 2) | 0) , // whips
				j < 4 + Math.sin(p * p) * 3 | j > 19 + Math.sin(p * p) * 3, // city skyline
				j == ((p / 8 & 1 ? 6 : 9) * t % 20 | 0),  // circling beams
				1,  // all on
				Math.sin(j + p + t) < 0, // spiral
				j % 14 > 9, // top
				(j * j + p + t * 2) / 5 & 1, // meteor shower
				1, 1, // on
				0, 0, // off
				Math.sin(j * p * t) < 0 & Math.sin(j * p * p) > .7, // flickering stars
				Math.sin(j * p * t) < 0 & Math.sin(j * p * p) > .7,
				1, 1 // on
			][p >> 4] && c.fillRect(X  - s / 2, Y - s / 2, s, s) // render light
	}
})(t = x = y = o = q = 2)
