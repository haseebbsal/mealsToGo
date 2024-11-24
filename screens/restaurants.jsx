import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";
import Restaurant from "../components/restaurant";


const restaurants = [
    {
        name: "Restaurant 1",
        img: 'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
        address:"100 some random street"
    },
    {
        name: "Restaurant 2",
        img: 'https://picsum.photos/700',
        address:"100 some random street"

    },
    {
        name: "Restaurant 3",
        img: 'https://picsum.photos/800',
        address:"100 some random street"

    },
    {
        name: "Restaurant 4",
        img: 'https://picsum.photos/900',
        address:"100 some random street"
    },
    {
        name: "Restaurant 5",
        img: 'https://picsum.photos/100',
        address:"100 some random street"
    },
    {
        name: "Restaurant 6",
        img: 'https://picsum.photos/200',
        address:"100 some random street"
    }

]

export default function RestaurantsScreen() {
    return (
        <>
            <View style={styles.mainContainer}>
                <Searchbar
                    placeholder="Search"
                />
                <FlatList
                    data={restaurants}
                    renderItem={({ item }) => <Restaurant restaurant={item} />}
                    keyExtractor={item => item.name}
                />
                {/* {restaurants.map((e) => <Restaurant restaurant={item} />)} */}
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        gap: 10,
        padding: 10
    }
})