import { Select, VStack } from "@chakra-ui/react";

interface CryptoSelectorProps {
  coin: string;
  setCoin: (coin: string) => void;
  days: number;
  setDays: (days: number) => void;
}

const Filters: React.FC<CryptoSelectorProps> = ({ coin, setCoin, days, setDays }) => {
  return (
    <VStack spacing={4} align="start">
      <Select value={coin} onChange={(e) => setCoin(e.target.value)} maxW="sm">
        <option value="bitcoin">Bitcoin (BTC)</option>
        <option value="ethereum">Ethereum (ETH)</option>
        <option value="cardano">Cardano (ADA)</option>
        <option value="solana">Solana (SOL)</option>
      </Select>

      <Select value={days} onChange={(e) => setDays(Number(e.target.value))} maxW="sm">
        <option value={7}>Last 7 Days</option>
        <option value={30}>Last 30 Days</option>
        <option value={90}>Last 90 Days</option>
      </Select>
    </VStack>
  );
};

export default Filters;

