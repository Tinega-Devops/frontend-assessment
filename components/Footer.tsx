import { Box, Text, Flex } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box
      as="footer"
      bg="gray.800"
      py={4}
      px={6}
      color="white"
      position="relative"
      bottom="0"
      width="100%"
      mt="auto"
    >
      <Flex justify="center" align="center">
        <Text fontSize="sm">© {new Date().getFullYear()} Built with ❤️ using Next.js, Chakra UI, and Recharts.</Text>
      </Flex>
    </Box>
  );
};

export default Footer;


