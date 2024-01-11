import React from "react";
import { View, Text,TextInput, TouchableOpacity,Image,FlatList } from "react-native";

import styles from "./welcome.style";
import { useState } from "react";
import { useRouter } from "expo-router";
import { icons,SIZES } from "../../../constants";
const Welcome = () => {
  const router = useRouter();
  return (
    <View>
      <View style={styles.container}>
      <Text style={styles.userName}>Hello</Text>
      <Text style={styles.welcomeMessage}>Find your perfect jon</Text>
      </View>
      <View>
        <View>
          <TextInput style={styles.searchInput}>
          </TextInput>
        </View>
      </View>
    </View>
  );
};

export default Welcome;
