System.register(["angular2/core", "./cont.orders"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, cont_orders_1;
    var OrdersService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (cont_orders_1_1) {
                cont_orders_1 = cont_orders_1_1;
            }],
        execute: function() {
            OrdersService = (function () {
                function OrdersService() {
                }
                OrdersService.prototype.getOrders = function () {
                    return cont_orders_1.ORDERS;
                };
                OrdersService.prototype.addOrder = function (order) {
                    Promise.resolve(cont_orders_1.ORDERS).then(function (orders) { return orders.push(order); });
                    alert("Your order has been save. Enjoy!");
                };
                OrdersService.prototype.deleteOrder = function (pIndex) {
                    Promise.resolve(cont_orders_1.ORDERS).then(function (orders) { return orders.splice(pIndex, 1); });
                    alert("Your order has been delete.");
                };
                OrdersService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], OrdersService);
                return OrdersService;
            }());
            exports_1("OrdersService", OrdersService);
        }
    }
});
//# sourceMappingURL=orders.service.js.map