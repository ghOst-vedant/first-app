import {
    View,
    Text,
    StyleSheet,
    Appearance,
    Platform,
    ScrollView,
    SafeAreaView,
    FlatList,
    Image,
} from "react-native"

import React from "react"
import { Colors } from "@/constants/Colors"
import { MENU_ITEMS } from "@/constants/MenuItems"
import MENU_IMAGES from "@/constants/MenuImages"
import { ThemedText } from "@/components/ThemedText"
const menu = () => {
    const colorScheme = Appearance.getColorScheme()
    const theme = colorScheme === "dark" ? Colors.dark : Colors.light
    const styles = CreateStyles(theme, colorScheme)
    const Container = Platform.OS === "web" ? ScrollView : SafeAreaView
    const seperatorComp = () => <View style={styles.seperator} />
    const emptyComp = () => (
        <ThemedText
            type="default"
            style={{ textAlign: "center", textDecorationLine: "none" }}
        >
            No menu items found
        </ThemedText>
    )
    return (
        <Container>
            <FlatList
                data={MENU_ITEMS}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.contentContainer}
                ItemSeparatorComponent={seperatorComp}
                ListFooterComponent={seperatorComp}
                ListEmptyComponent={emptyComp}
                renderItem={({ item }) => (
                    <View style={styles.row}>
                        <View style={styles.menuTextRow}>
                            <Text style={styles.menuItemTitle}>
                                {item.title}
                            </Text>
                            <Text style={styles.menuItemText}>
                                {item.description}
                            </Text>
                        </View>
                        <Image
                            source={MENU_IMAGES[item.id - 1]}
                            style={styles.menuImage}
                        />
                    </View>
                )}
            />
        </Container>
    )
}

function CreateStyles(theme: any, colorScheme: string | null | undefined) {
    return StyleSheet.create({
        contentContainer: {
            paddingTop: 10,
            paddingBottom: 20,
            paddingHorizontal: 12,
            backgroundColor: theme.background,
        },
        seperator: {
            height: 1,
            backgroundColor: colorScheme === "dark" ? "papayawhip" : "black",
            width: "50%",
            maxWidth: 300,
            marginHorizontal: "auto",
            marginBottom: 10,
        },
        row: {
            flexDirection: "row",
            width: "100%",
            maxWidth: 600,
            height: 100,
            marginBottom: 10,
            borderStyle: "solid",
            borderColor: colorScheme === "dark" ? "papayawhip" : "black",
            borderWidth: 1,
            overflow: "hidden",
            borderRadius: 20,
            marginHorizontal: "auto",
        },
        menuTextRow: {
            width: "65%",
            paddingRight: 5,
            paddingTop: 10,
            paddingLeft: 10,
            flexGrow: 1,
        },
        menuItemTitle: {
            textDecorationLine: "underline",
            fontSize: 18,
            color: theme.text,
        },
        menuItemText: {
            fontSize: 14,
            paddingTop: 6,
            color: theme.text,
        },
        menuImage: {
            width: "35%",
            height: "100%",
            resizeMode: "cover",
        },
    })
}

export default menu
