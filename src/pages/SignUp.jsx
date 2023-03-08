import {
  Box,
  Center,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaUser, FaLock, FaEye } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { GiBookshelf } from "react-icons/gi";
import { Link as ReactLink } from "react-router-dom";

const SignUp = () => {
  return (
    <div>
      <Center>
        <Box
          width={["90%", "80%", "60%"]}
          boxShadow={{ sm: "none", md: "md" }}
          rounded="md"
          mt="8%"
          py={20}
          px={[0, 10, 20]}
          backgroundColor={{ sm: "none", md: "gray.50" }}
        >
          <GiBookshelf size={70} color="#f7a027" className="logo" />
          <Text
            fontSize={[40, 50]}
            fontWeight="bold"
            textAlign="center"
            textColor="#2c2c2c"
          >
            Register
          </Text>
          <Stack spacing={6} mt={10}>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<FaUser color="#797878" />}
              />
              <Input
                type="text"
                size="md"
                borderRadius="30"
                boxShadow="sm"
                placeholder="Full name"
              />
            </InputGroup>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<IoMdMail color="#797878" />}
              />
              <Input
                type="email"
                size="md"
                borderRadius="30"
                boxShadow="sm"
                placeholder="Email"
              />
            </InputGroup>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<FaLock color="#797878" />}
              />
              <Input
                type="password"
                size="md"
                borderRadius="30"
                boxShadow="sm"
                placeholder="Password"
              />
              <InputRightElement children={<FaEye color="#797878" />} />
            </InputGroup>
          </Stack>
          <Flex direction="column" alignItems="center" justifyContent="center">
            <Box
              as="button"
              height="46px"
              width={[180, 280]}
              lineHeight="1.2"
              transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
              border="none"
              mt={10}
              borderRadius="30px"
              fontSize="18px"
              fontWeight="semibold"
              bg="#f7a027"
              color="#f8f9fa"
              _hover={{ bg: "#f09008" }}
            >
              Register
            </Box>
            <Text mt={5} textColor="#2c2c2c">
              Have an account?
              <Link as={ReactLink} to="/" color="yellow.600">
                &nbsp;Sign In
              </Link>
            </Text>
          </Flex>
        </Box>
      </Center>
    </div>
  );
};

export default SignUp;
