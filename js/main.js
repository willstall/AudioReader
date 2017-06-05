var widgetl

function main()
{	
	var iframeElement   = document.querySelector('iframe');
	var iframeElementID = iframeElement.id;
	widget         = SC.Widget(iframeElement);
	var widget2         = SC.Widget(iframeElementID);

	console.log(widget);
}

function play( index )
{

	widget.skip( index );
	widget.play();
}

// $('a').click( function(e) {e.preventDefault(); /*your_code_here;*/ return false; } );