import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }

  getBooks(){
    return [
      {
        name: 'code',
        author: 'RB',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPUumrx88Os6K57HDjUQSUDuKcrpnVissZ3g&usqp=CAU',
          amount:500
      },
      {
        name: 'mind',
        author: 'JM',
        // image:
        //   'https://m.media-amazon.com/images/I/51QTTApN-XL._SX324_BO1,204,203,200_.jpg',
        image:'https://play-lh.googleusercontent.com/z5cXiFxg9zNxPjhwp_2qpkpynxNahk6SQY5G5S2TnyodhWxOdV_aXyAcpd4Lm03rBtE06a9jox8G9w=w240-h345-rw',
        amount:600
      },]
  }
}
