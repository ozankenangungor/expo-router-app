import React from "react";
import "../global.css";
import { ImageBackground, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import beachImage from "@/assets/meditation-images/beach.webp";
import { SafeAreaView } from "react-native-safe-area-context";

const image = { uri: "https://legacy.reactjs.org/logo-og.png" };

const App = () => (
  <View className="flex-1">
    <ImageBackground source={beachImage} resizeMode="cover" className="flex-1">
      <LinearGradient
        className="flex-1"
        colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)"]}
      >
        <SafeAreaView>
          <Text className="text-center text-white font-bold text-4xl">
            Simple Meditation
          </Text>
        </SafeAreaView>
      </LinearGradient>
    </ImageBackground>
  </View>
);

export default App;
