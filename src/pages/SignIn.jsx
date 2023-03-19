import { useAuth0 } from "@auth0/auth0-react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Center, Flex, Icon, Text } from "@chakra-ui/react";

import { GiBookshelf } from "react-icons/gi";
import { Link } from "react-router-dom";
import LoginButton from "../components/Login";

const SignIn = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div>
      <Center>
        <Box
          width={["80%", "70%", "40%"]}
          boxShadow={{ sm: "none", md: "md" }}
          rounded="md"
          mt="8%"
          py={20}
          px={[0, 5, 10]}
          backgroundColor={{ sm: "none", md: "gray.50" }}
        >
          <Flex direction="column" alignItems="center" justifyContent="center">
            <Icon as={GiBookshelf} boxSize={70} color="#f7a027" />
            <Text
              fontSize={[50, 60]}
              fontWeight="bold"
              textAlign="center"
              textColor="#2c2c2c"
            >
              Library
            </Text>
            <LoginButton />
            {/* isAuthenticated is used to check if a user is logged in and if they are the user can access the dashboard*/}
            {isAuthenticated ? (
              <Text color="#e28401" mt={"20px"}>
                <Link to="/dashboard">
                  Go to Dashboard
                  <ArrowForwardIcon />
                </Link>
              </Text>
            ) : (
              ""
            )}
          </Flex>
        </Box>
      </Center>
    </div>
  );
};

export default SignIn;
