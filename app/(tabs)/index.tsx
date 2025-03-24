import { View, Text, StyleSheet, ImageBackground } from "react-native"
import React from "react"
import icedCoffee from "@/assets/images/iced-coffee.png"
const app = () => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={icedCoffee}
                resizeMode="cover"
                style={styles.image}
            >
                <Text style={styles.Text}>Coffee Shop</Text>
            </ImageBackground>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "#fff",
        flexDirection: "column",
        paddingTop: 55,
    },
    image: {
        width: "100%",
        height: "100%",
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    },
    Text: {
        fontSize: 42,
        paddingVertical: 10,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
    },
})
export default app
