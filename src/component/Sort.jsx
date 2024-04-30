import { BsFillGridFill, BsList } from "react-icons/bs";
import { useFilterContext } from "../context/filtercontext";

function Sort() {
  let active = {
    backgroundColor: "black",
    color: "white",
  };

  let { grid_view, setListView, setGridView, filter_products, sorting ,sorting_value} =
    useFilterContext();
  return (
    <div className="row justify-content-between m-4">
      <div className="col ">
        <button style={grid_view ? active : null} onClick={setGridView}>
          <BsFillGridFill />
        </button>
        <button
          className="ms-3"
          style={!grid_view ? active : null}
          onClick={setListView}
        >
          {" "}
          <BsList />
        </button>
      </div>
      <div className="col">
        <p>
          <b>{filter_products.length}</b> Products Available
        </p>
      </div>
      <div className="col">
        <select onChange={sorting} id="sort">
          <option value="lowest" selected={sorting_value=="lowest"?true:false}>Price(lowest)</option>
          <option value="#" disabled></option>
          <option value="highest" selected={sorting_value=="highest"?true:false}>Price(highest)</option>
          <option value="#" disabled></option>
          <option value="A-Z" selected={sorting_value=="A-Z"?true:false}>Price(A-Z)</option>
          <option value="#" disabled></option>
          <option value="Z-A" selected={sorting_value=="Z-A"?true:false}>Price(Z-A)</option>
        </select>
      </div>
    </div>
  );
}

export default Sort;
