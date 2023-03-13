import {
  Box,
  Button,
  Flex,
  Grid,
  Icon,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";

import { EditIcon, DeleteIcon, Search2Icon, AddIcon } from "@chakra-ui/icons";
import { GiBookshelf, GiBlackBook } from "react-icons/gi";
import LogoutButton from "../components/Logout";

const Dashboard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <Grid
        gap={[1, 2, 3, 5]}
        gridTemplateColumns={["0 auto", "10% auto", "17% auto", "22% auto"]}
        p={[0, 2, 3, 10]}
        h={"100vh"}
        backgroundColor="#eeeeee"
      >
        <Box
          w={"100%"}
          h={"100%"}
          backgroundColor="#fff"
          borderRadius={15}
          py={5}
          px={[0, 2, 5, 10]}
          display={{ base: "none", sm: "block" }}
        >
          <Flex direction="column" gap={20}>
            <GiBookshelf size={45} color="#f7a027" />
            <Flex direction="column" gap={80}>
              <Flex
                gap={3}
                backgroundColor={["none", "none", "#ededed"]}
                p={[0, 0, 2, 5]}
                borderRadius={10}
                _hover={{ backgroundColor: "#fdf0dd" }}
              >
                <Icon as={GiBlackBook} boxSize={25} color="#353535" />
                <Text
                  fontSize={["0", "0", "medium", "large"]}
                  fontWeight="medium"
                  textColor="#353535"
                >
                  Books
                </Text>
              </Flex>

              <Flex
                gap={3}
                p={[0, 0, 2, 5]}
                borderRadius={10}
                _hover={{ backgroundColor: "#fdf0dd" }}
              >
                <LogoutButton />
                <Text
                  fontSize={["0", "0", "medium", "large"]}
                  fontWeight="medium"
                  textColor="#353535"
                >
                  Log out
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Box>
        <Box w={"100%"}>
          <Grid
            gap={5}
            gridTemplateRows={["10% auto", "10% auto", "15% auto", "15% auto"]}
            h={["100vh", "98vh", "90vh"]}
          >
            <Box backgroundColor="#fff" borderRadius={18} p={[2, 3, 5]}>
              <Flex
                direction="row"
                align="center"
                justify="center"
                gap={[2, 2, 10]}
              >
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<Search2Icon boxSize={15} color="#6a6a6a" />}
                  />
                  <Input
                    type="text"
                    w={"auto"}
                    variant="filled"
                    placeholder="Search books"
                    rounded="xl"
                  />
                </InputGroup>
                <Button
                  leftIcon={<AddIcon />}
                  p={[4, 4, 6]}
                  textColor="white"
                  fontSize={["sm", "sm", "sm", "lg"]}
                  bgColor="#f5af4c"
                  _hover={{ bg: "#f7a027" }}
                  onClick={onOpen}
                >
                  Create
                </Button>
                <Modal isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Add New Book</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>hi</ModalBody>

                    <ModalFooter>
                      <Button
                        p={[4, 4, 5]}
                        textColor="white"
                        fontSize={["sm", "sm", "sm", "lg"]}
                        bgColor="#f5af4c"
                        _hover={{ bg: "#f7a027" }}
                        mr={3}
                      >
                        Save
                      </Button>
                      <Button variant="ghost" onClick={onClose}>
                        Close
                      </Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
                <Text display={{ base: "block", sm: "none" }}>
                  <LogoutButton />
                </Text>

                <Image
                  borderRadius="full"
                  boxSize={["30px", "40px", "50px"]}
                  src="https://bit.ly/dan-abramov"
                  alt="Dan Abramov"
                  display={{ base: "none", sm: "block" }}
                />
              </Flex>
            </Box>
            <Box
              backgroundColor="#fff"
              borderRadius={15}
              py={5}
              px={[2, 3, 5, 10]}
            >
              <TableContainer whiteSpace={"break-spaces"} maxWidth={"100%"}>
                <Table variant="unstyled">
                  <Thead>
                    <Tr>
                      <Th>Title</Th>
                      <Th>Description</Th>
                      <Th>Action</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr _hover={{ backgroundColor: "#fdf0dd" }}>
                      <Td>Bridgerton Series: Duke and I</Td>
                      <Td>A romantic series</Td>
                      <Td>
                        <EditIcon boxSize={5} mr={3} />
                        <DeleteIcon boxSize={5} />
                      </Td>
                    </Tr>
                    <Tr _hover={{ backgroundColor: "#fdf0dd" }}>
                      <Td>Bridgerton Series: Duke and I</Td>
                      <Td>A romantic series</Td>
                      <Td>
                        <EditIcon boxSize={5} mr={3} />
                        <DeleteIcon boxSize={5} />
                      </Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </Box>
          </Grid>
        </Box>
      </Grid>
    </div>
  );
};

export default Dashboard;
