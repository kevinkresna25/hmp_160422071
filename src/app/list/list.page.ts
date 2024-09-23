import { Component, OnInit } from '@angular/core';

interface Product {
  productName: string;
  productDate: Date;
  productPrice: number;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  // Week 4
  couponcode: string = '0000';
  strvalid: string = 'invalid';
  discount: number = 0;

  textColor = 'red';

  // array
  books = [
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      publishedDate: new Date('1960-07-11'),
      price: 7.99,
      discount: 0,
    },
    {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      publishedDate: new Date('1925-04-10'),
      price: 10.99,
      discount: 5,
    },
    {
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      publishedDate: new Date('1813-01-28'),
      price: 12.75,
      discount: 15,
    },
  ];

  // coret tulisan css text-decoration: line-through
  textStrikethrough = 'none';
  discounted: boolean = false;

  today = '9 September 2024';
  currentDate = new Date();
  realDate = new Date();
  numClickedYesterday = 0;
  numClickedTomorrow = 0;
  is5daysYesterday = false;
  is5daysTomorrow = false;
  qty = 1;

  product: Product = {
    productName: 'Iphone 14',
    productDate: new Date(),
    productPrice: 14000000,
  };

  constructor() {}

  ngOnInit() {}

  goYesterday() {
    // set untuk kembali sehari yang lalu
    this.currentDate.setDate(this.currentDate.getDate() - 1);
    this.numClickedYesterday++;
    this.goRefresh();
  }

  goResetDate() {
    this.currentDate.setDate(this.realDate.getDate());
    this.numClickedYesterday = 0;
    this.numClickedTomorrow = 0;
    this.is5daysYesterday = false;
    this.is5daysTomorrow = false;
  }

  goTomorrow() {
    this.currentDate.setDate(this.currentDate.getDate() + 1);
    this.numClickedTomorrow++;
    this.goRefresh();
  }

  goRefresh() {
    if (this.numClickedYesterday === 5) {
      this.is5daysYesterday = true;
      this.is5daysTomorrow = false;
      this.numClickedYesterday = 0;
    }

    if (this.numClickedTomorrow === 5) {
      this.is5daysTomorrow = true;
      this.is5daysYesterday = false;
      this.numClickedTomorrow = 0;
    }
  }

  today_ind(): string {
    const weekday = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    const month = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    // Get day
    const day = this.currentDate.getDay();
    // Get the current day (1-31)
    const d = this.currentDate.getDate();
    // Get the current month (0-11, where 0 is January and 11 is December)
    const m = this.currentDate.getMonth(); // Adding 1 to convert to 1-12 range
    // Get the current year (four-digit year)
    const y = this.currentDate.getFullYear();

    return weekday[day] + ', ' + d + '-' + month[m] + '-' + y;
  }

  plus() {
    this.qty++;
  }

  minus() {
    if (this.qty <= 1) {
      this.qty = 1;
    } else {
      this.qty--;
    }
  }

  quantity(): number {
    const totalAmount = this.product.productPrice * this.qty;
    return totalAmount;
  }

  // Week 4
  
  // Menyimpan diskon awal
  private diskonAwal = this.books.map(book => book.discount);
  
  checkValid() {
    if (this.couponcode === '1234') {
      this.strvalid = 'valid';
      this.discount = 5;
      this.textColor = 'green';
    } else if (this.couponcode === '6789') {
      this.strvalid = 'valid';
      this.discount = 10;
      this.textColor = 'green';
    } else {
      this.strvalid = 'Invalid';
      this.discount = 0;
      this.textColor = 'red';
    }

    this.cekCuponValid();
  }

  cekCuponValid() {
    if (this.strvalid === 'valid') {
      this.books.forEach(book => {
        book.discount += this.discount;
      });
    } else {
      this.books.forEach((book, index) => {
        book.discount = this.diskonAwal[index];
      });
    }
  }

  getDiscountedPrice(book: any): number {
    const discountMultiplier = 1 - book.discount / 100;
    return book.price * discountMultiplier;
  }

  getTextStyle(book: any): string {
    return book.discount > 0 ? 'line-through' : 'none';
  }
}
