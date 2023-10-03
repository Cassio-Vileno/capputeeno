"use client";

import styled from "styled-components";

export const Logo = styled.a`
  color: #5D5D6D;
  font-size: 40px;
  font-weight: 400;
  line-height: 150%;
`;

export const ContainerInput = styled.div`
  position: relative;
  width: 250px;

  svg {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }

  @media (min-width: ${props => props.theme.desktopBreakpoint}) {
    width: 352px;
  }
`;

export const PrimearyInput = styled.input`
  background-color: var(--bg-secundary);
  width: 100%;
  border: none;
  outline: none;
  border-radius: 8px;
  padding: 10px 16px;

  font-family: inherit;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: var(--text-dark);

  @media (min-width: ${props => props.theme.desktopBreakpoint}) {
    font-size: 14px;
    line-height: 22px;
  }
`;

