import { Box, Heading } from "@chakra-ui/react";

const Header = () => (
  <Box bg="blue.500" color="white" py={4} textAlign="center" shadow="md">
    <Heading as="h1" size="lg">
      Data Visualization App
    </Heading>
  </Box>
);

export default Header;

