import { useState } from "react";
import AdminMenu from "../../components/AdminPage/AdminMenu";
import axios from "axios";
import Button from "../../components/Button";
import { toast } from "react-toastify";

function CreateProduct() {
  const [productImg, setProductImg] = useState("");
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState();
  const [discount, setDiscount] = useState("");
  const [featured, setFeatured] = useState(false);
  const [generalCategory, setGeneralCategory] = useState("shawl");
  const [genderCategory, setGenderCategory] = useState("men");
  const [stock, setStock] = useState(1);
  const [composition, setComposition] = useState("");
  const [weight, setWeight] = useState("");
  const [size, setSize] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleImageChange = (e) => {
    setProductImg(e.target.files[0]);
  };

  const handleNameChange = (e) => {
    setProductName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleDiscountChange = (e) => {
    setDiscount(e.target.value);
  };

  const handleFeaturedChange = (e) => {
    setFeatured(e.target.checked);
  };

  const handleGeneralCategoryChange = (e) => {
    setGeneralCategory(e.target.value);
  };

  const handleGenderCategoryChange = (e) => {
    setGenderCategory(e.target.value);
  };

  const handleStockChange = (e) => {
    setStock(e.target.value);
  };

  const handleCompositionChange = (e) => {
    setComposition(e.target.value);
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);

      const formData = new FormData();
      formData.append("productImg", productImg);
      formData.append("productName", productName);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("discount", discount);
      formData.append("featured", featured);
      formData.append("generalCategory", generalCategory);
      formData.append("genderCategory", genderCategory);
      formData.append("stock", stock);
      formData.append("composition", composition);
      formData.append("weight", weight);
      formData.append("size", size);

      const { data } = await axios.post("/api/v1/product", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (data.success) {
        toast.success("Product created sucessfully");
      }

      console.log(data);
    } catch (error) {
      toast.error("Fail to create product");
      console.log("error adding products", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <section className="container  flex justify-start items-start gap-10 mb-10 relative">
        <AdminMenu />
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Add Products</h2>
          <form
            onSubmit={handleSubmit}
            encType="multipart/form-data"
            className="border-2  p-10 grid grid-cols-3 gap-4 relative mt-10"
          >
            {/* <div className="flex gap-10"> */}
            <label htmlFor="productImg">Product Image:</label>
            <input
              className="col-span-2"
              type="file"
              id="productImg"
              accept="image/*"
              onChange={handleImageChange}
            />
            {/* </div> */}

            {/* <div className="flex gap-10"> */}
            <label htmlFor="productName">Product Name:</label>
            <input
              className=" border col-span-2 px-2"
              type="text"
              id="productName"
              onChange={handleNameChange}
            />
            {/* </div> */}

            {/* <div className="flex gap-10"> */}
            <label htmlFor="description">Description:</label>
            <textarea
              className=" border col-span-2 px-2"
              rows="6"
              id="description"
              onChange={handleDescriptionChange}
            ></textarea>
            {/* </div> */}

            {/* <div className="flex gap-10"> */}
            <label htmlFor="price">Price:</label>
            <input
              className=" border col-span-2  px-2"
              type="text"
              id="price"
              onChange={handlePriceChange}
            />
            {/* </div> */}

            {/* <div className="flex gap-10"> */}
            <label htmlFor="discount">Discount:</label>
            <input
              className=" border col-span-2 px-2"
              type="text"
              id="discount"
              onChange={handleDiscountChange}
            />
            {/* </div> */}

            {/* <div className="flex gap-10"> */}
            <label htmlFor="featured">Featured:</label>
            <div className="col-span-2 px-2 flex gap-3">
              <input
                className="   "
                type="checkbox"
                id="featured"
                checked={featured}
                onChange={handleFeaturedChange}
              />
              <p className="text-sm">
                Click to feature this product in the homepage
              </p>
            </div>

            {/* </div> */}

            {/* <div className="flex gap-10"> */}
            <label htmlFor="generalCategory">General Category:</label>
            <select
              className=" border px-3 col-span-2"
              id="generalCategory"
              value={generalCategory}
              onChange={handleGeneralCategoryChange}
            >
              <option value="shawl">Shawl</option>
              <option value="muffler">Muffler</option>
              <option value="poncho">Poncho</option>
              <option value="blanket">Blanket</option>
            </select>
            {/* </div> */}

            {/* <div className="flex gap-10"> */}
            <label htmlFor="genderCategory">Gender Category:</label>
            <select
              className=" border px-3 col-span-2"
              id="genderCategory"
              value={genderCategory}
              onChange={handleGenderCategoryChange}
            >
              <option value="men">Men</option>
              <option value="women">Women</option>
            </select>
            {/* </div> */}

            {/* <div className="flex gap-10"> */}
            <label htmlFor="stock">Stock:</label>
            <input
              className=" border col-span-2 px-2"
              type="number"
              id="stock"
              onChange={handleStockChange}
            />
            {/* </div> */}

            {/* <div className="flex gap-10"> */}
            <label htmlFor="composition">Composition:</label>
            <input
              className=" border col-span-2 px-2"
              type="text"
              id="composition"
              onChange={handleCompositionChange}
            />
            {/* </div> */}

            {/* <div className="flex gap-10"> */}
            <label htmlFor="weight">Weight:</label>
            <input
              className=" border col-span-2 px-2"
              type="text"
              id="weight"
              onChange={handleWeightChange}
            />
            {/* </div> */}

            {/* <div className="flex gap-10"> */}
            <label htmlFor="size">Size:</label>
            <input
              className=" border col-span-2 px-2"
              type="text"
              id="size"
              onChange={handleSizeChange}
            />
            {/* </div> */}

            <div>
              <Button disabled={isLoading}>Add Product</Button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default CreateProduct;
