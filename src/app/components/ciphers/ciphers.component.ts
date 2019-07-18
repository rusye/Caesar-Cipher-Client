import { Component, OnInit } from "@angular/core";
import { Cipher } from "../../models/Cipher";

@Component({
  selector: "app-ciphers",
  templateUrl: "./ciphers.component.html",
  styleUrls: ["./ciphers.component.css"]
})
export class CiphersComponent implements OnInit {
  ciphers: Cipher[];

  constructor() {}

  ngOnInit() {
    this.ciphers = [
      {
        toShift: "I love node!",
        afterShift: "E hkra jkza!",
        shiftAmount: 22
      }
    ];
  }
}
