import { Component, OnInit } from "@angular/core";
import { Yourplugin } from "nativescript-yourplugin";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    cypherText: string;

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
    }

    showNames(): void {
        this.cypherText = Yourplugin.cypher("Salvador", "Coronel");
    }

    showSnackbar(): void {
        Yourplugin.showSnackbar('This is a native Snackbar');
    }
}
