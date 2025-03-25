import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Pressable,
} from "react-native"
import React from "react"
import icedCoffee from "@/assets/images/iced-coffee.png"
import { Link } from "expo-router"
const app = () => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={icedCoffee}
                resizeMode="cover"
                style={styles.image}
            >
                <Text style={styles.title}>Coffee Shop</Text>
                <Link
                    href={"/explore"}
                    style={{ marginHorizontal: "auto" }}
                    asChild
                >
                    <Pressable style={styles.button}>
                        <Text style={styles.buttonText}>Explore</Text>
                    </Pressable>
                </Link>
                <Link
                    href={"/menu"}
                    style={{ marginHorizontal: "auto" }}
                    asChild
                >
                    <Pressable style={styles.button}>
                        <Text style={styles.buttonText}>Our Menu</Text>
                    </Pressable>
                </Link>
            </ImageBackground>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    title: {
        fontSize: 42,
        paddingVertical: 10,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
        marginBottom: 120,
    },
    Link: {
        fontSize: 42,
        paddingVertical: 10,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
        textDecorationLine: "underline",
    },
    button: {
        height: 60,
        borderRadius: 30,
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,0.75)",
        paddingVertical: 6,
        paddingHorizontal: 20,
        marginBottom: 20,
        width: 200,
    },
    buttonText: {
        fontSize: 24,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
    },
})
export default app
