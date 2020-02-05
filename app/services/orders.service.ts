import {Injectable} from "angular2/core";
import {ORDERS} from "./cont.orders";
import {Order} from "../model/order";

@Injectable()
export class OrdersService{


	getOrders(){
		return ORDERS;
	}

	addOrder(order: Order){
		Promise.resolve(ORDERS).then((orders: Order[]) => orders.push(order));
		alert("Your order has been save. Enjoy!");
	}
	deleteOrder(pIndex){
		Promise.resolve(ORDERS).then((orders: Order[]) => orders.splice(pIndex,1));
		alert("Your order has been delete.");
	}
}