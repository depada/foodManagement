import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { FontAwesome, Fontisto, AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
// import { useNavigation } from "@react-navigation/native";

const Signup = () => {
  // const navigation = useNavigation();

  const handleSignUp = () => {
    // navigation.navigate("Signup");
    console.log("handleSignUp");
  };
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require("../../../assets/topVector.png")}
          style={styles.topImage}
        />
      </View>
      <View style={styles.signUpContainer}>
        <Text style={styles.signUpText}>Create an account</Text>
      </View>
      {/* <View>
        <Text style={styles.signInText}>Sign in to your Account</Text>
      </View> */}
      <View style={styles.inputContainer}>
        <FontAwesome
          name="user"
          size={24}
          color="#9A9A9A"
          style={styles.inputIcon}
        />
        <TextInput style={styles.textInput} placeholder="Username" />
      </View>
      <View style={styles.inputContainer}>
        <Fontisto
          name="locked"
          size={24}
          color="#9A9A9A"
          style={styles.inputIcon}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          secureTextEntry
        />
      </View>

      <View style={styles.inputContainer}>
        <AntDesign
          name="mail"
          size={24}
          color="#9A9A9A"
          style={styles.inputIcon}
        />
        <TextInput style={styles.textInput} placeholder="Email" />
      </View>
      <View style={styles.inputContainer}>
        <FontAwesome
          name="mobile"
          size={40}
          color="#9A9A9A"
          style={styles.inputIcon}
        />
        <TextInput style={styles.textInput} placeholder="Mobile" />
      </View>
      <View style={styles.signInButtonContainer}>
        <Text style={styles.signIn}>Sign up</Text>
        <LinearGradient
          colors={["#F97794", "#623AA2"]}
          style={styles.linearGradient}
        >
          <AntDesign name="arrowright" size={24} color={"white"} />
        </LinearGradient>
      </View>
      <View style={styles.footerContainer}>
        <TouchableOpacity onPress={handleSignUp}>
          <Text style={styles.footerText}>or Create using Google</Text>
          <View style={styles.socialIconContainer}>
            <AntDesign
              style={styles.socialIcon}
              name="google"
              size={24}
              color="black"
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.leftVectorContainer}>
        <ImageBackground
          style={styles.leftVectorImage}
          source={require("../../../assets/leftVector.png")}
        />
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5F5",
    flex: 1,
    position: "relative",
  },
  topImage: {
    width: "100%",
    height: 150,
  },
  signUpContainer: {},
  signUpText: {
    textAlign: "center",
    fontSize: 48,
    fontWeight: "500",
    color: "#262626",
    marginBottom: 30,
    fontWeight: "700",
  },
  // signInText: {
  //   textAlign: "center",
  //   fontSize: 20,
  //   color: "#262626",
  //   marginBottom: 30,
  // },
  inputContainer: {
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    borderRadius: 20,
    marginHorizontal: 20,
    elevation: 10,
    marginVertical: 20,
    alignItems: "center",
    height: 50,
  },
  inputIcon: {
    marginLeft: 15,
    marginRight: 5,
  },
  textInput: {
    flex: 1,
  },
  forgotPassword: {
    color: "#BEBEBE",
    textAlign: "right",
    width: "90%",
    fontSize: 18,
  },
  signInButtonContainer: {
    flexDirection: "row",
    marginTop: 70,
    width: "90%",
    justifyContent: "flex-end",
  },
  signIn: {
    color: "#262626",
    fontSize: 25,
    fontWeight: "bold",
  },
  linearGradient: {
    height: 34,
    width: 56,
    borderRadius: 17,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
  },
  footerContainer: {
    marginTop: 20,
    width: "90%",
  },
  footerText: {
    color: "#262626",
    textAlign: "center",
    fontSize: 18,
    // marginTop: 120,
  },
  leftVectorContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
  },
  leftVectorImage: {
    height: 285,
    width: 220,
  },
  socialIconContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  socialIcon: {
    backgroundColor: "#FFFFFF",
    elevation: 10,
    margin: 10,
    padding: 20,
    borderRadius: 100,
  },
});
