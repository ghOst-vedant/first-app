import {
    StyleSheet,
    Image,
    Linking,
    TouchableOpacity,
    Text,
} from "react-native"

import { Collapsible } from "@/components/Collapsible"
import { ExternalLink } from "@/components/ExternalLink"
import ParallaxScrollView from "@/components/ParallaxScrollView"
import { ThemedText } from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"
import { IconSymbol } from "@/components/ui/IconSymbol"

export default function Explore() {
    const handleCall = (call: number) => {
        // Call the coffee shop
        Linking.openURL(`tel:${call}`)
    }

    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
            headerImage={
                <Image
                    source={require("@/assets/images/coffee-splash.png")}
                    style={styles.headerImage}
                />
            }
        >
            <ThemedText type="title">Hours</ThemedText>
            <ThemedView style={styles.titleContainer}>
                <ThemedText type="default">
                    Monday - Friday: 6:00am - 8:00pm
                </ThemedText>
            </ThemedView>
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
        </ParallaxScrollView>
    )
}

const styles = StyleSheet.create({
    headerImage: {
        color: "#808080",
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        position: "absolute",
    },
    titleContainer: {
        flexDirection: "row",
        gap: 8,
    },
})
