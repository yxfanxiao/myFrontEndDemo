define(['query','scrollto'], function ($) {
	function BackTop (el, opts) {
		this.opts = $.extend({}, BackTop.DEFAULTS, opts);
		this.$el = $(el);
		this.scroll = new scrollto.ScrollTo({
			dest: 0,
			speed: this.opts.speed
		});

		this._checkPosition();
		if (this.opts.mode == 'move') {
			this.$el.on('click', $.proxy(this._move, this));
		}
		else
		{
			this.$el.on('click', $.proxy(this._go, this));
		}
		$(window).on('scroll', this._checkPosition, this); 
	}
	BackTop.prototype._move = function () {
		this.scroll.move();
	}
	BackTop.prototype._go = function () {
		this.scroll.go();
	}
	BackTop.prototype._checkPosition = function () {
		if ($(window).scrollTop() > this.opts.pos)
		{
			this.$el.fadeIn();
		}
		else
		{
			this.$el.fadeOut();
		}
	}
	BackTop.DEFAULTS = {
		mode: 'move',
		pos: $(window).height()
	};

	return {
		BackTop: BackTop
	}
});