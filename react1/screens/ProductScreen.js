
import React, { useState } from "react";

import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Image
} from "react-native";

import ProductsData from "../data/product.json";

// Product images
const imageMap = {
    tablet: require("../data/img/tablet.jpg"),
    iphone: require("../data/img/iphone.jpg"),
    samsung: require("../data/img/samsung.jpg")
};

const ProductScreen = () => {

    const [products, setProducts] = useState(ProductsData);
    const [activeTab, setActiveTab] = useState("Home");
    const [showMore, setShowMore] = useState(false);

    // Categories
    const categories = [
        { id: 1, name: "Tablet", icon: "━" },
        { id: 2, name: "Mouse", icon: "●" },
        { id: 3, name: "Keyboard", icon: "━" }
    ];

    return (

        <View style={styles.container}>

            {/* HEADER */}

            <View style={styles.header}>

                <Text style={styles.headerText}>
                    {activeTab}
                </Text>

            </View>


            {/* HOME SCREEN */}

            {activeTab === "Home" ? (

                <FlatList

                    data={showMore ? products : products.slice(0, 3)}

                    keyExtractor={(item) => item.id.toString()}

                    showsVerticalScrollIndicator={false}

                    contentContainerStyle={styles.listContent}

                    // CATEGORIES AND TITLE

                    ListHeaderComponent={

                        <View>

                            <View style={styles.categories}>

                                {categories.map((item) => (

                                    <TouchableOpacity
                                        key={item.id}
                                        style={styles.category}
                                    >

                                        <View style={styles.circle}>

                                            <Text style={styles.categoryIcon}>
                                                {item.icon}
                                            </Text>

                                        </View>

                                        <Text style={styles.categoryText}>
                                            {item.name}
                                        </Text>

                                    </TouchableOpacity>

                                ))}

                            </View>

                            <Text style={styles.sectionTitle}>
                                Most popular products
                            </Text>

                        </View>

                    }


                    // PRODUCT LIST

                    renderItem={({ item }) => (

                        <View style={styles.product}>

                            <Image
                                source={imageMap[item.image]}
                                style={styles.productImage}
                                resizeMode="cover"
                            />

                            <View style={styles.productInfo}>

                                <Text style={styles.productName}>
                                    {item.title}
                                </Text>

                                <Text style={styles.productCategory}>
                                    {item.category}
                                </Text>

                                <Text style={styles.description}>
                                    {item.description}
                                </Text>

                                <Text style={styles.price}>
                                    {item.price}
                                </Text>

                            </View>

                        </View>

                    )}


                    // VIEW MORE BUTTON

                    ListFooterComponent={

                        <TouchableOpacity
                            style={styles.viewMore}
                            onPress={() => setShowMore(!showMore)}
                        >

                            <Text style={styles.viewMoreText}>
                                {showMore ? "Show Less" : "View More"}
                            </Text>

                        </TouchableOpacity>

                    }

                />

            ) : (

                // ABOUT SCREEN

                <View style={styles.about}>

                    <Text style={styles.sectionTitle}>
                        About
                    </Text>

                    <Text style={styles.description}>
                        Welcome to our online shopping application.
                    </Text>

                </View>

            )}


            {/* BOTTOM NAVIGATION */}

            <View style={styles.bottomNav}>

                <TouchableOpacity
                    style={styles.navItem}
                    onPress={() => setActiveTab("Home")}
                >

                    <Text style={styles.homeIcon}>
                        ◆
                    </Text>

                    <Text style={styles.navText}>
                        Home
                    </Text>

                </TouchableOpacity>


                <TouchableOpacity
                    style={styles.navItem}
                    onPress={() => setActiveTab("About")}
                >

                    <Text style={styles.aboutIcon}>
                        ▣
                    </Text>

                    <Text style={styles.navText}>
                        About
                    </Text>

                </TouchableOpacity>

            </View>

        </View>

    );

};


