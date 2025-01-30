"use client";

import { useState } from "react";
import { Container } from "@chakra-ui/react";
import CryptoChart from "../components/ChartArea";
import CryptoSelector from "../components/Filters";

const Home = () => {
  const [coin, setCoin] = useState("bitcoin");
  const [days, setDays] = useState(30);

  return (
    <>
      <Container maxW="container.lg" py={6}>
        <CryptoSelector coin={coin} setCoin={setCoin} days={days} setDays={setDays} />
        <CryptoChart coin={coin} days={days} />
      </Container>
    </>
  );
};

export default Home;
