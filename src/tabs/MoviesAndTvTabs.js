import { Select, Center, CheckIcon, Text } from 'native-base';
import ItemList from '../lists/ItemList';
import { getMediaList } from '../services/api';
import { useState, useEffect } from 'react';
import Loading from '../layout/Loading';

const MoviesAndTvTabs = ({ navigation, mediaType }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [sortType, setSortType] = useState('popular');
    const [results, setResults] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    let sortOptions = [];
    if (mediaType == 'movie') {
        sortOptions = ['now_playing', "popular", "top_rated", "upcoming"];
    } else {
        sortOptions = ['airing_today', "on_the_air", "popular", "top_rated"];
    }
    useEffect(() => {
        setIsLoading(true);
        getMediaList(mediaType, sortType, page).then(res => {
            if (res.page == 1) {
                setResults([])
            }
            setPage(res.page);
            setTotalPages(res.total_pages);
            setResults(oldResults => oldResults.concat(res.results));
            setIsLoading(false);
        }
        ).catch(err => {
            console.log(err);
        });
    }, [sortType, page])

    return (
        <>
            <Center>
                <Select selectedValue={sortType}
                    onValueChange={(value) => {
                        setPage(1);
                        setSortType(value);
                    }}
                    margin={2}
                    width={'60%'}
                    _selectedItem={{
                        bg: "teal.600",
                        endIcon: <CheckIcon size="5" color="white" />
                    }}>
                    {sortOptions.map((option, index) => <Select.Item label={option} value={option} key={index} color={"red"} />)}
                </Select>
            </Center>
            {
                isLoading ?
                    <Loading />
                    :
                    results.length > 0 ?
                        <ItemList navigation={navigation} list={results} mediaType={mediaType} page={page} totalPages={totalPages} setPage={setPage} />
                        :
                        <Center>
                            <Text>No Records Found</Text>
                        </Center>
            }
        </>
    )
}
export default MoviesAndTvTabs;