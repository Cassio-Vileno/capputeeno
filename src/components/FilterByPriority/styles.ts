import styled from "styled-components";

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  width: 175px;

  button {
    font-family: '__Saira_2a22a9', '__Saira_Fallback_2a22a9';
    border: none;
    background: transparent;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: var(--text-dark);
    cursor: pointer;

    display: flex;
    align-items: center;
  }
`;

export const PriorityFilter = styled.ul`
  position: absolute;
  padding: 12px 16px;
  z-index: 999;
  
  list-style: none;

  border-radius: 4px;
  background:#FFF;
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.10);

  top: 100%;
  right: 8px;

  li {
    color: var(--text-dark);
    font-family: inherit;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    cursor: pointer;
  }

  li + li {
    margin-top: 4px;
  }
`;