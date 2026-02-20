import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  selectedCategory: string = 'All';

  products = [
    {
      id: 1,
      name: 'rog laptop',
      price: 1459,
      category: 'gadget',
      image: 'images/rog-laptop.png',
      stock: 5
    },
    {
      id: 2,
      name: 'iphone 15',
      price: 2239,
      category: 'cellphone',
      image: 'images/iphone15.jfif',
      stock: 0
    },
    {
      id: 3,
      name: 'rog headphone',
      price: 999,
      category: 'Audio',
      image: 'images/rog-headphones.jpg',
      stock: 3
    },
    {
      id: 4,
      name: 'rog keyboard',
      price: 799,
      category: 'Accessories',
      image: 'images/rog-keyboard.jpg',
      stock: 7
    }
  ];

  cart: any[] = [];

  get filteredProducts() {
    if (this.selectedCategory === 'All') {
      return this.products;
    }
    return this.products.filter(p => p.category === this.selectedCategory);
  }

  addToCart(product: any) {
    alert(product + ' added to cart!');
    if (product.stock > 0) {
      this.cart.push(product);
      product.stock--;
    }
  }

  removeFromCart(index: number) {
    this.cart.splice(index, 1);
  }

  getTotal() {
    return this.cart.reduce((total, item) => total + item.price, 0);
  }

}