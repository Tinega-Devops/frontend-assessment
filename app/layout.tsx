import './globals.css';
import { ChakraProvider, Box, Flex } from '@chakra-ui/react';
import StoreProvider from './providers';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
          <StoreProvider>
            <Flex direction="column" minH="100vh">
              <Header />
              <Box flex="1" p={6}>
                {children}
              </Box>
              <Footer />
            </Flex>
          </StoreProvider>
        </ChakraProvider>
      </body>
    </html>
  );
}


