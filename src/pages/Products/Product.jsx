import { AddIcon, ProductConteiner, ProductImg, ProductDescription } from "../../style/principalPage";
import { BsFillPlusCircleFill } from 'react-icons/bs';

function Product (product) {
    const {
        image,
        name, 
        description, 
        price,
    } = product.product;
    return (
      <ProductConteiner>
          <AddIcon>
              <BsFillPlusCircleFill color={'#D3A625'} size='20px'/>
          </AddIcon>
        <ProductImg>
          <img src={image} alt= ''/>
        </ProductImg>
        <ProductDescription>
            <h1>{name}</h1>
            <p>{description}</p>
            <h2>{Number(price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h2>
        </ProductDescription>        
      </ProductConteiner>
    );
}

export default Product;