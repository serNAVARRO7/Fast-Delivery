import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES, RouteConfig, Router, RouteParams} from "angular2/router";
import {OrdersService} from "../services/orders.service";
import {Order} from "../model/order";

@Component({
	selector: "orders",
	templateUrl: "app/view/orders.html",
	directives: [ROUTER_DIRECTIVES],
	providers:[OrdersService]
})


export class OrdersComponent {
	public tittle:string = "Your orders";
	public orders;
	constructor(private _ordersService: OrdersService,
		private _router: Router,
		private _routeParams: RouteParams){
		this.orders = this._ordersService.getOrders();
	}

	deleteOrder(pAdress, pRestaurant, pFood){
		let orderToDelete = new Order(pAdress,pRestaurant,pFood);
		for (var i = 0; i < this.orders.length; i++) {
   			let orderActual = this.orders[i];
   			let addressActual = orderActual.address;
   			let restaurantActual = orderActual.restaurant;
   			let foodActual = orderActual.food;
   			console.log(addressActual);
   			if((pAdress===addressActual) && (pRestaurant===restaurantActual) && (pFood===foodActual)){
   				console.log("estoy dentro");
   				this._ordersService.deleteOrder(i);
   			}
		}
	}
}
