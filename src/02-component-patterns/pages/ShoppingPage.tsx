import { ProductCard, ProductImage, ProductsButtons, ProductTitle, } from "../components";

import { products } from '../data/product';
import '../styles/custom-styles.css';

const product = products[0];

export const ShoppingPage = () => {

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <ProductCard
        key={product.id}
        product={product}
        className="bd-dark text-white"
        initialValues={{
          count: 4,
          maxCount: 10
        }}
      >
        {
          ({ reset, count, isMaxCountReached, maxCount, increaseBy }) => (
            <>
              <ProductImage
                className="custom-image"
              />
              <ProductTitle
                title={product.title}
                className="text-bold"
              />
              <ProductsButtons
                className="custom-buttons"
              />
              <div>
              <button onClick={ reset }>Reset</button>
              <button onClick={ () => increaseBy(-2) }> -2 </button>
              {
                ( !isMaxCountReached && <button onClick={ () => increaseBy(2) }> +2 </button> )
              }
              <span>{ count } - { maxCount }</span>
              </div>
            </>
          )
        }
      </ProductCard>
    </div>
  )
}
