"use client";

import { useFilter } from "@/hooks/useFilter";
import { FilterItem, FilterList } from "./styles";
import { FilterType } from "@/types/filterTypes";

export interface FilterItensProps {
  selected: boolean;
}

function FilterByType() {
  const { type, setType } = useFilter();
  const handlechangeType = (value: FilterType) => {
    setType(value);
  };

  return (
    <FilterList>
      <FilterItem
        selected={type === FilterType.ALL}
        onClick={() => handlechangeType(FilterType.ALL)}
      >
        Todos os produtos
      </FilterItem>
      <FilterItem
        selected={type === FilterType.SHIRT}
        onClick={() => handlechangeType(FilterType.SHIRT)}
      >
        Camisetas
      </FilterItem>
      <FilterItem
        selected={type === FilterType.MUG}
        onClick={() => handlechangeType(FilterType.MUG)}
      >
        Canecas
      </FilterItem>
    </FilterList>
  );
}

export default FilterByType;
