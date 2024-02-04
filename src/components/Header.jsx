import {
    Circle,
    Stack,
    Flex,
    Box,
    Text,
    useColorMode,
    useMediaQuery,
    Image,
    Button,
} from "@chakra-ui/react";

import avatar from "../assets/avatar.jpg";

const Header = () => {
    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";
    let [isNotSmallerScreen] = useMediaQuery("(min-width: 800px)");
    return (
        <Stack>
            <Circle
                position="absolute"
                bg="blue.100"
                opacity={isDark ? 0.1 : 0.6}
                w="300px"
                h="300px"
                alignSelf="flex-end"
                zIndex={0}
            />
            <Flex
                direction={isNotSmallerScreen ? "row" : "column"}
                spacing="200px"
                p={isNotSmallerScreen ? "32" : "0"}
                alignSelf="flex-start"
            >
                <Box mt={isNotSmallerScreen ? "0" : 16} align="flex-start">
                    <Text fontSize="5xl" fontWeight="semibold">
                        👋 Hi! I am
                    </Text>
                    <Text
                        fontSize="7xl"
                        fontWeight="bold"
                        bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
                        bgClip="text"
                    >
                        Rohan Kumar
                    </Text>
                    <Text color={isDark ? "gray.200" : "gray.500"}>
                        I am a passionate software developer with expertise
                        across multiple platforms. My journey in the tech world
                        has led me to work with a diverse set of languages,
                        including JavaScript, Java, C#, Python, and Go. 🗣
                    </Text>
                    <Button
                        mt={8}
                        color="cyan.400"
                        onClick={() => window.open("https://therohankumar.com")}
                    >
                        Hire Me
                    </Button>
                </Box>
                <Image
                    alignSelf="center"
                    mt={isNotSmallerScreen ? "0" : "12"}
                    mb={isNotSmallerScreen ? "0" : "12"}
                    borderRadius="full"
                    backgroundColor="transparent"
                    boxShadow="lg"
                    boxSize="300px"
                    zIndex={0}
                    src={avatar}
                />
            </Flex>
        </Stack>
    );
};

export default Header;