// STYLES

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#FFFFFF"
    },

    // HEADER

    header: {
        height: 66,
        backgroundColor: "#343F54",
        justifyContent: "center",
        paddingHorizontal: 22
    },

    headerText: {
        color: "#FFFFFF",
        fontSize: 22,
        fontWeight: "bold"
    },

    // LIST

    listContent: {
        paddingHorizontal: 22,
        paddingBottom: 5
    },

    // CATEGORIES

    categories: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 25
    },

    category: {
        alignItems: "center"
    },

    circle: {
        width: 66,
        height: 66,
        borderRadius: 40,
        backgroundColor: "#343F54",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 5
    },

    categoryIcon: {
        color: "#20C9E8",
        fontSize: 25,
        fontWeight: "bold"
    },

    categoryText: {
        color: "#111111",
        fontSize: 15
    },

    // SECTION TITLE

    sectionTitle: {
        fontSize: 21,
        fontWeight: "bold",
        color: "#111111",
        marginBottom: 25
    },

    // PRODUCT

    product: {
        flexDirection: "row",
        marginBottom: 32
    },

    productImage: {
        width: 112,
        height: 130,
        borderRadius: 10,
        backgroundColor: "#EEEEEE"
    },

    productInfo: {
        flex: 1,
        marginLeft: 11
    },

    productName: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#111111"
    },

    productCategory: {
        color: "#20C9E8",
        fontSize: 14,
        marginTop: 3
    },

    description: {
        fontSize: 14,
        fontStyle: "italic",
        color: "#222222",
        marginTop: 3
    },

    price: {
        alignSelf: "flex-start",
        backgroundColor: "#343F54",
        color: "#FFFFFF",
        fontSize: 14,
        fontWeight: "bold",
        borderRadius: 15,
        paddingHorizontal: 7,
        paddingVertical: 2,
        marginTop: 5
    },

    // VIEW MORE

    viewMore: {
        backgroundColor: "#20C9E8",
        height: 56,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 17
    },

    viewMoreText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "bold"
    },

    // BOTTOM NAVIGATION

    bottomNav: {
        height: 55,
        backgroundColor: "#343F54",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },

    navItem: {
        alignItems: "center",
        justifyContent: "center"
    },

    homeIcon: {
        color: "#FFFFFF",
        fontSize: 23
    },

    aboutIcon: {
        color: "#FFFFFF",
        fontSize: 23
    },

    navText: {
        color: "#FFFFFF",
        fontSize: 13,
        marginTop: 2
    },

    about: {
        flex: 1,
        padding: 22
    }

});

export default ProductScreen;

// import React, { useState, useEffect } from "react";
// import {
//     View,
//     Text,
//     StyleSheet,
//     FlatList,
//     TouchableOpacity,
//     Image
// } from "react-native";
// import ProductsData from "../data/product.json";

// const imageMap = {
//     "data/images/1.jpg": require("../data/img/1.jpg"),
//     "data/images/2.jpg": require("../data/img/2.jfif"),
//     "data/images/3.jpg": require("../data/img/3.jpg"),
//     "data/images/4.jpg": require("../data/img/4.jfif"),
//     "data/images/5.jpg": require("../data/img/5.jpg"),
//     "data/images/6.jpg": require("../data/img/6.webp"),
//     "data/images/7.jpg": require("../data/img/7.png"),
//     "data/images/8.jpg": require("../data/img/8.jfif"),
//     "data/images/9.jpg": require("../data/img/9.jfif"),
//     "data/images/10.jpg": require("../data/img/10.jpg"),
// };

// const ProductsScreen = (props) => {
//     const [products, setProducts] = useState([]);

//     useEffect(() => {
//         setProducts(ProductsData);
//     }, []);

//     return (
//         <View style={styles.container}>
//             <Text style={styles.title}>Computer Parts</Text>

//             <FlatList
//                 data={products}
//                 keyExtractor={(item) => item.id.toString()}
//                 renderItem={({ item }) => (
//                     <View style={styles.itemContainer}>
//                         <Text style={styles.itemID}>
//                             ID: {item.id}
//                         </Text>

//                         <Image
//                             source={imageMap[item.image]}
//                             style={styles.productImage}
//                             resizeMode="contain"
//                         />

//                         <Text style={styles.itemTitle}>
//                             {item.title}
//                         </Text>

//                         <Text style={styles.itemDescription}>
//                             {item.description}
//                         </Text>
//                     </View>
//                 )}
//             />

//             <TouchableOpacity
//                 style={styles.backBtn}
//                 onPress={() => props.navigation.goBack()}
//             >
//                 <Text style={styles.btnText}>Go Back</Text>
//             </TouchableOpacity>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 10,
//         backgroundColor: "#f5f5f5",
//     },

//     title: {
//         fontSize: 24,
//         fontWeight: "bold",
//         textAlign: "center",
//         marginVertical: 15,
//         color: "#333",
//     },

//     itemContainer: {
//         backgroundColor: "#fff",
//         borderRadius: 8,
//         padding: 12,
//         marginVertical: 8,
//         marginHorizontal: 5,
//         shadowColor: "#000",
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.1,
//         shadowRadius: 3,
//         elevation: 3,
//     },

//     itemID: {
//         fontSize: 12,
//         color: "#999",
//         marginBottom: 5,
//     },

//     productImage: {
//         width: "100%",
//         height: 180,
//         marginBottom: 10,
//     },

//     itemTitle: {
//         fontSize: 18,
//         fontWeight: "bold",
//         color: "#333",
//         marginBottom: 8,
//     },

//     itemDescription: {
//         fontSize: 14,
//         color: "#555",
//         lineHeight: 20,
//     },

//     backBtn: {
//         backgroundColor: "#007AFF",
//         paddingVertical: 12,
//         borderRadius: 8,
//         alignItems: "center",
//         margin: 10,
//     },

//     btnText: {
//         color: "#fff",
//         fontSize: 14,
//         fontWeight: "600",
//     },
// });

// export default ProductsScreen;
