'use client';

import { useEffect, useState } from "react";
import { Box, Container, Spinner, Heading } from "@chakra-ui/react";
import HeaderComponent from "../components/Header";
import FooterComponent from "../components/Footer";
import Filters from "../components/Filters";
import { fetchPosts, Post } from "@/service/api";
import ChartArea from "../components/ChartArea";


export default function Home() {
  const [data, setData] = useState<Post[]>([]);
  const [filteredData, setFilteredData] = useState<Post[]>([]);
  const [filter, setFilter] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const loadPosts = async () => {
      const posts = await fetchPosts();
      setData(posts);
      setFilteredData(posts);
      setLoading(false);
    };
    loadPosts();
  }, []);

  useEffect(() => {
    setFilteredData(
      data.filter((post) => post.title.toLowerCase().includes(filter.toLowerCase()))
    );
  }, [filter, data]);

  return (
    <Box>
      <HeaderComponent />
      <Container maxW="container.lg" py={6}>
        <Heading as="h2" size="md" mb={4}>
          Interactive Data Visualization
        </Heading>
        <Filters setFilter={setFilter} />
        {loading ? (
          <Spinner size="xl" />
        ) : filteredData.length > 0 ? (
          <ChartArea data={filteredData} />
        ) : (
          <Heading as="h3" size="sm" mt={4}>
            No data matches the filter criteria.
          </Heading>
        )}
      </Container>
      <FooterComponent />
    </Box>
  );
}