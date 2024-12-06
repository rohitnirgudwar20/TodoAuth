import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Tododata from "./Components/Tododata";
import { store } from "./redux/store";
import { Provider, useSelector } from "react-redux";
import Login from "./Components/Login";
import { SignInMethod } from "firebase/auth";
import Signup from "./Components/Signup";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
function AppcContain() {
  const { user } = useSelector((state) => state.auth);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!user ? (
          <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />

          </>
        ) : (
          <Stack.Screen name="Todoapp" component={Tododata} />
        )}
      </Stack.Navigator>
      {/* <View style={styles.container}></View> */}
    </NavigationContainer>
  );
}
export default function App() {
  return (
    <Provider store={store}>
      <AppcContain />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: "80",
    margin: "15",
  },
});
