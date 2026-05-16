import React, {useState, useEffect} from "react";
import {View, Text, StyleSheet, FlatList, ActivityIndicator} from 'react-native'

const PostScreen = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            setLoading(true);
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            if (!response.ok) throw new Error("Failed to fetch posts.");
            const jsonData = await response.json();
            setPosts(jsonData);
            setError(null);
        }catch (err) {
            setError(err.message);
        }finally {
            setLoading(false);
        }
    };

    if(loading) {
        return (
            <View style = {styles.centerContainer}>
                <ActivityIndicator size="large" color="#0000ff"/>
            </View>
        );
    };
    if(error) {
        return (
            <View style={styles.centerContainer}>
                <Text style={styles.errorText}>Error: {error}</Text>

            </View>
        );
    };

    const renderPostItem = ({item}) => (
        <View style={styles.postItem}>
            <Text style={styles.postId}>#{item.id}</Text>
            <Text style={styles.postTitle}>#{item.title}</Text>
        </View>
    );
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Posts</Text>
            <FlatList
                data={posts}
                keyExtractor={(item) => item.id.toString()}
                renderItem = {renderPostItem}
                contentContainerStyle = {styles.flatListContent}
            />
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5"
    },
    centerContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
    },
    header: {
        fontSize: 24,
        fontWeight: "bold",
        padding: 16,
        color: "#333",
        marginTop: 8
    },
    flatListContent: {
        paddingHorizontal: 12,
        paddingBottom: 16,
    },
    postItem: {
        backgroundColor: '#fff',
        padding: 12,
        marginBottom: 8,
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3
    },
    postId: {
        fontSize: 12,
        color: '#888',
        marginBottom: 4,
        fontWeight: '600'
    },
    postTitle: {
        fontSize: 16,
        color: '#333',
        fontWeight: '500',
        lineHeight:22,
    },
    errorText: {
        fontSize: 16,
        color: '#d32f2f'
    }
});

export default PostScreen;