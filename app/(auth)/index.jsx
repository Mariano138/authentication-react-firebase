import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { useRouter } from "expo-router";

export default function Welcome() {
  const router = useRouter();

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        router.push("../");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <View>
      <Text>¡Bienvenido a la pantalla principal!</Text>
      <Button title="Cerrar sesión" onPress={handleLogOut} />
    </View>
  );
}

const styles = StyleSheet.create({});
