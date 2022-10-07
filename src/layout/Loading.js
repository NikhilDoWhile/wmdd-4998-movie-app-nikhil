import { Center, HStack, Text } from 'native-base'
import { ActivityIndicator } from 'react-native'

const Loading = () => {
    return (
        <Center>
            <HStack space={2} alignItems="center">
                <ActivityIndicator color={"black"} />
                <Text fontSize={"lg"} fontWeight={"medium"}>Loading results...</Text>
            </HStack>
        </Center>
    )
}

export default Loading