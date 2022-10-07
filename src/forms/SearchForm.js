import { Button, CheckIcon, FormControl, HStack, Icon, Input, Select, VStack, Box } from "native-base";
import { Ionicons } from '@expo/vector-icons';
import { useState } from "react";

const SearchForm = ({ callSearchResults }) => {
    const [mediaType, setMediaType] = useState('multi');
    const [inputText, setInputText] = useState('');
    const [isError, setIsError] = useState(false);
    const mediaTypes = ['movie', "multi", "tv"];

    const searchClicked = () => {
        if (inputText.trim() === "") {
            setIsError(true);
            callSearchResults(mediaType, inputText.trim(), true);
        } else {
            setIsError(false);
            callSearchResults(mediaType, inputText.trim(), false);
        }
    }

    return (
        <>
            <VStack marginTop={2} width={"80%"} m={10}>
                <FormControl isRequired>
                    <FormControl.Label>Search Movie/TV Show Name</FormControl.Label>
                    <Box style={[isError && { borderWidth: 1 }, isError && { borderColor: 'red' }]}>
                        <Input placeholder="i.e. James Bond, CSI"
                            InputLeftElement={
                                <Icon as={<Ionicons name="ios-search" />} m={1} />
                            }
                            onChangeText={(text) => setInputText(text)}
                            onEndEditing={(text) => {
                                if (inputText.trim() != "") {
                                    setIsError(false);
                                }
                            }}
                            value={inputText}

                        />
                    </Box>
                    <FormControl.Label>Choose Search Type</FormControl.Label>
                    <HStack space={3} alignItems={"center"}>
                        <Select selectedValue={mediaType}
                            onValueChange={(value) => setMediaType(value)}
                            flex={2}
                            _selectedItem={{
                                bg: "teal.600",
                                endIcon: <CheckIcon size="5" color="white" />
                            }}>
                            {mediaTypes.map((option, index) => <Select.Item label={option} value={option} key={index} color={"red"} />)}
                        </Select>
                        <Button startIcon={<Icon as={<Ionicons name="ios-search" />} />} onPress={searchClicked}>Search</Button>
                    </HStack>
                    {
                        isError
                            ?
                            <FormControl.HelperText _text={{ color: '#ff0000' }}>Movie/TV show name is required</FormControl.HelperText>
                            :
                            <FormControl.HelperText>Please select a search type</FormControl.HelperText>
                    }
                </FormControl>
            </VStack>
        </>
    );
}

export default SearchForm;