import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import{Book} from '../../types/book'
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {
  @Input() book:Book={} as Book
isInCart: boolean = false;
 // @Output() bookEmitter = new EventEmitter<Book>();
constructor(private cartService:CartService){}

  addToCart(){
    // console.log("book",this.book)
   // this.bookEmitter.emit(this.book)
   this.isInCart=true
   this.cartService.add(this.book)
  }
  removeFromCart(){
    this.isInCart=false;
    this.cartService.remove(this.book)
  }
}
