
$(".custom-scroll").niceScroll({
	cursorcolor:"#355CFF",
	hidecursordelay: 550,
	railpadding: { top: 0, right: 0, left: 0, bottom: 20 },
	cursorwidth: "8px"

}); 

$(".second-scroll").niceScroll({
	cursorcolor:"#e7e7e7",
	hidecursordelay: 550,
	cursorfixedheight: 118,
	cursorwidth: "24px",
	horizrailenabled: false

}); 

 $(".player-volume-range").rangeslider({

 	polyfill: false,
    rangeClass: 'rangeslider',
    horizontalClass: 'slider-range-horizontal',
    fillClass: 'rangeslider__fill',
    handleClass: 'rangeslider__handle'

 });