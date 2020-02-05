System.register(["../model/order"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var order_1;
    var ORDERS;
    return {
        setters:[
            function (order_1_1) {
                order_1 = order_1_1;
            }],
        execute: function() {
            exports_1("ORDERS", ORDERS = [
                new order_1.Order("Bic Araba 27", "Gure txoko", "Bocadillo de lomo"),
                new order_1.Order("Avenida Zadorra", "La Pepita", "Patatas fritas"),
                new order_1.Order("Los Herran", "Goiko Grill", "Nachos con queso"),
                new order_1.Order("Calle Alcala", "Burger King", "Dorada al horno")
            ]);
        }
    }
});
//# sourceMappingURL=cont.orders.js.map