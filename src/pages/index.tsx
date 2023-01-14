import React, { useState, useEffect } from "react";
import {
  Flex,
  Heading,
  Avatar,
  AvatarGroup,
  Text,
  Icon,
  IconButton,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Divider,
  Link,
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Card,
} from "@chakra-ui/react";
import {
  FiHome,
  FiPieChart,
  FiDollarSign,
  FiBox,
  FiCalendar,
  FiChevronDown,
  FiChevronUp,
  FiPlus,
  FiCreditCard,
  FiSearch,
  FiBell,
} from "react-icons/fi";
import LoanDisbursements from "@/components/LoanDisbursements";
import TotalValueLocked from "@/components/totalValueLocked";
const axios = require("axios").default;

export const algoanAuth = async () => {
  let access_token;
  const options = {
    method: "POST",
    url: "https://api.algoan.com/v1/oauth/token",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    data: {
      grant_type: "client_credentials",
      client_id: process.env.NEXT_ALGOAN_CLIENT_ID,
      client_secret: process.env.NEXT_ALGOAN_CLIENT_SECRET,
    },
  };

  await axios
    .request(options)
    .then(function async(response) {
      access_token = response.data.access_token;
    })
    .catch(function (error) {
      console.error(error);
    });

  return access_token;
};

const algoanCreateCustomer = async () => {
  let access_token = await algoanAuth();
  const createCustomer = {
    method: "POST",
    url: "https://api.algoan.com/v2/customers",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access_token}`,
    },
    data: {
      customIdentifier: "bizboost.AI",
    },
  };

  axios
    .request(createCustomer)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};

const algoanCreateAnalysis = async () => {
  let access_token = await algoanAuth();
  let customerId = "63c30543921c3f8b58503cb2";

  const accountsUrl =
    "https://raw.githubusercontent.com/algoan/fake-open-banking-data/main/samples/fr/harry_potter.json";

  const options = {
    method: "POST",
    url: `https://api.algoan.com/v2/customers/${customerId}/analyses`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access_token}`,
    },
    data: {},
  };
  axios
    .get(accountsUrl)
    .then(function (response) {
      const accounts = response.data;
      options.data = accounts;

      return axios.request(options);
    })
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};

const algoanGetAnalysis = async () => {
  let access_token = await algoanAuth();
  let customerId = "63c30543921c3f8b58503cb2";
  let analysisId = "63c3064d1b8dc5d23ff7e9b4";

  let creditScore;

  const options = {
    method: "GET",
    url: `https://api.algoan.com/v2/customers/${customerId}/analyses/${analysisId}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access_token}`,
    },
  };

  axios
    .request(options)
    .then(function (response) {
      creditScore = response.scores.creditScore.value;
    })
    .catch(function (error) {
      console.error(error);
    });

  return creditScore;
};

export default function Dashboard() {
  // const [creditScore, setCreditScore] = useState<any>(null);
  // useEffect(() => {
  //   setCreditScore(algoanGetAnalysis());
  // });

  return (
    <Flex
      h="100vh"
      w="100%"
      maxW="2000px"
      display="flex"
      flexDir="column"
      overflow="hidden"
      alignItems={"center"}
    >
      <Flex flexDir="row" alignItems="center">
        <Flex
          flexDir="row"
          alignItems="center"
          overflow="hidden"
          bg="white"
          fontStyle={{ fontFamily: "Inter" }}
          //color it black
          color="black"
          p={4}
          borderRadius="md"
          boxShadow="md"
          borderColor="gray.200"
          borderWidth="2px"
          m={2}
          w="60%"
        >
          <Heading fontWeight="normal" p={1} letterSpacing="tight">
            Partner Banks
          </Heading>
          <Flex flexDir="row" overflow="hidden" alignItems={"center"} ml={1}>
            <Card
              display="flex"
              flexDir="row"
              overflow="hidden"
              borderRadius="md"
              boxShadow="md"
              p={4}
              m={1}
              alignItems={"center"}
            >
              Bank A
            </Card>
            <Card
              display="flex"
              flexDir="row"
              overflow="hidden"
              borderRadius="md"
              boxShadow="md"
              p={4}
              m={1}
              alignItems={"center"}
            >
              Bank B
            </Card>
            <Card
              display="flex"
              flexDir="row"
              overflow="hidden"
              borderRadius="md"
              boxShadow="md"
              p={4}
              m={1}
              alignItems={"center"}
            >
              Bank C
            </Card>
          </Flex>
        </Flex>
        <Flex
          flexDir="row"
          alignItems="center"
          overflow="hidden"
          bg="white"
          fontStyle={{ fontFamily: "Inter" }}
          //color it black
          color="black"
          p={4}
          borderRadius="md"
          boxShadow="md"
          borderColor="gray.200"
          borderWidth="2px"
          m={5}
          w="40%"
          //add another gray layer on top, for "coming soon"
          z-index={3}
          bg="gray.700"
        >
          <Heading fontWeight="normal" p={1} letterSpacing="tight">
            Avg Credit Score
          </Heading>
          <Flex flexDir="row" overflow="hidden" alignItems={"center"} ml={1}>
            <Card
              display="flex"
              flexDir="row"
              overflow="hidden"
              borderRadius="md"
              boxShadow="md"
              p={4}
              m={1}
              alignItems={"center"}
              bg="gray.700"
            >
              9.9
            </Card>
          </Flex>
        </Flex>
      </Flex>

      <Flex
        w="100%"
        h="10%"
        flexDir="column"
        overflow="hidden"
        bg="white"
        fontStyle={{ fontFamily: "Inter" }}
        //color it black
        color="black"
      >
        <Heading fontWeight="normal" mb={4} p={4} letterSpacing="tight">
          SMEs boosted by BizBoost.AI,{" "}
          <Flex display="inline-flex" fontWeight="bold">
            in numbers
          </Flex>
        </Heading>
      </Flex>

      {/* create another flex component that has 5 cards inside, some will contain charts, some will not */}
      <Flex
        w="100%"
        h="100%"
        display="flex"
        flexDir="column"
        overflow="auto"
        borderRadius="md"
        boxShadow="md"
        //allow elements to go down if they don't fit
      >
        <Flex
          //only fit 3 cards inside
          w="100%"
          display="flex"
          flexDir="row"
          overflow="hidden"
          borderRadius="md"
          boxShadow="md"
          p={8}
          h="100%"
        >
          <Card
            w="100%"
            display="flex"
            flexDir="column"
            overflow="hidden"
            borderRadius="md"
            boxShadow="md"
            p={9}
            m={1}
            h="100%"
            alignItems={"center"}
          >
            {/* text that says total value locked */}
            <Text
              fontSize="xl"
              color="gray.500"
              fontWeight="bold"
              align="center"
            >
              Total Value Locked
            </Text>
            <TotalValueLocked />
          </Card>
          <Card
            w="100%"
            display="flex"
            flexDir="column"
            overflow="hidden"
            borderRadius="md"
            boxShadow="md"
            p={9}
            m={1}
            h="100%"
            alignItems={"center"}
          >
            {/* text that says total value locked */}
            <Text
              fontSize="xl"
              color="gray.500"
              mb={2}
              fontWeight="bold"
              align="center"
              p={10}
            >
              Loan Disbursements Made
            </Text>
            {/* total value locked component */}
            <LoanDisbursements />
          </Card>
        </Flex>
      </Flex>
    </Flex>
  );
}
