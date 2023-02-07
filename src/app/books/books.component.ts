import { Component } from '@angular/core';
import{Book} from '../types/book'

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent {
  //https://m.media-amazon.com/images/I/518K9-ZXaaL._SL500_.jpg
  //https://m.media-amazon.com/images/I/61AtWVLF2CL._AC_SS130_.jpg
  //https://m.media-amazon.com/images/I/81JByBEqw+S._AC_SS130_.jpg
  //https://play-lh.googleusercontent.com/QL6HdwGZeqSBHmdXsc_NwPLyG-0y18C0V5Ze4u2tPf_2h5S1VxhDhAdt8d9rp4cKh5yrfTloFL7S=w240-h345-rw
  //https://play-lh.googleusercontent.com/z5cXiFxg9zNxPjhwp_2qpkpynxNahk6SQY5G5S2TnyodhWxOdV_aXyAcpd4Lm03rBtE06a9jox8G9w=w240-h345-rw
  isDisabled: boolean = false;

  // handleClick(){
  //   // this.isDisabled = !this.isDisabled
  //   alert("button clicked")
  // }

  // enteredInput:string=""
  // handleInput(event:any){
  //   this.enteredInput=event.target.value
  //   // alert("typing.......")
  //   // console.log("Event",event.target.value)
  // }
  isShowing: boolean = true;
  // toggleBooks(){
  //   this.isShowing = !this.isShowing
  // }

  books:Book[] = [
    {
      name: 'code',
      author: 'RB',
      image:
        'https://play-lh.googleusercontent.com/3dkBCAIo-rJVhrcXMymTejclhx7fDbjzakz3w5wvAVBOxgZWLkRSN6_2M73_EIxs0CasCox72BrahQ=w240-h345-rw',
        amount:500
    },
    {
      name: 'mind',
      author: 'JM',
      // image:
      //   'https://m.media-amazon.com/images/I/51QTTApN-XL._SX324_BO1,204,203,200_.jpg',
      image:'https://play-lh.googleusercontent.com/z5cXiFxg9zNxPjhwp_2qpkpynxNahk6SQY5G5S2TnyodhWxOdV_aXyAcpd4Lm03rBtE06a9jox8G9w=w240-h345-rw',
      amount:600
    },
  ];

  cart:Book[]=[]

  addToCart(event:Book){
    console.log("aaaaaaaaaa",event)
  }
}
