import { useFilterContext } from "../context/filtercontext";
import "./FilterSection.css";
import './AddToCart'
import { FaCheck } from "react-icons/fa";

// import rupeeFormatter from 'rupee-formatter'

function FilterSection() {
  let {
    filter: { text, category, color },
    updateHandler,
    all_products,
    filter: { maxPrice, minPrice, price }, clearHandler
  } = useFilterContext();
  // console.log(color)

  let getValueArray = (data, property) => {
    let newData = data.map((item) => {
      return item[property];
    });
    newData = ["All", ...new Set(newData)];
    return newData;
  };
  let categoryDataArray = getValueArray(all_products, "category");
  let companyDataArray = getValueArray(all_products, "company");
  let colorDataArray = getValueArray(all_products, "colors").flat();
  let uniqueColorDataArray = [...new Set(colorDataArray)];
  return (
    <>
      <div className="mt-3">
        <input
          type="text"
          name="text"
          value={text}
          onChange={updateHandler}
          placeholder="SEARCH"
        />
      </div>

      {/* This is for the creating dynamic category */}

      <br />
      <h4>Category</h4>
      <nav className="nav flex-column">
        {categoryDataArray.map((data, i) => {
          return (
            <button
              style={{
                border: "none",
                backgroundColor: "white",
                color: "black",
                width: "30px",
              }}
              className={data === category ? "filter_btn_link" : null}
              key={i}
              name="category"
              value={data}
              onClick={updateHandler}
            >
              {data}
            </button>
          );
        })}
      </nav>
      <br />
      <h4>company</h4>
      <select onClick={updateHandler} name="company">
        {companyDataArray.map((data, i) => {
          return (
            <option key={i} value={data}>
              {data}
            </option>
          );
        })}
      </select>
      <br />
      <br />
      <h4>colors</h4>
      {
        uniqueColorDataArray.map((data, i) => {
          return <button name="color"
            style={{ backgroundColor: data === "All" ? "white" : data, opacity: 0.6, fontSize: "14px", margin: "4px", padding: '4px' }}
            className={
              color === data ? "add_cart_btn btn_active" : "add_cart_btn"
            }
            value={data}
            key={i} onClick={updateHandler}
          > {data === "All" ? data : ''}
            {color === data ? <FaCheck className="btn_check" /> : null}</button>
        })
      }
      <br />
      <br />
      <h4>Price</h4>
      {price}
      {/* {rupeeFormatter(price)} */}
      <br />
      <br />
      <input type="range" name="price" min={minPrice} max={maxPrice} value={price} onChange={updateHandler} />
      <br />
      <br />
      <button className="btn btn-danger" onClick={clearHandler} >CLEAR FILTERS</button>

    </>
  );
}

export default FilterSection;
