import * as React from "react";
import ItemList from "../../components/ItemList/ItemList";
import productList from "../../mocks/productList";
const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    setIsLoading(true);
    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => resolve(productList), 2000);
    });

    myPromise.then((result) => {
      setProducts(result);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <h1>Loading energy 🙃 </h1>;
  }

  return (
    <div>
      <h2>{greeting}</h2>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
