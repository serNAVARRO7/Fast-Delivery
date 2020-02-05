import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES, RouteConfig, Router, RouteParams} from "angular2/router";
import {OrdersService} from "../services/orders.service";
import {Order} from "../model/order";
import {OnInit} from "angular2/core";

@Component({
	selector: "addorder",
	templateUrl: "app/view/addOrder.html",
	directives: [ROUTER_DIRECTIVES],
	providers:[OrdersService]
})


export class AddOrderComponent implements OnInit {
	public tittle:string = "Create a new order";
	public orders;
	public nameRestaurant="";
	constructor(private _ordersService: OrdersService,
				private _router: Router,
				private _routeParams: RouteParams){
		this.orders = this._ordersService.getOrders();
	}

	ngOnInit():any{
		this.nameRestaurant = this._routeParams.get("restaurantSelect");
	}

	addOrder(pAdress,pRestaurant,pFood){
		let newOrder = new Order(pAdress,pRestaurant,pFood);
		this._ordersService.addOrder(newOrder);
		this._router.navigate(["Orders"]);
	}
}