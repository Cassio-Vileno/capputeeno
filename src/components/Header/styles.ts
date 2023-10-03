"use client";

import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
  }

  @media (min-width: ${props => props.theme.desktopBreakpoint}) {
    padding: 20px 160px;
  }
`;

export const Logo = styled.a`
  color: #5D5D6D;
  font-size: 20px;
  font-weight: 400;
  line-height: 150%;

  @media (min-width: ${props => props.theme.tabletBreakpoint}) {
    font-size: 24px;
  }

  @media (min-width: ${props => props.theme.desktopBreakpoint}) {
    font-size: 40px;
  }
`;

export const PrimearyInput = styled.input`
  background-color: var(--bg-secundary);
  width: 352px;
  border: none;
  outline: none;
  border-radius: 8px;
  padding: 10px 16px;

  font-family: inherit;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: var(--text-dark);
`;

