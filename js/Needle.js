function Needle(canvas) {
	this.context = graph.getContext("2d");
	this.context.lineWidth = 1;

	this.width = graph.width;
	this.height = graph.height;
}

Needle.prototype = {
	colors: ['white', 'black', 'red'],
	recording: false,
	state: 'off',
	position: 0.5,
	speed: 10,
	mark: function (x, col) {
		this.context.beginPath();
		this.context.moveTo(x, 0);
		this.context.lineTo(x, this.height);
		this.context.lineWidth = 1;
		this.context.strokeStyle = col || this.colors[Needle.STATE_OFF];
		this.context.stroke();
	},
	tick: function () {
		this.mark(this.position % this.width, this.colors[this.state]);
		this.position++;
		if (this.recording) {
			this.mark(this.position % this.width, this.colors[Needle.STATE_NEEDLE]);
			setTimeout(this.tick.bind(this), this.speed);
		}
	},
	stop: function () {
		this.recording = false;
	},
	start: function () {
		this.recording = true;
		this.tick();
	},
	setState: function (s) {
		this.state = s;
	}
};

Needle.STATE_OFF = 0;
Needle.STATE_ON = 1;
Needle.STATE_NEEDLE = 2;
