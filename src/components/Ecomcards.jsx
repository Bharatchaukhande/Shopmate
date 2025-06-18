
import React, { useEffect, useState } from 'react';
import Ecomcard from './Ecomcard';

const Ecomcards = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const categories = [
          'mens-shirts',
          'mens-shoes',
          'womens-dresses',
          'womens-shoes'
        ];

        const allProducts = [];

        for (const category of categories) {
          const response = await fetch(`https://dummyjson.com/products/category/${category}`);
          const result = await response.json();
          allProducts.push(...result.products);
        }

        setData(allProducts);
        console.log(allProducts);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    getData();
  }, []);

  return (
    <div className='main-category-screen' style={{
      width: '100%',
      backgroundColor: "#f4f4f4",
      display: 'flex',
      flexWrap: "wrap",
      justifyContent: 'center',
      gap: "30px !important",
      padding: "40px 20px"
    }}>
      {data.map((item) => (
        <Ecomcard item={item} key={item.id} />
      ))}
      
    </div>
  );
};

export default Ecomcards;

