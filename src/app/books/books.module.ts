import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksService } from './books.service';
import { BooksComponent } from './books.component';
import { BookComponent } from './book/book.component';



@NgModule({
  declarations: [BooksComponent,BookComponent],//since book is dependent on books componenet
  providers:[BooksService],
  imports: [
    CommonModule
  ],
  exports:[BooksComponent]
})
export class BooksModule { }
