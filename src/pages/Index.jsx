import { Box, Flex, Image, Text, VStack, Heading, Container } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction="column" align="center" justify="center" h="100vh" bg="white">
        <Box as="header" w="full" p={4} bg="blue.800">
          <Heading size="lg" color="white">Welcome to Värmdö</Heading>
        </Box>
        <VStack spacing={4} p={4} align="center" justify="center" flexGrow={1}>
          <Text fontSize="2xl" color="gray.700">Explore the beauty of summer in Värmdö</Text>
          <Flex direction={{ base: "column", md: "row" }} w="full" align="center" justify="center">
            <Image src="/images/varmdo-summer1.jpg" boxSize="300px" borderRadius="lg" m={2} alt="Värmdö Summer Scene 1" />
            <Image src="/images/varmdo-summer2.jpg" boxSize="300px" borderRadius="lg" m={2} alt="Värmdö Summer Scene 2" />
          </Flex>
        </VStack>
        <Box as="footer" w="full" p={4} bg="blue.700" color="white">
          <Text align="center">Visit Värmdö - The heart of Swedish summer</Text>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;