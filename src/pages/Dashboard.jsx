import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
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
  ModalHeader,
  ModalOverlay,
  Spinner,
  Textarea,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { Search2Icon, AddIcon } from "@chakra-ui/icons";
import { GiBookshelf, GiBlackBook } from "react-icons/gi";
import LogoutButton from "../components/Logout";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import { ADD_BOOKS, GET_BOOKS } from "../Api/Queries";
import BookList from "../components/BookList";

const Dashboard = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });
  const { isOpen, onOpen, onClose } = useDisclosure(); //open and clode modal
  const [createBook, { loading }] = useMutation(ADD_BOOKS, {
    refetchQueries: [{ query: GET_BOOKS }], //Refresh book list when a book is added
  });
  const toast = useToast();
  const { name, description } = formData;

  //binding with the state
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (loading)
    return (
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="#fdddaf"
        color="#f18e02"
        size="xl"
        mx="50%"
        my="20%"
      />
    );

  //Submit the form and create a new book
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      createBook({ variables: { input: { name, description } } });
      toast({
        title: "Book created",
        description: `A new book has been added`,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      //close modal once a book is added
      if (isOpen === true) {
        onClose();
      }
      //empty the input field
      setFormData({ name: "", description: "" });
    } catch (error) {
      console.error(error);
      return toast({
        title: `${error.message}`,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

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
                    type="search"
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
                    <ModalBody mb={4}>
                      <form onSubmit={handleSubmit}>
                        <FormControl>
                          <FormLabel>Book name</FormLabel>
                          <Input
                            name="name"
                            value={`${formData?.name}`}
                            placeholder="Book name"
                            minLength={3}
                            required
                            onChange={handleInputChange}
                          />
                        </FormControl>

                        <FormControl mt={4} mb={10}>
                          <FormLabel>Description</FormLabel>
                          <Textarea
                            name="description"
                            value={`${formData?.description}`}
                            placeholder=" Description"
                            minLength={3}
                            required
                            onChange={handleInputChange}
                          />
                        </FormControl>
                        <Button
                          p={[4, 4, 5]}
                          textColor="white"
                          fontSize={["sm", "sm", "sm", "lg"]}
                          bgColor="#f5af4c"
                          _hover={{ bg: "#f7a027" }}
                          mr={3}
                          type="submit"
                        >
                          Save
                        </Button>
                        <Button variant="ghost" onClick={onClose}>
                          Close
                        </Button>
                      </form>
                    </ModalBody>
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
              <BookList />
            </Box>
          </Grid>
        </Box>
      </Grid>
    </div>
  );
};
// Protecting this dashboard route with the withAuthenticationRequired component provided by @auth0/auth0-react library.
export default withAuthenticationRequired(Dashboard, {
  onRedirecting: () => (
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="#fdddaf"
      color="#f18e02"
      size="xl"
      mx="50%"
      my="20%"
    />
  ),
});
