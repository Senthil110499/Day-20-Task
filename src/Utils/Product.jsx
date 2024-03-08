import React, { useState } from 'react'

export const ProductContext = React.createContext(null);

function Product({ children }) {
    //useState to update the state value
     const [data, setData] = useState({
       products: [
         {
           id: 1,
           title: "iPhone 9",
           description: "An apple mobile which is nothing like apple",
           price: 549,
           discountPercentage: 12.96,
           rating: 4.69,
           stock: 94,
           brand: "Apple",
           category: "smartphones",
           thumbnail:
             "https://specs-tech.com/wp-content/uploads/2020/01/iPhone-9-600x600.jpg",
           images: [
             "https://i.dummyjson.com/data/products/1/1.jpg",
             "https://i.dummyjson.com/data/products/1/2.jpg",
             "https://i.dummyjson.com/data/products/1/3.jpg",
             "https://i.dummyjson.com/data/products/1/4.jpg",
             "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
           ],
         },
         {
           id: 2,
           title: "iPhone X",
           description:
             "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
           price: 899,
           discountPercentage: 17.94,
           rating: 4.44,
           stock: 34,
           brand: "Apple",
           category: "smartphones",
           thumbnail:
             "https://tshop.r10s.com/cee/078/027c/b88c/508d/f7bc/eba5/11cce899752c600c429092.jpg",
           images: [
             "https://i.dummyjson.com/data/products/2/1.jpg",
             "https://i.dummyjson.com/data/products/2/2.jpg",
             "https://i.dummyjson.com/data/products/2/3.jpg",
             "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
           ],
         },
         {
           id: 3,
           title: "Samsung Universe 9",
           description:
             "Samsung's new variant which goes beyond Galaxy to the Universe",
           price: 1249,
           discountPercentage: 15.46,
           rating: 4.09,
           stock: 36,
           brand: "Samsung",
           category: "smartphones",
           thumbnail: "https://i5.walmartimages.com/asr/80aad70e-23d9-4bac-b938-2a64c5e7a563.2e769bfe8c5e1dc83053b6edb4d053ff.jpeg",
           images: ["https://i.dummyjson.com/data/products/3/1.jpg"],
         },
         {
           id: 4,
           title: "OPPOF19",
           description: "OPPO F19 is officially announced on April 2021.",
           price: 280,
           discountPercentage: 17.91,
           rating: 4.3,
           stock: 123,
           brand: "OPPO",
           category: "smartphones",
           thumbnail:
             "https://specifications-pro.com/wp-content/uploads/2021/01/Oppo-F19-Pro.jpg",
           images: [
             "https://i.dummyjson.com/data/products/4/1.jpg",
             "https://i.dummyjson.com/data/products/4/2.jpg",
             "https://i.dummyjson.com/data/products/4/3.jpg",
             "https://i.dummyjson.com/data/products/4/4.jpg",
             "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
           ],
         },
         {
           id: 5,
           title: "Huawei P30",
           description:
             "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
           price: 499,
           discountPercentage: 10.58,
           rating: 4.09,
           stock: 32,
           brand: "Huawei",
           category: "smartphones",
           thumbnail:
             "https://images-na.ssl-images-amazon.com/images/I/61XM1qbUPUL._SL1000_.jpg",
           images: [
             "https://i.dummyjson.com/data/products/5/1.jpg",
             "https://i.dummyjson.com/data/products/5/2.jpg",
             "https://i.dummyjson.com/data/products/5/3.jpg",
           ],
         },
       ],
     });
  return (
      <>
          <ProductContext.Provider value={{ data, setData }}>
              {children}
         </ProductContext.Provider>
      </>
  )
}

export default Product;