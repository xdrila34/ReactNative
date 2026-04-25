import React from "react"; 
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, useWindowDimensions } from "react-native-web";

const ProfileScreen = ({ navigation }) => {
    const { width } = useWindowDimensions();
    const isMobile = width < 768;

    const profiles = [
        {
            id: 1,
            name: "Drilon",
            image: require('../assets/avatar1.jpg'),
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        },
        {
            id: 2,
            name: "Yll",
            image: require('../assets/avatar2.jpg'),
            description: "Expert in web development and UI/UX design. Passionate about creating beautiful and functional applications."
        },
        {
            id: 3,
            name: "Donart",
            image: require('../assets/avatar3.jpg'),
            description: "Full-stack developer with experience in React, Node.js, and cloud technologies."
        },
        {
            id: 4,
            name: "Dyll",
            image: require('../assets/avatar4.jpg'),
            description: "Mobile app developer specializing in React Native and cross-platform development."
        },
        {
            id: 5,
            name: "Dronart",
            image: require('../assets/avatar5.jpg'),
            description: "Backend engineer with expertise in database design and API development."
        },
    ];

    const handleHireMe = (profile) => {
        navigation.navigate('HireProfile', { profile });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>Discover Our Talents</Text>
            <ScrollView 
                horizontal={!isMobile}
                pagingEnabled={false}
                scrollEventThrottle={16}
                showsHorizontalScrollIndicator={!isMobile}
                showsVerticalScrollIndicator={isMobile}
                style={isMobile ? styles.verticalCarousel : styles.carousel}
                contentContainerStyle={isMobile ? styles.verticalCarouselContent : styles.carouselContent}
                scrollEnabled={true}
            >
                {profiles.map((profile) => (
                    <View key={profile.id} style={isMobile ? styles.verticalCarouselItem : styles.carouselItem}>
                        <View style={isMobile ? styles.verticalProfileCard : styles.profileCard}>
                            <Image source={profile.image} style={isMobile ? styles.verticalProfileImage : styles.profileImage} />
                            
                            <View style={styles.profileInfo}>
                                <Text style={styles.profileName}>{profile.name}</Text>
                                <Text style={styles.profileDescription}>{profile.description}</Text>
                            </View>
                            
                            <TouchableOpacity 
                                style={styles.hireButton}
                                onPress={() => handleHireMe(profile)}
                            >
                                <Text style={styles.hireButtonText}>Hire Me</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
    },
    textStyle: {
        textAlign: "center",
        fontSize: 24,
        marginVertical: 20,
        fontWeight: "bold",
        color: "#333",
    },
    carousel: {
        flex: 1,
        overflow: 'auto',
    },
    verticalCarousel: {
        flex: 1,
    },
    carouselContent: {
        paddingHorizontal: 10,
        paddingVertical: 20,
        gap: 20,
    },
    verticalCarouselContent: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        gap: 15,
    },
    carouselItem: {
        width: 380,
        minHeight: 500,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 5,
        flexShrink: 0,
    },
    verticalCarouselItem: {
        width: "100%",
        minHeight: 450,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    profileCard: {
        backgroundColor: "white",
        borderRadius: 15,
        padding: 20,
        alignItems: "center",
        width: "100%",
        minHeight: 550,
        shadowColor: "#000",
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 5,
        justifyContent: "space-between",
    },
    verticalProfileCard: {
        backgroundColor: "white",
        borderRadius: 15,
        padding: 15,
        alignItems: "center",
        width: "100%",
        minHeight: 400,
        shadowColor: "#000",
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 5,
        justifyContent: "space-between",
    },
    profileImage: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginBottom: 15,
    },
    verticalProfileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 10,
    },
    profileInfo: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 10,
    },
    profileName: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 12,
    },
    profileDescription: {
        fontSize: 13,
        color: "#666",
        textAlign: "center",
        lineHeight: 20,
    },
    hireButton: {
        backgroundColor: "green",
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 8,
        width: "80%",
        alignItems: "center",
        marginTop: 10,
    },
    hireButtonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16,
    },
});

export default ProfileScreen;