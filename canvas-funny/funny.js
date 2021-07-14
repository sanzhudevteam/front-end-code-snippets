export default class Pig {
	constructor(config) {
		this.defaults = {
			root: '#root',
		};
		Object.assign(this.defaults, config);

		const canvas = document.querySelector(this.defaults.root);
		this.ctx = canvas.getContext('2d');
	}

	draw() {
		this.ctx.beginPath();
		this.ctx.fillStyle = 'rgb(241, 201, 96)';
		this.ctx.arc(100, 100, 50, 0, 2 * Math.PI, true);
		this.ctx.fill();

		this.ctx.moveTo(140, 100);

		this.ctx.lineWidth = 2;
		this.ctx.strokeStyle = 'black';
		this.ctx.arc(100, 100, 40, 0, Math.PI, false);
		this.ctx.stroke();

		this.ctx.beginPath();
		this.ctx.arc(75, 90, 20, Math.PI * 1.1, Math.PI * 1.9, false); // 左眼
		this.ctx.stroke();

		this.ctx.beginPath();
		this.ctx.arc(75, 90, 10, Math.PI * 1.1, Math.PI * 1.9, false); // 左眼
		this.ctx.stroke();

		this.ctx.beginPath();
		this.ctx.arc(60, 85, 5, Math.PI, Math.PI * 2, true); // 左眼 左轮廓
		this.ctx.stroke();

		this.ctx.beginPath();
		this.ctx.arc(90, 85, 5, Math.PI, Math.PI * 2, true); // 左眼 右轮廓
		this.ctx.stroke();

		this.ctx.beginPath();
		this.ctx.arc(125, 90, 20, Math.PI * 1.1, Math.PI * 1.9, false); // 右眼
		this.ctx.stroke();

		this.ctx.beginPath();
		this.ctx.arc(125, 90, 10, Math.PI * 1.1, Math.PI * 1.9, false); // 右眼
		this.ctx.stroke();

		this.ctx.beginPath();
		this.ctx.arc(110, 85, 5, Math.PI, Math.PI * 2, true); // 右眼 左轮廓
		this.ctx.stroke();

		this.ctx.beginPath();
		this.ctx.arc(140, 85, 5, Math.PI, Math.PI * 2, true); // 右眼 右轮廓
		this.ctx.stroke();

		this.ctx.fillStyle = 'black';
		this.ctx.beginPath();
		this.ctx.arc(115, 80, 5, 0, Math.PI * 2, false);
		this.ctx.fill();

		this.ctx.fillStyle = 'black';
		this.ctx.beginPath();
		this.ctx.arc(65, 80, 5, 0, Math.PI * 2, false);
		this.ctx.fill();
	}
}
