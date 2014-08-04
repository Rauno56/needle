var n = new Needle(document.getElementById('graph'));


document.onkeydown = function (e) {
	n.setState(Needle.STATE_ON);
}

document.onkeyup = function (e) {
	n.setState(Needle.STATE_OFF);
}
