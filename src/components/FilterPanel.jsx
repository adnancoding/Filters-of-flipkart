import React from "react";
import { Checkbox } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import styled from "styled-components";

const FilterPanel = ({
  sizzes,
  brands,
  categories,
  changeChecked,
  changeCheckedSize,
  changeCheckedCategoriess,
}) => (
  <Containern>
    <div>
      <div className="list-group">
        <p className="label">Size</p>
        {sizzes.map((sizze) => (
          <FormControlLabel
            control={
              <Checkbox
                size="small"
                checked={sizze.checked}
                onChange={() => changeCheckedSize(sizze.id)}
                inputProps={{ "aria-label": "checkbox with small size" }}
              />
            }
            label={sizze.label}
          />
        ))}
        <hr />
      </div>

      <div className="list-group">
        <p className="label">Brand</p>
        {brands.map((brand) => (
          <FormControlLabel
            control={
              <Checkbox
                size="small"
                checked={brand.checked}
                onChange={() => changeChecked(brand.id)}
                inputProps={{ "aria-label": "checkbox with small size" }}
              />
            }
            label={brand.label}
          />
        ))}
        <hr />
      </div>
      <div className="list-group">
        <p className="label">Ideal for</p>
        {categories.map((category) => (
          <FormControlLabel
            control={
              <Checkbox
                size="small"
                checked={category.checked}
                onChange={() => changeCheckedCategoriess(category.id)}
                inputProps={{ "aria-label": "checkbox with small size" }}
              />
            }
            label={category.label}
          />
        ))}
        <hr />
      </div>
    </div>
  </Containern>
);

export default FilterPanel;
const Containern = styled.div`
  .label {
    margin-bottom: 0.8rem;
    font-weight: 600;
  }
  .list-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    font-size: 18px;
    .selct {
      width: 13vw;
    }
  }
  .label-range {
    margin-bottom: 2.5rem;
  }
`;
