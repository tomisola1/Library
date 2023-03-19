import { useMutation, useQuery } from "@apollo/client";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  useToast,
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Table,
  TableContainer,
  Tbody,
  Td,
  Textarea,
  Th,
  Thead,
  Tr,
  useDisclosure,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { GET_BOOKS, DELETE_BOOKS, UPDATE_BOOKS } from "../Api/Queries";

const BookList = () => {
  const [bookId, setBookId] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const getBooks = useQuery(GET_BOOKS); //Api to get list of books
  const [deleteBooks, { data }] = useMutation(DELETE_BOOKS); //Api to delete books
  const [updateBooks] = useMutation(UPDATE_BOOKS, {
    refetchQueries: [{ query: GET_BOOKS }], //Refresh list of books when a book is updated
  });
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });
  const { name, description } = formData;

  if (getBooks.loading)
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
  if (getBooks.error)
    return toast({
      title: `${getBooks.error.message}`,
      status: "error",
      duration: 3000,
      isClosable: true,
    });

  const handleDelete = () => {
    try {
      deleteBooks({ variables: { id: bookId } });
      console.log(data);
      toast({
        title: "Book deleted",
        description: `Book ${bookId} has been deleted`,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      window.location.reload();
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

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      console.log(bookId);
      updateBooks({ variables: { id: bookId, input: { name, description } } });

      toast({
        title: "Book updated",
        description: `Book ${bookId} has been updated`,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      if (isOpen === true) {
        onClose();
      }
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
      <TableContainer
        whiteSpace={"break-spaces"}
        maxWidth={"100%"}
        height={500}
        overflowY={"scroll"}
      >
        <Table variant="unstyled">
          <Thead>
            <Tr>
              <Th>Title</Th>
              <Th>Description</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {/* Loop through the data to show list of books */}
            {getBooks.data?.getAllBooks.length === 0 ? (
              <Text textAlign="right" fontSize={30} mt={40}>
                No books created{" "}
              </Text>
            ) : (
              getBooks.data?.getAllBooks.map(({ id, name, description }) => (
                <Tr _hover={{ backgroundColor: "#fdf0dd" }} key={id}>
                  <Td>{name}</Td>
                  <Td>{description}</Td>
                  <Td>
                    <Button
                      _hover={{ bg: "red" }}
                      m={2}
                      size={"sm"}
                      onMouseOver={() => setBookId(id)}
                    >
                      {/* Set the id of the book when you hover over the delete icon and delete */}
                      <DeleteIcon boxSize={5} mr={3} onClick={handleDelete} />
                    </Button>
                    {/* Set the name and description of the book when you hover over the edit icon */}
                    <Button
                      _hover={{ bg: "#f7a027" }}
                      size={"sm"}
                      onMouseOver={() =>
                        setFormData({
                          name: name,
                          description: description,
                        })
                      }
                    >
                      <EditIcon
                        boxSize={5}
                        mr={3}
                        onMouseOver={() => setBookId(id)}
                        onClick={onOpen}
                      />
                    </Button>
                  </Td>
                </Tr>
              ))
            )}
          </Tbody>
        </Table>
      </TableContainer>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Book</ModalHeader>
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
    </div>
  );
};

export default BookList;
