import styled from "styled-components";

export const Conatiner = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  section {
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 1300px;
    gap: 32px;
    flex-direction: column;
    margin-top: 24px;

     img {
      max-width: 640px;
     }

     > div {
      display: flex;
      justify-content: space-between;
      flex-direction: column;  
      max-width: 640px;
      
      button {
        border-radius: 4px;
        background: #115D8C;
        mix-blend-mode: multiply;
        color: white;
        border: none;
        cursor: pointer;
        padding: 10px 0;
        text-align: center;
        font-size: 16px;
        font-weight: 500;
        text-transform: uppercase;
        
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 12px;
        margin-top: 30px;
      }
     }
  }

  @media (min-width: 1100px) {
    section {
      flex-direction: row;

      img {
        max-width: 640px;
        width: 50%;
      }

      > div {
        button {
          margin: 0;
        }
      }
    }
  }
`;

export const ProductInfo = styled.div`
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;
      
      span {
        font-weight: 400;
        font-size: 16px;
        font-family: inherit;
        line-height: 150%;
        color: var(--text-dark-2);
      }

      h2 {
        color: var(--text-dark-2);
        font-family: inherit;
        font-size: 32px;
        font-weight: 300;
        line-height: 150%; 
        margin-top: 12px;
      }

      span:nth-of-type(2) {
        color: var(--shapes-dark);
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 24px;
      }

      p {
        color: var(--textos-dark);
        font-family: inherit;
        font-size: 12px;
        font-weight: 400;
        line-height: 150%; 
      }

      div {
        margin-top: 25px;
        h3 {
          text-transform: uppercase;
          color: var(--textos-dark);
          font-weight: 500;
          font-size: 16px;
        }

        p {
          font-size: 14px;
        }
      }
`;
