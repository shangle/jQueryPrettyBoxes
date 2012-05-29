/*
	Copyright (c) 2012 Tim Shangle, shangle.me
	
	Permission is hereby granted, free of charge, to any person obtaining
	a copy of this software and associated documentation files (the
	"Software"), to deal in the Software without restriction, including
	without limitation the rights to use, copy, modify, merge, publish,
	distribute, sublicense, and/or sell copies of the Software, and to
	permit persons to whom the Software is furnished to do so, subject to
	the following conditions:
	
	The above copyright notice and this permission notice shall be
	included in all copies or substantial portions of the Software.
	
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
	EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
	NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
	LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
	OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
	WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
;(function($){
    $.fn.extend({
        prettyboxes: function(options) {
            this.defaultOptions = {};

            var settings = $.extend({boxes: "li"}, this.defaultOptions, options);

            return this.each(function() {
                var $this = $(this);
                var items = $(settings.boxes, $this).length;

                $this.children(settings.boxes + ":nth-child(1)").addClass("first-prettybox");
                $this.children(settings.boxes + ":nth-child(n+2)").addClass("prettybox");


                switch(items){
                	case 2:
                        $this.children(settings.boxes + ":nth-child(1)").css({
                            width: '50%', height: '50%'});
                        $this.children(settings.boxes + ":nth-child(2)").css({
                            width: '50%', height: '50%', top: 0, right: 0});
                    break;
                    case 3:
                        $this.children(settings.boxes).css({
                            width: '33.33333%', height: '33.33333%'});
                        $this.children(settings.boxes + ":nth-child(2)").css({
                            top: 0, right: '33.33333%'});
                        $this.children(settings.boxes + ":nth-child(3)").css({
                            top: 0, right: 0});
                    break;
                    case 4:
                        $this.children(settings.boxes).css({
                            width: '25%', height: '25%'});
                        $this.children(settings.boxes + ":nth-child(2)").css({
                            top: 0, left: '25%'});
                        $this.children(settings.boxes + ":nth-child(3)").css({
                            top: 0, right: '25%'});
                        $this.children(settings.boxes + ":nth-child(4)").css({
                            top: 0, right: 0});
                    break;
                    case 5:
                        $this.children(settings.boxes + ":nth-child(1)").css({
                            width: '50%', height: '50%'});
                        $this.children(settings.boxes + ":nth-child(n+2)").css({
                            width: '25%', height: '25%'});
                        $this.children(settings.boxes + ":nth-child(2)").css({
                            top: 0, left: '50%'});
                        $this.children(settings.boxes + ":nth-child(3)").css({
                            top: 0, right: 0});
                        $this.children(settings.boxes + ":nth-child(4)").css({
                            top: '50%', right: '25%'});
                        $this.children(settings.boxes + ":nth-child(5)").css({
                            top: '50%', right: 0});
                    break;
                    case 6:
                        $this.children(settings.boxes + ":nth-child(1)").css({
                            width: '33.33333%', height: '33.33333%'});
                        $this.children(settings.boxes + ":nth-child(2)").css({
                            width: '33.33333%', height: '33.33333%', top: 0, right: 0});
                        $this.children(settings.boxes + ":nth-child(n+3)").css({
                            width: '16.66667%', height: '16.66667%'});
                        $this.children(settings.boxes + ":nth-child(3)").css({
                            top: 0, left: '50%'});
                        $this.children(settings.boxes + ":nth-child(4)").css({
                            top: 0, right: '50%'});
                        $this.children(settings.boxes + ":nth-child(5)").css({
                            top: '50%', left: '50%'});
                        $this.children(settings.boxes + ":nth-child(6)").css({
                            top: '50%', right: '50%'});
                    break;
                    case 7:
                        $this.children(settings.boxes + ":nth-child(1)").css({
                            width: '50%', height: '50%'});
                        $this.children(settings.boxes + ":nth-child(2)").css({
                            width: '33.33333%', height: '33.33333%', top: 0, right: 0});
                        $this.children(settings.boxes + ":nth-child(n+3)").css({
                            width: '16.66667%', height: '16.66667%'});
                        $this.children(settings.boxes + ":nth-child(3)").css({
                            top: 0, left: '50%'});
                        $this.children(settings.boxes + ":nth-child(4)").css({
                            top: '33.33333%', left: '50%'});
                        $this.children(settings.boxes + ":nth-child(5)").css({
                            top: '66.66667%', left: '50%'});
                        $this.children(settings.boxes + ":nth-child(6)").css({
                            top: '66.66667%', right: 0});
                        $this.children(settings.boxes + ":nth-child(7)").css({
                            top: '66.66667%', right: '16.66667%'});
                    break;
                    case 8:
                        $this.children(settings.boxes + ":nth-child(1)").css({
                            width: '42.8571429%', height: '42.8571429%'});
                        $this.children(settings.boxes + ":nth-child(n+2)").css({
                            width: '21.4285714%', height: '21.4285714%'});
                        $this.children(settings.boxes + ":nth-child(2)").css({
                            top: 0, left: '42.8571429%'});
                        $this.children(settings.boxes + ":nth-child(3)").css({
                            top: '50%', left: '42.8571429%'});
                        $this.children(settings.boxes + ":nth-child(4)").css({
                            top: 0, right: '14.3%'});
                        $this.children(settings.boxes + ":nth-child(5)").css({
                            top: '50%', right: '14.3%'});
                        $this.children(settings.boxes + ":nth-child(n+6)").css({
                            width: '14.2857143%', height: '14.2857143%'});
                        $this.children(settings.boxes + ":nth-child(6)").css({
                            top: 0, right: 0});
                        $this.children(settings.boxes + ":nth-child(7)").css({
                            top: '33.33333%', right: 0});
                        $this.children(settings.boxes + ":nth-child(8)").css({
                            top: '66.66667%', right: 0});
                    break;
                    case 9:
                        $this.children(settings.boxes + ":nth-child(1)").css({
                            width: '33.3333333%', height: '33.3333333%'});
                        $this.children(settings.boxes + ":nth-child(n+2)").css({
                            width: '16.6666667%', height: '16.6666667%'});
                        $this.children(settings.boxes + ":nth-child(2)").css({
                            top: 0, left: '33.3333333%'});
                        $this.children(settings.boxes + ":nth-child(3)").css({
                            top: '50%', left: '33.3333333%'});
                        $this.children(settings.boxes + ":nth-child(4)").css({
                            top: 0, left: '50%'});
                        $this.children(settings.boxes + ":nth-child(5)").css({
                            top: '50%', left: '50%'});
                        $this.children(settings.boxes + ":nth-child(6)").css({
                            top: 0, right: '16.7%'});
                        $this.children(settings.boxes + ":nth-child(7)").css({
                            top: '50%', right: '16.7%'});
                        $this.children(settings.boxes + ":nth-child(8)").css({
                            top: 0, right: 0});
                        $this.children(settings.boxes + ":nth-child(9)").css({
                            top: '50%', right: 0});
                    break
                    case 10:
                        $this.children(settings.boxes + ":nth-child(1)").css({
                            width: '50%', height: '50%'});
                        $this.children(settings.boxes + ":nth-child(n+2)").css({
                            width: '16.6666667%', height: '16.6666667%'});
                        $this.children(settings.boxes + ":nth-child(2)").css({
                            top: 0, left: '50%'});
                        $this.children(settings.boxes + ":nth-child(3)").css({
                            top: '33.3333333%', left: '50%'});
                        $this.children(settings.boxes + ":nth-child(4)").css({
                            top: '66.6666666%', left: '50%'});
                        $this.children(settings.boxes + ":nth-child(5)").css({
                            top: 0, right: '16.7%'});
                        $this.children(settings.boxes + ":nth-child(6)").css({
                            top: '33.3333333%', right: '16.7%'});
                        $this.children(settings.boxes + ":nth-child(7)").css({
                            top: '66.6666666%', right: '16.7%'});
                        $this.children(settings.boxes + ":nth-child(8)").css({
                            top: 0, right: 0});
                        $this.children(settings.boxes + ":nth-child(9)").css({
                            top: '33.3333333%', right: 0});
                        $this.children(settings.boxes + ":nth-child(10)").css({
                            top: '66.6666666%', right: 0});
                    break
                }

                $this.wrap('<div class="wrapper" />');
                $this.addClass("prettyboxes");

            });
        }
    });
})(jQuery);