
import Screen from "../../components/Screen.jsx";
import { MenuHeader, TextCategory, ConteinerProducts } from "../../style/principalPage.js";
import { AiOutlineMenu } from 'react-icons/ai';
import { BsCart2 } from 'react-icons/bs';
import { useEffect, useState } from "react";
import api from "../../services/api.jsx";
import Product from "./Product.js";

function Products(){

  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.getProducts()
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, [setProducts])
    return(
        <Screen>
          <MenuHeader>
            <div>
              <AiOutlineMenu size='29px'/>
              <h1>ACCIOELO</h1>
            </div>
            <BsCart2 size='29px' />
          </MenuHeader>
          <TextCategory>Todos os produtos</TextCategory>
          <ConteinerProducts>
            {
              products.length !== 0 ?
              (
                products.map((product, index) => <Product key={index} product = {product}/>)
              )
              :
              (
                <h4>Nenhum produto disponível</h4>
              )
            }
          </ConteinerProducts>
        </Screen>
    )
}

export default Products;