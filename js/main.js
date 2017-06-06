function AudioPlayer( widget )
{
	this.widget = widget;
	this.widget.bind(SC.Widget.Events.FINISH, this.finish.bind(this));
}

AudioPlayer.prototype.finish = function()
{
	this.widget.pause();
};

AudioPlayer.prototype.play = function( index )
{
	this.widget.skip( index );
}

$( document ).ready(function()
{
	var widgetIframe = document.getElementById('sc-widget'),
        widget       = SC.Widget(widgetIframe);

	var player = new AudioPlayer( widget );
	// console.log(widget);
	// console.log(player);

	$('a').click(
		function(e)
		{
			e.preventDefault();
			var href = $(this).attr('href');
			player.play( href );
			// console.log( player );
			return false;
		}
	);
});