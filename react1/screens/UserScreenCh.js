import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";

const UserScreen = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      if (!response.ok) throw new Error("Failed to fetch users.");

      const jsonData = await response.json();

      setUsers(jsonData);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.errorText}>Error: {error}</Text>
      </View>
    );
  }

  const renderUserItem = ({ item }) => (
    <View style={styles.userItem}>
      <Text style={styles.userId}>#{item.id}</Text>
      <Text style={styles.userName}>{item.name}</Text>
      <Text style={styles.userEmail}>{item.email}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Users</Text>

      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderUserItem}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },

  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  header: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 16,
    color: "#333",
    marginTop: 8,
  },

  flatListContent: {
    paddingHorizontal: 12,
    paddingBottom: 16,
  },

  userItem: {
    backgroundColor: "#fff",
    padding: 12,
    marginBottom: 8,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  userId: {
    fontSize: 12,
    color: "#888",
    marginBottom: 4,
    fontWeight: "600",
  },

  userName: {
    fontSize: 18,
    color: "#333",
    fontWeight: "600",
  },

  userEmail: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },

  errorText: {
    fontSize: 16,
    color: "#d32f2f",
  },
});

export default UserScreen;