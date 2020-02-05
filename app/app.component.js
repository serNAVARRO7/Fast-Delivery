System.register(['angular2/core', "./components/information.component", "./components/orders.component", "./components/addOrder.component", "angular2/router"], function(exports_1, context_1) {
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
    var core_1, information_component_1, orders_component_1, addOrder_component_1, router_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (information_component_1_1) {
                information_component_1 = information_component_1_1;
            },
            function (orders_component_1_1) {
                orders_component_1 = orders_component_1_1;
            },
            function (addOrder_component_1_1) {
                addOrder_component_1 = addOrder_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            // Decorador component, indicamos en que etiqueta se va a cargar la plantilla
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: "app/view/onlyEat.html",
                        directives: [router_1.ROUTER_DIRECTIVES, information_component_1.InformationComponent, orders_component_1.OrdersComponent]
                    }),
                    router_1.RouteConfig([
                        { path: "/onlyEat", name: "Home", component: information_component_1.InformationComponent, useAsDefault: true },
                        { path: "/orders", name: "Orders", component: orders_component_1.OrdersComponent },
                        { path: "/addOrder", name: "AddOrder", component: addOrder_component_1.AddOrderComponent },
                        { path: "/addOrder/:restaurantSelect", name: "AddOrderRestaurant", component: addOrder_component_1.AddOrderComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map