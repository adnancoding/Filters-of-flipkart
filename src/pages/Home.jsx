import React, { useEffect, useState } from "react";
import EmptyView from "../components/EmptyView";
import FilterPanel from "../components/FilterPanel";
import List from "../components/List";
import { dataList } from "../productsData";
import styled from "styled-components";
import flipkartlogo from "../assets/flipkartlogo.png";

const Home = () => {
  
  const [asart, setAsart] = useState("");  
  const [dsart, setDsart] = useState("");  
  const [brands, setBrands] = useState([
    { id: 1, checked: false, label: "Addidas" },
    { id: 2, checked: false, label: "Gucci" },
    { id: 3, checked: false, label: "Zara" },
  ]);
  const [sizzes, setSizzes] = useState([
    { id: 1, checked: false, label: "S" },
    { id: 2, checked: false, label: "M" },
    { id: 3, checked: false, label: "L" },
  ]);
  const [categories, setCategories] = useState([
    { id: 1, checked: false, label: "Men" },
    { id: 2, checked: false, label: "Women" },
    { id: 3, checked: false, label: "Kid" },
  ]);
  const [list, setList] = useState(dataList);
  const [resultsFound, setResultsFound] = useState(true);

  //to handle checked brands
  const handleChangeChecked = (id) => {
    const brandsStateList = brands;
    const changeCheckedBrands = brandsStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setBrands(changeCheckedBrands);
  };
  
  //to handle checked Size
  const handleChangeCheckedSize = (id) => {
    const sizzesStateList = sizzes;
    const changeCheckedSizzes = sizzesStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setSizzes(changeCheckedSizzes);
  };

  //to handle checked Ideal for category
  const handleChangeCheckedCateg = (id) => {
    const categoriessStateList = categories;
    const changeCheckedCategoriess = categoriessStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setCategories(changeCheckedCategoriess);
  };

  //to sort list in lowest to highest price
  const handleSort = () => {                        
    const list = dataList;
    const changelist = [...list].sort((a, b) => a.price - b.price);
    setAsart(changelist);
  };

  //to sort list in highest to lowest price
  const handleDsort = () => {
    const list = dataList;
    const changelist = [...list].sort((a, b) => b.price - a.price);
    setDsart(changelist);
  };

  //to apply filters on list 
  const applyFilters = () => {
    let updatedList = dataList;

    //update list in lowest to highest price
    const navolist = asart;
    if (navolist.length) {
      updatedList = navolist;
    }
    //update list in highest to lowest price
    const navodlist = dsart;
    if (navodlist.length) {
      updatedList = navodlist;
    }

    // update list according to brand checked
    const brandsChecked = brands
      .filter((item) => item.checked)
      .map((item) => item.label.toLowerCase());

    if (brandsChecked.length) {
      updatedList = updatedList.filter((item) =>
        brandsChecked.includes(item.brand)
      );
    }

    //update list according to size checked
    const sizzesChecked = sizzes
      .filter((item) => item.checked)
      .map((item) => item.label.toLowerCase());

    if (sizzesChecked.length) {
      updatedList = updatedList.filter((item) =>
        sizzesChecked.includes(item.sizze)
      );
    }

    //update list according to ideal for category checked
    const categoriesChecked = categories
      .filter((item) => item.checked)
      .map((item) => item.label.toLowerCase());

    if (categoriesChecked.length) {
      updatedList = updatedList.filter((item) =>
        categoriesChecked.includes(item.category)
      );
    }

    //setting list according to updated list
    setList(updatedList);

    //to show that product is not available
    !updatedList.length ? setResultsFound(false) : setResultsFound(true);
  };

  // to Clear all filters
  const clearAll = () => {
    setAsart("");
    setDsart("");
    setCategories([
      { id: 1, checked: false, label: "Men" },
      { id: 2, checked: false, label: "Women" },
      { id: 3, checked: false, label: "Kid" },
    ]);
    setBrands([
      { id: 1, checked: false, label: "Addidas" },
      { id: 2, checked: false, label: "Gucci" },
      { id: 3, checked: false, label: "Zara" },
    ]);
    setSizzes([
      { id: 1, checked: false, label: "S" },
      { id: 2, checked: false, label: "M" },
      { id: 3, checked: false, label: "L" },
    ]);
  };

  useEffect(() => {
    applyFilters();
  }, [brands, sizzes, categories, asart, dsart]);

  return (
    <Containern>
      <div className="navbar">
        <img src={flipkartlogo} alt="logo" className="logo" />
        <input type="text" placeholder="search here.. " />
        <button>
          <b>Logout</b>
        </button>
      </div>
      <div className="sorting-panel">
        <h2>
          <b>Sort By </b>
        </h2>
        <button onClick={handleSort}>
          <h2>Price -- Low to High</h2>
        </button>
        <button onClick={handleDsort}>
          <h2>Price -- High to Low</h2>
        </button>
      </div>
      <div className="home_panelList-wrap">
        <div className="home_panel-wrap">
          <div className="clear-filters">
            <h3>Filters</h3>
            <button onClick={clearAll}> Clear All</button>
          </div>
          <hr />
        {/* Filter panel */}
          <FilterPanel
            brands={brands}
            sizzes={sizzes}
            categories={categories}
            changeChecked={handleChangeChecked}
            changeCheckedSize={handleChangeCheckedSize}
            changeCheckedCategoriess={handleChangeCheckedCateg}
          />
        </div>
        {/* List & Empty View */}
        <div className="home_list-wrap">
          {resultsFound ? <List list={list} /> : <EmptyView />}
        </div>
      </div>
    </Containern>
  );
};

export default Home;

const Containern = styled.div`
  .navbar {
    display: flex;
    flex-direction: row;
    position: relative;
    width: 100%;
    height: 66px;
    margin-bottom: 2px;
    background: #027cd5;
    img {
      height: 6vh;
      width: 11vw;
      margin-left: 254px;
    }
    input {
      height: 3vh;
      width: 16vw;
      margin-top: 15px;
      margin-bottom: 2px;
      border-style: hidden;
    }
    button {
      position: relative;
      left: 15%;
      height: 3vh;
      top: 15px;
      background: white;
      border: none;
      color: #027cd5;
      margin-right: 2px;
    }
  }
  .home_panelList-wrap,
  .home_panel-wrap,
  .home_list-wrap {
    overflow-y: auto;
  }

  .home_panelList-wrap {
    display: flex;
  }
  .home_panel-wrap {
    flex-basis: 280px;
    padding: 1rem;

    .clear-filters {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: 17px;
      button {
        background: none;
        border: none;
        cursor: pointer;
        color: #2874f0;
        font-size: 17px;
        text-transform: uppercase;
        font-weight: 500;
      }
    }
  }
  .home_list-wrap {
    flex: 1;
    padding: 1rem;
  }
  .sorting-panel {
    position: relative;
    display: flex;
    flex-direction: row;
    margin-left: 20%;
    top: 5px;
  }
  .sorting-panel button {
    background: white;
    color: #212121;
    border: none;
    cursor: pointer;
    margin-left: 31px;
  }
`;
