"use client";

import React from "react";
import { HeaderContainer, Logo } from "./styles";
import { Saira_Stencil_One } from "next/font/google";
import PrymaryInput from "../PrymaryInput";
import CartControl from "../CartControl";
import { useFilter } from "@/hooks/useFilter";

const sairaStencil = Saira_Stencil_One({
  weight: ["400"],
  subsets: ["latin"],
});

function Header() {
  const { search, setSearch } = useFilter();
  return (
    <HeaderContainer>
      <Logo className={sairaStencil.className}>capputeeno</Logo>
      <div>
        <PrymaryInput
          value={search}
          handleChange={setSearch}
          placeholder="Procurando por algo específico?"
        />
        <CartControl />
      </div>
    </HeaderContainer>
  );
}

export default Header;
