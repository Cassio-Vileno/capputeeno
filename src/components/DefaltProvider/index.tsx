"use client";

import { FilterContextProvider } from "@/contexts/FilterContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

interface DefaltProviderProps {
  children: ReactNode;
}

const theme = {
  desktopBreakpoint: "968px",
  tabletBreakpoint: "768px",
};

function DefaltProvider({ children }: DefaltProviderProps) {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <FilterContextProvider>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </FilterContextProvider>
    </QueryClientProvider>
  );
}

export default DefaltProvider;
