"use client";
import { FilterType } from "@/types/filterTypes";
import { useState } from "react";
import { ProviderProps, FilterContext } from "./FilterContext";

export function FilterContextProvider({ children }: ProviderProps) {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [type, setType] = useState(FilterType.ALL);
  const [priority, setPriority] = useState(FilterType.ALL);

  return (
    <FilterContext.Provider
      value={{
        search,
        page,
        type,
        setPage,
        setType,
        setSearch,
        priority,
        setPriority,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
