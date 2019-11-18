import { Component, OnDestroy,OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from './cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnDestroy {
  subscription: Subscription;
  cart: any;
  products: any[] = [];
  constructor(private cartService: CartService) {
     // subscribe to product component
     this.subscription = this.cartService.getCart().subscribe(product => {
      if (product) {
        this.products.push(product);
      } else {
        // clear product
        this.products = [];
      }
    });
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

}

