import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Image
} from "react-native";
import ProductsData from "../data/product.json";

const imageMap = {
    "data/images/1.jpg": require("../data/img/1.jpg"),
    "data/images/2.jpg": require("../data/img/2.jfif"),
    "data/images/3.jpg": require("../data/img/3.jpg"),
    "data/images/4.jpg": require("../data/img/4.jfif"),
    "data/images/5.jpg": require("../data/img/5.jpg"),
    "data/images/6.jpg": require("../data/img/6.webp"),
    "data/images/7.jpg": require("../data/img/7.png"),
    "data/images/8.jpg": require("../data/img/8.jfif"),
    "data/images/9.jpg": require("../data/img/9.jfif"),
    "data/images/10.jpg": require("../data/img/10.jpg"),
};

const ProductsScreen = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(ProductsData);
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Computer Parts</Text>

            <FlatList
                data={products}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Text style={styles.itemID}>
                            ID: {item.id}
                        </Text>

                        <Image
                            source={imageMap[item.image]}
                            style={styles.productImage}
                            resizeMode="contain"
                        />

                        <Text style={styles.itemTitle}>
                            {item.title}
                        </Text>

                        <Text style={styles.itemDescription}>
                            {item.description}
                        </Text>
                    </View>
                )}
            />

            <TouchableOpacity
                style={styles.backBtn}
                onPress={() => props.navigation.goBack()}
            >
                <Text style={styles.btnText}>Go Back</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: "#f5f5f5",
    },

    title: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 15,
        color: "#333",
    },

    itemContainer: {
        backgroundColor: "#fff",
        borderRadius: 8,
        padding: 12,
        marginVertical: 8,
        marginHorizontal: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
    },

    itemID: {
        fontSize: 12,
        color: "#999",
        marginBottom: 5,
    },

    productImage: {
        width: "100%",
        height: 180,
        marginBottom: 10,
    },

    itemTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 8,
    },

    itemDescription: {
        fontSize: 14,
        color: "#555",
        lineHeight: 20,
    },

    backBtn: {
        backgroundColor: "#007AFF",
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: "center",
        margin: 10,
    },

    btnText: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "600",
    },
});

export default ProductsScreen;
