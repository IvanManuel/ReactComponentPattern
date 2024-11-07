import { Product } from "../interfaces/interfaces";

const product = {
    id: '1',
    title: 'Coffee Mug',
    img: '../../../public/coffee-mug.png'
  }
  
const product2 = {
    id: '2',
    title: 'Coffee Meme',
    img: '../../../public/coffeemug2.png'
  }
  
export const products: Product[] = [product, product2];