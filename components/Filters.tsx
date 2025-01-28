
'use client';

import { Input } from '@chakra-ui/react';

interface FiltersProps {
  setFilter: (filter: string) => void;
}

const Filters: React.FC<FiltersProps> = ({ setFilter }) => (
  <Input
    placeholder="Search by title"
    onChange={(e) => setFilter(e.target.value)}
    mb={4}
  />
);

export default Filters;


