import {
    StyleSheet,
    Image,
    Linking,
    TouchableOpacity,
    Text,
    View,
} from "react-native"
import { ThemedText } from "@/components/ThemedText"
import coffeeShop from "@/assets/images/coffee-splash.png"

export default function Explore() {
    const handleCall = (call: number) => {
        Linking.openURL(`tel:${call}`)
    }

    return (
        <View style={styles.container}>
            <Image source={coffeeShop} style={styles.image} />
            <View style={{ padding: 20 }}>
                <ThemedText type="title">Hours</ThemedText>
                <ThemedText type="default">
                    Monday - Friday: 6:00am - 8:00pm
                </ThemedText>
                <ThemedText type="title" style={{ paddingTop: 20 }}>
                    Address
                </ThemedText>
                <ThemedText type="defaultSemiBold">
                    1234 Coffee Shop Way,
                    <ThemedText type="defaultSemiBold">
                        {" "}
                        Coffee Town, USA
                    </ThemedText>
                </ThemedText>
                <ThemedText type="title" style={{ paddingTop: 20 }}>
                    Phone
                </ThemedText>
                {/* Use React Native's Text component directly here */}
                <TouchableOpacity onPress={() => handleCall(9773336311)}>
                    <Text
                        style={{
                            fontWeight: "bold",
                            fontSize: 16,
                            color: "gray",
                        }}
                    >
                        9773336311
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingTop: 50,
        flex: 1,
    },
    image: {
        width: "100%",
        height: "5%",
        flex: 1,
        resizeMode: "center",
        justifyContent: "center",
        borderRadius: 10,
    },
    titleContainer: {
        flexDirection: "row",
        gap: 8,
    },
})
