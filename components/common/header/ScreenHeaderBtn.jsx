import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity, Image } from "react-native";
import styles from "./screenheader.style";
import { icons } from "../../../constants";

const ScreenHeaderBtn = ({ iconUrl, dimension, handlePless }) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePless}>
      <Image
        source={iconUrl}
        resizeMode="cover"
        style={styles.btnImg(dimension)}
      ></Image>
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
