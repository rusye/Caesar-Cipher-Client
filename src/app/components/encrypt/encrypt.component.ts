import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-encrypt",
  templateUrl: "./encrypt.component.html",
  styleUrls: ["./encrypt.component.css"]
})
export class EncryptComponent implements OnInit {
  @Output() newEncryption: EventEmitter<any> = new EventEmitter();
  
  toEncrypt: string;
  shiftNumber: number;

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    const encrypt = {
      toShift: this.toEncrypt,
      shiftAmount: this.shiftNumber
    };

    this.newEncryption.emit(encrypt);
  }
}
