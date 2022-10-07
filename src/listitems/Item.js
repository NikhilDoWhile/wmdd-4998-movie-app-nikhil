import { Image, Text, HStack, Box, VStack, Heading, Button } from "native-base";
import { IMAGE_BASE_URL } from "../config/api_config";

const Item = ({ navigation, item, mediaType }) => {
    return (
        <HStack space={2} m={2}>
            <Box maxW={"30%"}>
                <Image source={{ uri: `${IMAGE_BASE_URL}/${item.poster_path}` }} alt={item.name ? item.name : item.title} size={'lg'} />
            </Box>

            <Box width={"70%"}>
                <VStack>
                    <Heading fontSize={"md"}>{item.original_name ? item.original_name : item.original_title}</Heading>
                    <Text>Popularity: {item.popularity}</Text>
                    <Text>Release Date: {item.release_date}</Text>
                    <Button maxW={"90%"} onPress={() => navigation.navigate("Details", { id: item.id, mediaType: item.media_type ? item.media_type : mediaType })}>More Details
                    </Button>
                </VStack>
            </Box>
        </HStack>
    )
}
export default Item;