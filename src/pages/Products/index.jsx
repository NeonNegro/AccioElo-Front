
import Screen from "../../components/Screen.jsx";
import { MenuHeader, TextCategory, ConteinerProducts, Navbar, RightNavbar} from "../../style/principalPageStyle.js";
import { AiOutlineMenu } from 'react-icons/ai';
import { BsCart2 } from 'react-icons/bs';
import { useContext, useEffect, useState } from "react";
import api from "../../services/api.jsx";
import Product from "./Product.jsx";
import AuthContext from "../../contexts/AuthContext.jsx";
import { StyledLink } from "../../components/FormComponents.jsx";

function Products(){

  const [products, setProducts] = useState([]);
  const [isNavbarOpen, setNavbar] = useState(false);
  const { auth } = useContext(AuthContext);
  console.log(auth);
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState('');
  const [nameCategory, setNameCategory] = useState('Todos os produtos');

  useEffect(() => {
    if (categoryId === '' || categoryId === '1') {
      api.getProducts()
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
    }
    
    api.getCategories()
      .then((res) => setCategories(res.data))
      .catch((err) => console.log(err));

    if (categoryId !== '1' && categoryId !== '') {
      api.getProductsCategory(categoryId)
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
    }
  }, [setProducts, setCategories, categoryId]);

  function updateNavbar() {
    isNavbarOpen ? setNavbar(false) : setNavbar(true);
  }

  return(
    <Screen justify="flex-start">
      {
        isNavbarOpen ? 
        (
          <>
            <Navbar> 
              <h1> Olá, {auth.name}</h1>
              <h2> Categorias</h2>
              <p onClick = {() => {setCategoryId('1'); setNavbar(false)}}> 1. Todas as categorias </p>
                {
                  categories.length !== 0 ?
                  (
                    categories.map((category, index) => <p key={index} onClick = {() => {setCategoryId(category._id); setNameCategory(category.name); setNavbar(false)}}>{Number(index + 2)}. {category.name}</p>)
                  )
                  :
                  (
                    true
                  )
                }
              {(auth) 
                ? <h3> Cansou de fazer comprinhas? Clique aqui para sair da sua conta!</h3> 
                : <StyledLink to='/login'> Accio compras! Oh, espere: você não está logado. Logue agora!</StyledLink>
              }
              
            </Navbar>
            <RightNavbar onClick={updateNavbar}>

            </RightNavbar>
          </>
        )
        : 
        (
          false  
        )
      }
      <MenuHeader>
        <div>
          <AiOutlineMenu size='29px' onClick={updateNavbar}/>
          <h1>ACCIOELO</h1>
        </div>
        <BsCart2 size='29px' />
      </MenuHeader>
      {
        categoryId === '1' || categoryId === '' ?
        (
          <TextCategory>Todos os produtos</TextCategory>
        )
        :
        (
          <TextCategory>{nameCategory}</TextCategory>
        )
      }
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
  );
}

export default Products;