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

                switch(items){
                	case 1:
                        $this.children(settings.boxes).addClass("huge");        
                    break;
                    case 2:
                    case 4:
                        $this.children(settings.boxes).addClass("large");        
                    break;
                    case 3:
                        $this.children(settings.boxes).addClass("medium");
                    break;
                    case 5:
                        $this.children(settings.boxes + ":nth-child(1)").addClass("large");
                        $this.children(settings.boxes + ":nth-child(2)").addClass("large");
                        $this.children(settings.boxes + ":nth-child(n+3)").addClass("medium");
                    break;
                    case 6:
                        $this.children(settings.boxes + ":first-child").addClass("medium");
                        $this.children(settings.boxes + ":nth-child(n+2)").addClass("small");
                        $this.children(settings.boxes + ":nth-child(4)").removeClass("small");
                        $this.children(settings.boxes + ":nth-child(4)").addClass("medium");
                    break;
                    case 7:
                        $this.children(settings.boxes + ":nth-child(1)").addClass("large");
                        $this.children(settings.boxes + ":nth-child(2)").addClass("medium");
                        $this.children(settings.boxes + ":nth-child(n+3)").addClass("small");
                    break;
                    case 8:
                        $this.children(settings.boxes + ":nth-child(1)").addClass("large");
                        $this.children(settings.boxes + ":nth-child(2)").addClass("medium");
                        $this.children(settings.boxes + ":nth-child(3)").addClass("small");
                        $this.children(settings.boxes + ":nth-child(4)").addClass("small");
                        $this.children(settings.boxes + ":nth-child(5)").addClass("small");
                        $this.children(settings.boxes + ":nth-child(6)").addClass("small");
                        $this.children(settings.boxes + ":nth-child(7)").addClass("small");
                        $this.children(settings.boxes + ":nth-child(8)").addClass("huge");
                    break;
                    case 9:
                        $this.children(settings.boxes + ":nth-child(1)").addClass("medium");
                        $this.children(settings.boxes + ":nth-child(n+2)").addClass("small");        
                    break
                }

                $this.wrap('<div class="wrapper" />');
                $this.addClass("prettyboxes");

                $('.prettyboxes').masonry({
                    itemSelector: 'li',
                    isAnimated: true,
                    gutterWidth: 0,
                    isResizable: true,
                    isFitWidth: true,
                    columnWidth: 160
                });                
                
            });
        }
    });
})(jQuery);