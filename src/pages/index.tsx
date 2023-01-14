import React, { useState } from "react";
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

export default function Dashboard() {
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
