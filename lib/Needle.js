'use strict';

function Needle(canvas, speed) {
	this.context = canvas.getContext('2d');
	this.context.lineWidth = 1;

	this.width = canvas.width;
	this.height = canvas.height;

	this.speed = speed || this.speed;
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
		if (!this.recording) {
			this.recording = true;
			this.tick();
		}
	},
	setState: function (s) {
		this.state = s;
	}
};

Needle.STATE_OFF = 0;
Needle.STATE_ON = 1;
Needle.STATE_NEEDLE = 2;
