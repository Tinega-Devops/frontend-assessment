"use client";

import { useGetCryptoDataQuery } from "../store/api";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { Box, Spinner, Text } from "@chakra-ui/react";

interface CryptoChartProps {
  coin: string;
  days: number;
}

const ChartArea: React.FC<CryptoChartProps> = ({ coin, days }) => {
  const { data: chartData, error, isLoading } = useGetCryptoDataQuery({ coin, days });

  if (isLoading) return <Spinner size="xl" mt={4} />;
  if (error) return <Text color="red.500">Failed to load data</Text>;

  return (
    <Box p={4} width="100%" >
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <XAxis dataKey="date" tick={{ fontSize: 12 }}/>
          <YAxis domain={["auto", "auto"]} tick={{ fontSize: 12 }} />
          <Tooltip />
          <CartesianGrid strokeDasharray="3 3" />
          <Line type="monotone" dataKey="price" stroke="#3182ce" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
      <Text mt={4} fontSize="sm" textAlign="center" color="gray.500">
        Data provided by CoinGecko
      </Text>
    </Box>
  );
};

export default ChartArea;
