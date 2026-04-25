import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Linking, useWindowDimensions } from "react-native";

const HireProfileScreen = ({ route }) => {
  const { profile } = route.params;
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  const [projects, setProjects] = useState([
    { id: 1, title: "E-commerce Website", image: require('../assets/avatar1.jpg'), link: "https://example.com/project1" },
    { id: 2, title: "Mobile App", image: require('../assets/avatar2.jpg'), link: "https://example.com/project2" },
    { id: 3, title: "Dashboard", image: require('../assets/avatar3.jpg'), link: "https://example.com/project3" },
  ]);

  const handleProjectPress = (link) => {
    Linking.openURL(link);
  };

  return (
    <View style={styles.container}>
    <ScrollView style={styles.container}>
      <View style={isMobile ? styles.mobileMainContent : styles.mainContent}>
        {isMobile ? (
          // Mobile Layout - Profile on top, Projects below
          <>
            <View style={styles.mobileProfileSection}>
              <View style={styles.mobileProfileCard}>
                <Image source={profile.image} style={styles.mobileProfileImage} />
                <Text style={styles.profileName}>{profile.name}</Text>
                <Text style={styles.profileDescription}>{profile.description}</Text>
                
                <View style={styles.contactSection}>
                  <Text style={styles.contactTitle}>Get in Touch</Text>
                  <TouchableOpacity style={styles.contactButton}>
                    <Text style={styles.contactButtonText}>Email</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.contactButton}>
                    <Text style={styles.contactButtonText}>Phone</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.contactButton}>
                    <Text style={styles.contactButtonText}>LinkedIn</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={styles.mobileProjectsSection}>
              <Text style={styles.sectionTitle}>Projects</Text>
              <View style={styles.mobileProjectsGrid}>
                {projects.map((project) => (
                  <TouchableOpacity
                    key={project.id}
                    style={styles.mobileProjectTile}
                    onPress={() => handleProjectPress(project.link)}
                  >
                    <Image source={project.image} style={styles.mobileProjectImage} />
                    <Text style={styles.projectTitle}>{project.title}</Text>
                    <Text style={styles.projectLink}>Click to visit →</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </>
        ) : (
          // Desktop Layout - Projects left, Profile right
          <>
            <View style={styles.projectsSection}>
              <Text style={styles.sectionTitle}>Projects</Text>
              <View style={styles.projectsGrid}>
                {projects.map((project) => (
                  <TouchableOpacity
                    key={project.id}
                    style={styles.projectTile}
                    onPress={() => handleProjectPress(project.link)}
                  >
                    <Image source={project.image} style={styles.projectImage} />
                    <Text style={styles.projectTitle}>{project.title}</Text>
                    <Text style={styles.projectLink}>Click to visit →</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <View style={styles.profileInfoSection}>
              <View style={styles.profileCard}>
                <Image source={profile.image} style={styles.profileImage} />
                <Text style={styles.profileName}>{profile.name}</Text>
                <Text style={styles.profileDescription}>{profile.description}</Text>
                
                <View style={styles.contactSection}>
                  <Text style={styles.contactTitle}>Get in Touch</Text>
                  <TouchableOpacity style={styles.contactButton}>
                    <Text style={styles.contactButtonText}>Email</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.contactButton}>
                    <Text style={styles.contactButtonText}>Phone</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.contactButton}>
                    <Text style={styles.contactButtonText}>LinkedIn</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </>
        )}
      </View>
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  mainContent: {
    flex: 1,
    flexDirection: "row",
    padding: 20,
    gap: 20,
  },
  projectsSection: {
    flex: 1,
    minWidth: 300,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333",
  },
  projectsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 15,
  },
  projectTile: {
    width: "48%",
    backgroundColor: "white",
    borderRadius: 10,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  projectImage: {
    width: "100%",
    height: 150,
  },
  projectTitle: {
    fontSize: 14,
    fontWeight: "bold",
    padding: 10,
    color: "#333",
  },
  projectLink: {
    fontSize: 12,
    color: "green",
    paddingHorizontal: 10,
    paddingBottom: 10,
    fontWeight: "600",
  },
  profileInfoSection: {
    width: 280,
    minWidth: 280,
  },
  profileCard: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 5,
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 15,
  },
  profileName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
    alignSelf: "center",
  },
  profileDescription: {
    fontSize: 13,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
    lineHeight: 18,
  },
  contactSection: {
    width: "100%",
    marginTop: 15,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  contactTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 12,
    textAlign: "center",
  },
  contactButton: {
    backgroundColor: "green",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 6,
    marginBottom: 8,
    alignItems: "center",
  },
  contactButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 13,
  },
  mobileProfileImage: {
    width: 150,
    height: 150, 
    borderRadius: 75,
    marginBottom: 15,
    alignSelf: "center",
  },
  mobileProjectImage: {
    width: 700,
    height: 120,
    alignSelf: "center",
  },
  mobileMainContent: {
    flex: 1,
  },
});

export default HireProfileScreen;
