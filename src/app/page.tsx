"use client";

import { DefaltPageLayout } from "@/components/DefaltPage/styeles";
import FilterBar from "@/components/FilterBar";
import ProductsList from "@/components/ProductsList";
import styled from "styled-components";

const PageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Home() {
  return (
    <DefaltPageLayout>
      <PageWrapper>
        <FilterBar />
        <ProductsList />
      </PageWrapper>
    </DefaltPageLayout>
  );
}
