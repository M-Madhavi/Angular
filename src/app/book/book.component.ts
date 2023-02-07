import { Component, EventEmitter, Input, Output } from '@angular/core';
import{Book} from '../types/book'
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {
  @Input() book:Book={} as Book
  @Output() bookEmitter = new EventEmitter<Book>();

  addToCart(){
    // console.log("book",this.book)
    this.bookEmitter.emit(this.book)
  }
}
