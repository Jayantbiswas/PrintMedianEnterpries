import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-quotation',
  standalone: true,
  templateUrl: './quotation.component.html',
  styleUrl: './quotation.component.css',
})
export class QuotationComponent {

  @Input() product:any;

  totalItems = 0;
  productPrice = 0;
  discount = 100;
  totalPrice = 0;
}
