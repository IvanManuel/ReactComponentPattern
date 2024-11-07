import { ProductCard, ProductImage, ProductsButtons, ProductTitle, } from "../components";
import { products } from "../data/product";
import { useShoppingCart } from "../hooks/useShoppingCart";
import '../styles/custom-styles.css';

export const ShoppingPage = () => {

  const { shoppingCart, onProductCountChange } = useShoppingCart();

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>

        {
          products.map(
            product => (
              <ProductCard
                key={product.id}
                product={product}
                className="bd-dark text-white"
                onChange={ onProductCountChange }
                value={ shoppingCart[product.id]?.count || 0 }
              >
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
              </ProductCard>
            )
          )
        }
      </div>

      <div className="shopping-cart">
        {
          shoppingCart && Object.entries(shoppingCart).map(([key, product]) =>
            <ProductCard
              key={key}
              product={product}
              className="bd-dark text-white"
              style={{
                width: '100px'
              }}
              value={ product.count }
              onChange={ onProductCountChange }
            >
              <ProductImage
                className="custom-image"
              />
              <ProductsButtons
                className="custom-buttons"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              />
            </ProductCard>
          )
        }
      </div>
    </div>
  )
}
