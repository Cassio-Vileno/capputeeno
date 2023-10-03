"use client";

import React, { InputHTMLAttributes } from "react";
import { ContainerInput, PrimearyInput } from "./styles";
import SearchIcon from "../svg/searchIcon";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  handleChange: (value: string) => void;
}

function PrymaryInput(props: InputProps) {
  return (
    <ContainerInput>
      <PrimearyInput
        onChange={(event) => props.handleChange(event.target.value)}
        {...props}
      />
      <SearchIcon />
    </ContainerInput>
  );
}

export default PrymaryInput;
