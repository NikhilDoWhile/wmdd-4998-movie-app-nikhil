import { FlatList } from "native-base";
import Footer from "../layout/Footer";
import Item from "../listitems/Item";

const ItemList = ({ navigation, list, mediaType, page, totalPages, setPage }) => {
    return (
        <FlatList width={"100%"} data={list}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
                <Item navigation={navigation} item={item} mediaType={mediaType} />
            )}
            ListFooterComponent={(page < totalPages) ? <Footer setPage={setPage} /> : <></>} />
    )
}

export default ItemList;