import {
    Flex,
    Heading,
    IconButton,
    Spacer,
    VStack,
    useColorMode,
} from "@chakra-ui/react";
import {
    FaInstagram,
    FaLinkedin,
    FaGithub,
    FaSun,
    FaMoon,
} from "react-icons/fa";
import Header from "./components/Header";
import Social from "./components/Social";
import Profile from "./components/Profile";
import useSound from "use-sound";
import lightswitchAudio from "./assets/lightswitch.mp3";

function App() {
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";
    const [play] = useSound(lightswitchAudio, {
        volume: 0.05,
        sprite: {
            on: [0, 300],
            off: [500, 300],
        },
    });
    const handleColorSwitch = () => {
        isDark ? play({ id: "on" }) : play({ id: "off" });
        toggleColorMode();
    };
    return (
        <VStack p={5}>
            <Flex w={"100%"}>
                <Heading
                    ml={8}
                    size={"md"}
                    fontWeight={"bold"}
                    color={"cyan.400"}
                >
                    TRK
                </Heading>
                <Spacer></Spacer>
                <IconButton
                    icon={<FaLinkedin />}
                    isRound="true"
                    onClick={() =>
                        window.open(
                            "https://www.linkedin.com/in/rohank05/",
                            "_blank"
                        )
                    }
                ></IconButton>
                <IconButton
                    ml={2}
                    icon={<FaInstagram />}
                    isRound="true"
                    onClick={() =>
                        window.open(
                            "https://www.instagram.com/rohank1251/",
                            "_blank"
                        )
                    }
                ></IconButton>
                <IconButton
                    ml={2}
                    icon={<FaGithub />}
                    isRound="true"
                    onClick={() =>
                        window.open("https://github.com/rohank05", "_blank")
                    }
                ></IconButton>
                <IconButton
                    ml={8}
                    icon={isDark ? <FaSun /> : <FaMoon />}
                    isRound="true"
                    onClick={handleColorSwitch}
                ></IconButton>
            </Flex>
            <Header></Header>
            <Social></Social>
            <Profile></Profile>
        </VStack>
    );
}

export default App;
