export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Americano',
    price: 799,
    description: 'Black coffee with water'
  },
  {
    id: 2,
    name: 'Expresso',
    price: 699,
    description: 'Coffee'
  },
  {
    id: 3,
    name: 'Latte',
    price: 299,
    description: 'Milk with coffee'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/