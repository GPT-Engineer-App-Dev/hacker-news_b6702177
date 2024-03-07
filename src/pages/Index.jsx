import React, { useState } from "react";
import { Box, Heading, Link, Text, Flex, Spacer, VStack, HStack, IconButton } from "@chakra-ui/react";
import { FaHeart, FaComment } from "react-icons/fa";

const stories = [
  {
    id: 1,
    title: "Show HN: My New Project",
    url: "https://example.com",
    points: 42,
    author: "johndoe",
    numComments: 5,
  },
  {
    id: 2,
    title: "Ask HN: How to Learn React?",
    url: "https://example.com",
    points: 28,
    author: "janedoe",
    numComments: 12,
  },
  // Add more sample stories...
];

const Index = () => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (storyId) => {
    if (favorites.includes(storyId)) {
      setFavorites(favorites.filter((id) => id !== storyId));
    } else {
      setFavorites([...favorites, storyId]);
    }
  };

  return (
    <Box maxW="800px" mx="auto" p={4}>
      <Heading as="h1" size="xl" mb={4}>
        Hacker News
      </Heading>
      <VStack spacing={4} align="stretch">
        {stories.map((story) => (
          <Box key={story.id} borderWidth={1} borderRadius="md" p={4}>
            <Flex align="center">
              <Link href={story.url} fontWeight="bold" fontSize="lg">
                {story.title}
              </Link>
              <Spacer />
              <IconButton icon={<FaHeart />} variant="ghost" colorScheme={favorites.includes(story.id) ? "red" : "gray"} onClick={() => toggleFavorite(story.id)} aria-label="Favorite" />
            </Flex>
            <HStack mt={2} spacing={4} fontSize="sm" color="gray.500">
              <Text>{story.points} points</Text>
              <Text>by {story.author}</Text>
              <Flex align="center">
                <FaComment />
                <Text ml={1}>{story.numComments} comments</Text>
              </Flex>
            </HStack>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Index;
