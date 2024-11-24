import { Platform } from 'react-native';
import { Card, Text } from 'react-native-paper';
import { StarRatingDisplay } from 'react-native-star-rating-widget';
export default function Restaurant({ restaurant }) {
    return (
        <>
            <Card style={{ marginBottom: 10 }} elevation={5}>
                <Card.Cover source={{ uri: restaurant.img }} />
                <Card.Content style={{ gap: 5 }}>
                    <Text style={{
                        fontFamily: "Oswald_400Bold", paddingTop: Platform.select({
                            android: 10
                        }), fontWeight: '400'
                    }} variant="titleMedium">{restaurant.name}</Text>
                    <Text style={{ fontFamily: "Oswald_400Regular", fontWeight: 900 }} variant="titleSmall">{restaurant.address}</Text>
                    <StarRatingDisplay
                        rating={4.5}
                    />
                </Card.Content>
            </Card>
        </>
    )
}