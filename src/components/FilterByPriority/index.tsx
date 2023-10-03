import { useState } from "react";
import ArrowIcon from "../svg/ArrowIcon";
import { FilterContainer, PriorityFilter } from "./styles";
import { useFilter } from "@/hooks/useFilter";
import { PriorityTypes } from "@/types/priorityTypes";

function FilterByPriority() {
  const [isOpen, setisOpen] = useState(false);
  const { setPriority } = useFilter();

  const handleOpen = () => setisOpen((prev) => !prev);
  const handleUpdatepriority = (value: PriorityTypes) => {
    setPriority(value);
    handleOpen();
  };

  return (
    <FilterContainer>
      <button onClick={handleOpen}>
        Organizar por
        <ArrowIcon />
      </button>

      {isOpen && (
        <PriorityFilter>
          <li onClick={() => handleUpdatepriority(PriorityTypes.NEWS)}>
            Novidades
          </li>
          <li onClick={() => handleUpdatepriority(PriorityTypes.BIGGEST_PRICE)}>
            Preço: Maior - menor
          </li>
          <li onClick={() => handleUpdatepriority(PriorityTypes.MINOR_PRICE)}>
            Preço: Menor - maior
          </li>
          <li onClick={() => handleUpdatepriority(PriorityTypes.POPULARITY)}>
            Mais vendidos
          </li>
        </PriorityFilter>
      )}
    </FilterContainer>
  );
}

export default FilterByPriority;
