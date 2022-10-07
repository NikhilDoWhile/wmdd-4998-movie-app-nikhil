import { Button, Center } from "native-base";

const Footer = ({ setPage }) => {
    return (
        <Center>
            <Button w={"50%"} colorScheme="secondary" onPress={() => setPage((oldPageCount) => oldPageCount + 1)}>Load More</Button>
        </Center>
    );
}
export default Footer;
