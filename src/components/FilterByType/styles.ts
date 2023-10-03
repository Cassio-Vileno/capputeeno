"use client";

import styled from "styled-components";
import { FilterItensProps } from "./Index";


export const FilterList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  list-style: none;
`;

export const FilterItem = styled.li<FilterItensProps>`
font-family: inherit;
font-weight: ${props => props.selected ? '600' : '400'};
font-size: 12px;
line-height: 18px; 
text-align: center;
text-transform: uppercase;
cursor: pointer;

color: var(--text-dark);

border-bottom: ${props => props.selected ? "4px  solid var(--orange-low)" : ''};

@media (min-width: ${props => props.theme.desktopBreakpoint}) {
  font-size: 16px;
  line-height: 22px;
}
`;