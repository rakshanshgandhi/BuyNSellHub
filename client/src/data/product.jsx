import axios from "axios";

const fetchProducts = async () => {
  try {
    const response = await axios.get("http://localhost:8080/get-products");
    return response.data.products || [];
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

const products = async () => {
  const fetchedProducts = await fetchProducts();
  return fetchedProducts.map((item, index) => ({
    id : item.product_id, 
    name: item.name,
    category: item.category,
    price: item.price,
    productPath: item.productPath,
    description: item.description,
    studentId: item.studentId,
    offers : item.offers || []
  }));
};
export default products;
