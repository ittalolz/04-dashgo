import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Íttalo L. Steltter</Text>
        <Text color="gray.300" fontSize="small">ittalolz@gmail.com</Text>
      </Box>

      <Avatar size="md" name="Íttalo L. Stelter" src="https://github.com/ittalolz.png"/>
    </Flex>
  );
}