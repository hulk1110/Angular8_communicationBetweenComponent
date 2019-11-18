import { Component} from '@angular/core';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './product.component.html'
})
export class ProductComponent {
  constructor(private cartService: CartService) {}


  addToCart(): void {
      // send product data to subscribers via observable subject
      this.cartService.addToCart('Product item from Product Component to App Component');
  }

  clearCart(): void {
      // clear cart
      this.cartService.clearCart();
  }
}
