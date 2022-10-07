import { Text, Center } from 'native-base';
import { useState } from 'react';
import { getSearchResults } from '../services/api';
import SearchForm from '../forms/SearchForm';
import Loading from '../layout/Loading';
import ItemList from '../lists/ItemList';

const SearchTab = ({ navigation }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [results, setResults] = useState([]);
    const [mediaType, setMediaType] = useState('');

    const callSearchResults = (selectedMediaType, inputText, isError) => {
        if (isError) {
            setResults([]);
            setIsLoading(false);
        } else {
            setIsLoading(true);
            setMediaType(selectedMediaType);
            getSearchResults(selectedMediaType, inputText).then(res => {
                setResults(res.results);
                setIsLoading(false);
            }
            ).catch(err => {
                console.log(err);
            }
            );
        }
    };

    return (
        <>
            <SearchForm callSearchResults={callSearchResults} />
            {
                isLoading
                    ? <Loading />
                    :
                    results.length > 0 ?
                        <ItemList navigation={navigation} list={results} mediaType={mediaType} />
                        :
                        <Center mt={10} >
                            <Text fontSize={"lg"} fontWeight="medium">Please initiate a search</Text>
                        </Center>
            }
        </>
    )
}
export default SearchTab;

