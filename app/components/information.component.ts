import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES, RouteConfig, Router} from "angular2/router";

@Component({
	selector: "information",
	templateUrl: "app/view/information.html",
	directives: [ROUTER_DIRECTIVES]
})


export class InformationComponent {
	public tittle:string = "Find restaurants delivering right now, near you";

}