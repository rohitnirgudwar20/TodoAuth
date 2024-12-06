import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import React, { useState } from "react";
import { loginUser } from "../features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { loading, error, user } = useSelector((state) => state.auth);
  const loginhandle = () => {
    dispatch(loginUser({ email, password }));
    // alert("login successfull");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.headingtext}> Welcome to My app!</Text>
      <Text style={styles.logintext}>Login</Text>

      <TextInput
        placeholder="Enter Your Email"
        style={styles.inputbox}
        value={email}
        onChangeText={(text)=>setEmail(text)}
      />
      <TextInput
        placeholder="Enter Your Password"
        style={styles.inputbox}
        value={password}
        onChangeText={(text)=>setPassword(text)}
      />
      <Button
        title={loading ? "Logging In..." : "Log In"}
        onPress={() => loginhandle()}
      />
      {error && <Text style={{ color: "red" }}>{error}</Text>}
      {user && <Text>Welcome, {user.email}!</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f8f9fa",
  },
  headingtext: {
    textAlign: "center",
    color: "#ccc",
    fontWeight: 600,
    marginBottom: 10,
    fontSize: 14,
  },
  logintext: {
    textAlign: "center",
    fontWeight: 600,
    marginBottom: 20,
    fontSize: 18,
  },
  crendentials: {
    flexDirection: "row",
  },
  inputbox: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#fff",
    marginBottom: 15,
  },
});

export default Login;
