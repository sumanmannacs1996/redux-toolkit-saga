import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCatsStart } from "../featurs/catsSlice";

function CatsUI() {
  const dispatch = useDispatch();

  const { cats, isLoading, error } = useSelector((state) => state.cats);
  const [catList, setCatList] = useState([]);

  useEffect(() => {
    const queryParams = {
      fName: "Suman",
      lName: "Manna",
    };
    dispatch(fetchCatsStart(queryParams));
  }, []);

  useEffect(() => {
    setCatList(cats);
  }, [cats]);

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div>
      <h1>Cats Breed Details</h1>
      {isLoading ? (
        <div>
          <h2>Loading.....</h2>
        </div>
      ) : (
        <div>
          {catList.map((cat) => (
            <div
              style={{
                background: "#ccc",
                borderRadius: "5px",
                padding: "10px 15px",
                margin: "20px",
                boxShadow: "1px 2px 3px 4px rgba(0,0,0,0.4)",
              }}
            >
              <h2>{cat.name}</h2>
              <p>{cat.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CatsUI;
