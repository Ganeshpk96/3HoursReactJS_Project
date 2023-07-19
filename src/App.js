import React from 'react'
import { useEffect, useState } from 'react';
import './App.css';
import './bootstrap.min.css';


const App = () => {
  const [GlobalSize, setGlobalSize] = useState();
  const [GetData, setGetDate] = useState([]);
  const [gettotalSum, setgettotalSum] = useState();
  let totalSum = [];
  
const Dummy_Products = [
  {
    id: "p1",
    title: "T shirt Blue",
    price: 1000,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Blue_Tshirt.jpg/220px-Blue_Tshirt.jpg',
    size: {
      M: 'M',
      L: 'L',
      XL: 'XL',
      XXL: 'XXL',
    },
    description:
      "Harmony's Melody: Immerse yourself in the enchanting melodies of Harmony's Melody. This soul-stirring album brings together a symphony of captivating sounds, weaving together intricate harmonies and evoking a range of emotions. Let the music transport you to a world of serenity and bliss.",
  },
  {
    id: "p2",
    title: "T shirt Red",
    price: 1100,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Blue_Tshirt.jpg/220px-Blue_Tshirt.jpg',
    size: {
      M: 'M',
      L: 'L',
      XL: 'XL',
      XXL: 'XXL',
    },
    description:
      "Harmony's Melody: Immerse yourself in the enchanting melodies of Harmony's Melody. This soul-stirring album brings together a symphony of captivating sounds, weaving together intricate harmonies and evoking a range of emotions. Let the music transport you to a world of serenity and bliss.",
  },
  {
    id: "p3",
    title: "T shirt Orange",
    price: 900,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Blue_Tshirt.jpg/220px-Blue_Tshirt.jpg',
    size: {
      M: 'M',
      L: 'L',
      XL: 'XL',
      XXL: 'XXL',
    },
    description:
      "Harmony's Melody: Immerse yourself in the enchanting melodies of Harmony's Melody. This soul-stirring album brings together a symphony of captivating sounds, weaving together intricate harmonies and evoking a range of emotions. Let the music transport you to a world of serenity and bliss.",
  },
  {
    id: "p4",
    title: "T shirt Black",
    price: 600,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Blue_Tshirt.jpg/220px-Blue_Tshirt.jpg',
    size: {
      M: 'M',
      L: 'L',
      XL: 'XL',
      XXL: 'XXL',
    },
    description:
      "Harmony's Melody: Immerse yourself in the enchanting melodies of Harmony's Melody. This soul-stirring album brings together a symphony of captivating sounds, weaving together intricate harmonies and evoking a range of emotions. Let the music transport you to a world of serenity and bliss.",
  },
  {
    id: "p5",
    title: "T shirt White",
    price: 400,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Blue_Tshirt.jpg/220px-Blue_Tshirt.jpg',
    size: {
      M: 'M',
      L: 'L',
      XL: 'XL',
      XXL: 'XXL',
    },
    description:
      "Harmony's Melody: Immerse yourself in the enchanting melodies of Harmony's Melody. This soul-stirring album brings together a symphony of captivating sounds, weaving together intricate harmonies and evoking a range of emotions. Let the music transport you to a world of serenity and bliss.",
  },
];

const handlesize = (val) => {
    console.log(val);
    setGlobalSize(val);
    
}
const handleCart = async (id, title, price) => {
  if(GlobalSize) {
    console.log(id, title, price, GlobalSize);
    console.log(id, title, price, GlobalSize);
  const details = {
    id: id,
    title: title,
    price: price,
    size: GlobalSize
  }
  console.log(details);
  setGlobalSize('');
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  const url = 'https://crudcrud.com/api/465e2e15c25249088be48d8bacb02df6/details';
  const response = await fetch(proxyUrl + url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(details),
  });
  const responseData = await response.json();
  getData();
  
 




  } else {
    alert("Please select the size before adding to card");
    return false;
  }
  
   
  

}
useEffect(()=> {
  getData();
 
}, [])

const getData = async () => {
  const url = 'https://crudcrud.com/api/465e2e15c25249088be48d8bacb02df6/details';
  const response = await fetch(url);
  const responseData = await response.json();
  console.log(responseData);
  setGetDate(responseData);
  totalSum = responseData.reduce((acc, item) => acc + item.price, 0);
    setgettotalSum(totalSum);
};
// const createAddtocartDetails = async (data, id, title, price, GlobalSize) => {
//   console.log(data, id, title, price, GlobalSize);
//   const details = {
//     id: id,
//     title: title,
//     price: price,
//     size: GlobalSize
//   }
//   console.log(details);
//   const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
//   const url = 'https://crudcrud.com/api/020721186d424e7e96a42ff0dbd2ba0e/details';
//   const response = await fetch(proxyUrl + url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data),
//   });
//   const responseData = await response.json();
//   return responseData;
// };
  
  return (
    <div className="App">
       <div className='row'>
       <div className='col-md-8'>
       {Dummy_Products.map((item, index)=> {
        return (
          <div key={index} className='row ProductDetails'>
          <div className='col-md-4'>
          <img src={item.imageUrl} />
          </div>
          <div className='col-md-4'>
          <h3>product Details : <b>{item.title}</b></h3>
          <p>{item.description}</p>
   
           <h4>Select Size</h4>
           <div className='sizeOption'>
           <span onClick={()=> handlesize(item.size.M)}> {item.size.M}</span>
           <span onClick={()=> handlesize(item.size.L)}> {item.size.L}</span>
           <span onClick={()=> handlesize(item.size.XL)}> {item.size.XL}</span>
           <span onClick={()=> handlesize(item.size.XXL)}> {item.size.XXL}</span>
           </div>
           <h3>Price: {item.price}</h3>
          </div>
          <div className='col-md-4'>
          <button className='btn btn-primary' onClick={()=> handleCart(item.id, item.title, item.price)}>ADD TO CART </button>
          </div>
          </div>
        )
       })}
       
       </div>
       <div className='col-md-4'>
       <h3>Cart Details</h3>
       <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">Size</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
  {GetData.map((item, index) => {
    
    return (
      <tr key={index}>
      <th scope="row">{index+1}</th>
      <td>{item.title}</td>
      <td>{item.size}</td>
      <td>{item.price}</td>
    </tr>
    )
  })}
  </tbody>
  </table>
  <table className="table">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col"></th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
   <tbody>
   <tr>
      <td> </td>
      <td> </td>
      <td> </td>
      <td>Total</td>
      <td> {gettotalSum}</td>
    </tr>
   
    
    
     
  </tbody>
</table>
  
       </div>
       </div>
    </div>
  );
}

export default App;
