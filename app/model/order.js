System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Order;
    return {
        setters:[],
        execute: function() {
            Order = (function () {
                function Order(address, restaurant, food) {
                    this.address = address;
                    this.restaurant = restaurant;
                    this.food = food;
                }
                return Order;
            }());
            exports_1("Order", Order);
        }
    }
});
//# sourceMappingURL=order.js.map