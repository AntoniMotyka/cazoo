!function(n){"use strict";n.fn.delayed=function(t){var i=this,u=Array.prototype.slice.call(arguments,1);return t=n.isFunction(t)?t:n.isFunction(i[t])?i[t]:null,t&&i.queue(function(n){t.apply(i,u),n()}),this}}(jQuery);