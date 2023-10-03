"use client";

import { DefaltPageLayout } from "@/components/DefaltPage/styeles";
import { Container } from "./styles";
import BackButton from "@/components/BackButton";

function Cart() {
  return (
    <div>
      <DefaltPageLayout>
        <Container>
          <BackButton />
        </Container>
      </DefaltPageLayout>
    </div>
  );
}

export default Cart;
