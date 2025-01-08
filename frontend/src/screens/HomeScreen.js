// Is an object that has a render function
import axios from "axios";
import Rating from "../components/rating";
const HomeScreen = {
  render: async () => {
    const response = await axios({
      url: "http://localhost:5000/api/products",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response || response.statusText !== "OK") {
      return `<div>Error in getting data</div>`;
    }
    const products = response.data;

    return `
        <ul class="products">
        ${products
          .map(
            (product) => `
            <li>
                <div class="product">
                  <a href="/#/product/${product._id}">
                    <img src="${product.image}" alt="${product.name}" />
                  </a>
                  
                  <div class="product-name">
                    <a href="/#/product/${product._id}/">${product.name}</a>
                  </div>

                  <div class="product-rating">
                    ${Rating.render({
                      value: product.rating,
                      text: product.numReviews + " reviews",
                    })}
                  </div>

                  <div class="product-brand">${product.brand}</div>
                  <div class="product-price">$${product.price}</div>
                  
                </div>
            </li>
            `
          )
          // added join function because by default JavaScript will use toString method which will include the comma since
          // it is an array, but since we used join it will make it into one string but will be separated with a newline character
          .join("\n")}
        </ul>
        `;
  },
};

export default HomeScreen;
