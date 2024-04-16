import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, Entypo, Ionicons, Octicons } from "@expo/vector-icons";
import History from "../HistoryScreen/History";
import NewDonation from "../NewDonationScreen/NewDonation";
import Profile from "../ProfileScreen/Profile";
import { StyleSheet, View, TextInput, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Entypo, Ionicons, Octicons } from "@expo/vector-icons";

// Import your screens

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <View style={styles.greeting}>
          <Text style={styles.greetingText}>Hi Rahul</Text>
          <Text style={styles.greetingSubText}>
            Where do you want to donate today?
          </Text>
        </View>
        <View style={styles.profileContainer}>
          <Image
            style={styles.profileIcon}
            source={require("../../../assets/avatar.png")}
          />
        </View>
      </View>
      <View style={styles.searchContainer}>
        <AntDesign
          style={styles.searchIcon}
          name="search1"
          size={24}
          color="black"
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Search charity, NGO etc."
        />
      </View>
      <View style={styles.cardContainer}>
        <View style={styles.donationStatsContainer}>
          <Text style={styles.yourDonationText}>Your Donations</Text>
          <Text style={styles.statsText}>12 Kgs</Text>
        </View>
        <View style={styles.graphContainer}>
          <Image
            style={styles.graphLine}
            source={require("../../../assets/graph.png")}
          />
        </View>
        <View style={styles.scaleIndicatorContainer}></View>
      </View>
      <View style={styles.donationNeededContainer}>
        <Text style={{ fontSize: 20, fontWeight: "bold", paddingLeft: 20 }}>
          Donation Needed
        </Text>
      </View>
      <View style={styles.footerContainer}></View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  header: {
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  greetingText: {
    fontSize: 32,
    fontWeight: "500",
  },
  greetingSubText: {
    fontSize: 18,
  },
  profileContainer: {},
  profileIcon: {
    height: 70,
    width: 70,
  },
  searchContainer: {
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    borderRadius: 20,
    marginHorizontal: 20,
    elevation: 10,
    marginVertical: 20,
    alignItems: "center",
    height: 50,
  },
  searchInput: {
    flex: 1,
  },
  searchIcon: {
    marginLeft: 15,
    marginRight: 5,
  },
  cardContainer: {
    backgroundColor: "#1B9FAF",
    height: 200,
    width: "90%",
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  graphContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  graphLine: {
    height: 100,
    width: "100%",
    alignSelf: "flex-end",
  },
  scaleIndicatorContainer: {
    width: 50,
    justifyContent: "flex-end",
    paddingBottom: 10,
  },
  scaleText: {
    fontSize: 12,
    color: "#FFFFFF",
  },

  donationStatsContainer: {
    position: "absolute",
    top: 20,
    left: 10,
  },

  yourDonationText: {
    fontSize: 18,
    color: "#FFFFFF",
  },
  statsText: {
    fontSize: 50,
    fontWeight: "600",
    color: "#FFFFFF",
    marginTop: 5,
  },
  donationNeededContainer: {},
  footerContainer: {},
  footerIcon: {},
});
