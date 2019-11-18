import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CartService {
    private subject = new Subject<any>();

    addToCart(product: string) {
        this.subject.next({ name: product });
    }

    clearCart() {
        this.subject.next();
    }

    getCart(): Observable<any> {
        return this.subject.asObservable();
    }
}

