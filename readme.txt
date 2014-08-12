Jquery kotshare plugin
Version: 1.0
Quick start:

1. Link kotshare.css in header of your html.
2. Place sh-sprite.png near the .css file (must be change in kotshare.css)
3. Place this code to document.ready block:
$("#MyShareDiv").kotshare({
		shareurl: 'http://google.com'
		});

Additional parameters:

mainclass : 'Name of your css class' (default: 'social-share'). 

- Must be use witch multiply different social share blocks on page

buttons :  Array of button switches, true - button enable. ( default : { 'fb' : true, 'vk' : true, 'tw' : true, 'ok' : true, 'gp' : true}  - all buttons switch on)

showcount : Show shares counters  (default : true - show shares count)

showzero : Show zero values of sharecounters (default : true - show zero values)

shareurl : Url for share. 


