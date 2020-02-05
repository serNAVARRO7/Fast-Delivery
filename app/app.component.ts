// Importar el núcleo de Angular
import {Component} from 'angular2/core';
import {InformationComponent} from "./components/information.component";
import {OrdersComponent} from "./components/orders.component";
import {AddOrderComponent} from "./components/addOrder.component";
import {ROUTER_DIRECTIVES, RouteConfig, Router} from "angular2/router";

// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'my-app',
    templateUrl: "app/view/onlyEat.html",
	directives: [ROUTER_DIRECTIVES, InformationComponent,OrdersComponent]
})

@RouteConfig([
	{path: "/onlyEat", name: "Home", component: InformationComponent, useAsDefault: true},
	{path: "/orders", name: "Orders", component: OrdersComponent},
	{path: "/addOrder", name: "AddOrder", component: AddOrderComponent},
	{path: "/addOrder/:restaurantSelect", name: "AddOrderRestaurant", component: AddOrderComponent}
])
 
// Clase del componente donde iran los datos y funcionalidades
export class AppComponent { }
