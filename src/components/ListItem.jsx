import React from "react";
import styled from "styled-components";

const ListItem = ({
  item: { coverSrc, title, price, brand, sizze, category },
}) => (
  <Containern>
    <div className="listItem-wrap">
      <img src={coverSrc} alt="" />
      <p>{brand}</p>
      <header>
        <h4>{title}</h4>
        <span>{category}</span>
      </header>
      <h3>
        <b>₹{price}</b>
      </h3>
      <p>Size: {sizze}</p>
    </div>
  </Containern>
);
export default ListItem;
const Containern = styled.div`
  .listItem-wrap {
    margin-left: 8px;
    margin-right: -27px;
    padding-right: 60px;
  }
  .listItem-wrap img {
    width: 103%;
    height: 300px;
    object-fit: cover;
  }
  .listItem-wrap span {
    text-transform: uppercase;
    color: #878787;
  }
  .listItem-wrap p {
    text-transform: uppercase;
    color: #878787;
  }
  .listItem-wrap header {
    display: flex;
    justify-content: space-between;
    margin: 1rem 0 1rem 0;
    align-items: center;
  }
`;
