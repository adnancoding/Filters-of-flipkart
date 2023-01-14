import React from "react";
import ListItem from "./ListItem";
import styled from "styled-components";

const List = ({ list }) => (
  <Containern>
    <div className="list-wrap">
      {list.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </div>
  </Containern>
);

export default List;
const Containern = styled.div`
  .list-wrap {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
  }
`;
