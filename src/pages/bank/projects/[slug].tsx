import { useRouter } from "next/router";
import { useState } from "react";
import { Flex, Image, Text, Card, Heading } from "@chakra-ui/react";

const projects = [
  {
    id: 1,
    name: "C3 Cargos",
    thumbnail: "/proj.jpg",
  },
  {
    id: 2,
    name: "Aunty May Custom mugs",
    thumbnail: "/cup.jpg",
  },
  {
    id: 3,
    name: "Miniature trains",
    thumbnail: "/train.jpg",
  },
];

export default function Project() {
  const router = useRouter();
  const [slug, setSlug] = useState(router.query.slug);

  return (
    <>
      {/* there will be 4 separate sections all are surrounded by a flex. these are the project picture, project description, supporting documents, a form to enter the amoount to invest */}
      {/* set the slug to the id of the project */}
      <Flex
        direction="column"
        w="100%"
        maxW="2000px"
        display="flex"
        flexDir="column"
        overflow="hidden"
        alignItems={"center"}
      >
        <Flex
          direction="row"
          maxW="2000px"
          display="flex"
          flexDir="column"
          overflow="hidden"
          alignItems={"center"}
        >
          <Card
            display="flex"
            flexDir="column"
            overflow="hidden"
            borderRadius="md"
            boxShadow="xl"
            p={4}
            m={10}
            alignItems={"center"}
            w="50%"
            borderColor="black.800"
          >
            <Flex
              flexDir="row"
              alignItems="center"
              overflow="hidden"
              bg="gray.700"
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
            >
              <Heading fontWeight="normal" p={1} letterSpacing="tight">
                Credit Score
              </Heading>
              <Flex
                flexDir="row"
                overflow="hidden"
                alignItems={"center"}
                ml={1}
              >
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
            <Heading fontWeight="normal" p={5} letterSpacing="tight">
              SME Logo
            </Heading>
            <Image
              src={projects[slug]?.thumbnail}
              alt={projects[slug]?.name}
              w="30%"
              h="30%"
              objectFit={"contain"}
            />
            <Heading fontWeight="normal" p={5} letterSpacing="tight">
              SME Description
            </Heading>
            <Flex>
              <Text>{projects[slug]?.description ? "" : "test"}</Text>
            </Flex>
            <Heading fontWeight="normal" p={5} letterSpacing="tight">
              Supporting Documents
            </Heading>
            <Flex>
              {/* include a few sample placeholders emulating file */}
              <Card p={4} m={5}>
                File 1
              </Card>
              <Card p={4} m={5}>
                File 2
              </Card>
              <Card p={4} m={5}>
                File 3
              </Card>
            </Flex>
            <Heading fontWeight="normal" p={5} letterSpacing="tight">
              Amount to Invest
            </Heading>
            <Flex>
              {/* input to accept amount to invest, surround it beautifully */}
              <Card p={3} m={1}>
                <input type="number" />
              </Card>
            </Flex>
            {/* button to submit the amount to invest */}
            <Flex>
              <Card p={3} m={1}>
                <button>Submit</button>
              </Card>
            </Flex>
          </Card>
        </Flex>
      </Flex>
    </>
  );
}
