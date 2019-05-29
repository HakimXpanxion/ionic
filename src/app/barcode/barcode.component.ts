import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-barcode',
  templateUrl: './barcode.component.html',
  styleUrls: ['./barcode.component.scss'],
})
export class BarcodeComponent implements OnInit {

  constructor(public barcode:BarcodeScanner) { }

  encode(){
    var textToEncode = window.prompt("Enter text to encode");
    this.barcode.encode(this.barcode.Encode.TEXT_TYPE,textToEncode).then((data)=>{
      alert(JSON.stringify(data));
    },(err)=>{
      alert(JSON.stringify(err));
    })
  }

  scan(){
    this.barcode.scan().then((barcodeData)=>{
      alert(barcodeData.text);
    },(err)=>{
      alert(JSON.stringify(err));
    })
  }

  ngOnInit() {}

}
