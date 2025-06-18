import React, { useEffect, useState } from 'react'
import Ecomcard from '../components/Ecomcard';
import '../index.css'

const Mens = () => {
  const [data, setData] = useState([]);

  const url = 'https://dummyjson.com/products/category/mens-shirts'; // you can change this

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result.products); // array of products
      
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    }

    getData();
  }, []);

  return (
    <div className='main-category-screen'  style={{
      width: '100%',
      backgroundColor: "#f4f4f4",
      display: 'flex',
      flexWrap: "wrap",
      justifyContent: 'center',
      gap: "30px",
      padding: "40px 20px"
     


    }}>
      {data.map((item, index) => (
        <Ecomcard item={item} key={item.id} />
      ))}
    </div>
  );
}

export default Mens
