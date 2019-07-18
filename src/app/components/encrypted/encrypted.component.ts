import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-encrypted",
  templateUrl: "./encrypted.component.html",
  styleUrls: ["./encrypted.component.css"]
})
export class EncryptedComponent implements OnInit {
  @Input() encryption: string;

  constructor() {}

  ngOnInit() {}
}
