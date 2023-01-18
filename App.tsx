import * as LocalAuthentication from "expo-local-authentication";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  async function authenticate() {
    const result = await LocalAuthentication.authenticateAsync();
    setIsAuthenticated(result.success);
  }

  return (
    <View style={styles.container}>
      {isAuthenticated ? (
        <Text> Você está autenticado</Text>
      ) : (
        <>
          <Text> Você não está autenticado</Text>
          <TouchableOpacity onPress={authenticate} style={styles.button}>
            <Text>Autenticar</Text>
          </TouchableOpacity>
        </>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    padding: 10,
    backgroundColor: "green",
    borderRadius: 5,
    marginTop: 15,
  },
});
