import { ProductCard, ProductImage, ProductsButtons, ProductTitle, } from "../components";
import '../styles/custom-styles.css';

const product = {
  id: '1',
  title: 'Coffee Mug',
  img: '../../../public/coffee-mug.png'
}

export const ShoppingPage = () => (
  <div>
    <h1>Shopping Store</h1>
    <hr />

    <div style={{
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap'
    }}>
      <ProductCard
        product={product}
        className="bd-dark text-white"
        >
        <ProductCard.Image className="custom-image" />
        <ProductCard.Title className="text-bold" />
        <ProductCard.Buttons className="custom-buttons" />
      </ProductCard>

      <ProductCard
        product={product}
        className="bd-dark text-white"
      >
        <ProductImage
          className="custom-image"
        />
        <ProductTitle
          title={'Café Hub'}
          className="text-bold"
        />
        <ProductsButtons
          className="custom-buttons"
        />
      </ProductCard>

      <ProductCard
        product={product}
        style={{
          backgroundColor: '#70D1F8'
        }}
        >
        <ProductImage
        style={
          {
            boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'
          }
        }
        />
        <ProductTitle
          style={{ fontWeight: 'bold' }}
        />
        <ProductsButtons style={{
          display: 'flex',
          justifyContent: 'end',
        }} />
      </ProductCard>
    </div>
  </div>
)
