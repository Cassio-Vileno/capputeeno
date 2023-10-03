"use client";

import FilterByPriority from "../FilterByPriority";
import FilterByType from "../FilterByType/Index";
import { FilterContainer } from "./styles";

function FilterBar() {
  return (
    <FilterContainer>
      <FilterByType />
      <FilterByPriority />
    </FilterContainer>
  );
}

export default FilterBar;
