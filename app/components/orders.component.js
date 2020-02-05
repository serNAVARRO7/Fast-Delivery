System.register(["angular2/core", "angular2/router", "../services/orders.service", "../model/order"], function(exports_1, context_1) {
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
    var core_1, router_1, orders_service_1, order_1;
    var OrdersComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (orders_service_1_1) {
                orders_service_1 = orders_service_1_1;
            },
            function (order_1_1) {
                order_1 = order_1_1;
            }],
        execute: function() {
            OrdersComponent = (function () {
                function OrdersComponent(_ordersService, _router, _routeParams) {
                    this._ordersService = _ordersService;
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this.tittle = "Your orders";
                    this.orders = this._ordersService.getOrders();
                }
                OrdersComponent.prototype.deleteOrder = function (pAdress, pRestaurant, pFood) {
                    var orderToDelete = new order_1.Order(pAdress, pRestaurant, pFood);
                    for (var i = 0; i < this.orders.length; i++) {
                        var orderActual = this.orders[i];
                        var addressActual = orderActual.address;
                        var restaurantActual = orderActual.restaurant;
                        var foodActual = orderActual.food;
                        console.log(addressActual);
                        if ((pAdress === addressActual) && (pRestaurant === restaurantActual) && (pFood === foodActual)) {
                            console.log("estoy dentro");
                            this._ordersService.deleteOrder(i);
                        }
                    }
                };
                OrdersComponent = __decorate([
                    core_1.Component({
                        selector: "orders",
                        templateUrl: "app/view/orders.html",
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [orders_service_1.OrdersService]
                    }), 
                    __metadata('design:paramtypes', [orders_service_1.OrdersService, router_1.Router, router_1.RouteParams])
                ], OrdersComponent);
                return OrdersComponent;
            }());
            exports_1("OrdersComponent", OrdersComponent);
        }
    }
});
//# sourceMappingURL=orders.component.js.map