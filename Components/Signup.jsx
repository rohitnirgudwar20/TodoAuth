import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { signupUser } from "../features/authSlice";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const { loading, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch()

  const handleSignup = () => {
      console.log("handleSignup called"); // Debugging line
    if (password !== confirm) {
        return alert("Passwords do not match!");
      }
      dispatch(signupUser({ email, password }));
    

      alert("Signup successful!");

  };
  return (
    <View style={styles.container}>
      <Text style={styles.headingtext}>Welcome to Todo App!</Text>
      <Text style={styles.signuptext}>Signup</Text>
      <View>
        <Text>Name:</Text>
        <TextInput
          placeholder="Enter your name"
          style={styles.inputbox}
          value={name}
          onChangeText={(text) => setName(text)}
        />
      </View>
      <View>
        <Text>Email:</Text>
        <TextInput
          placeholder="Enter your Email"
          style={styles.inputbox}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View>
        <Text>Password:</Text>
        <TextInput
          placeholder="Enter Your Password"
          style={styles.inputbox}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <View>
        <Text>ConfirmPassword:</Text>
        <TextInput
          placeholder="Confirm Password"
          style={styles.inputbox}
          value={confirm}
          onChangeText={(text) => setConfirm(text)}
        />
      </View>
      <Button title="Signup" onPress={() => handleSignup()} />
      {error && <Text style={{ color: "red" }}>{error}</Text>}
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
  signuptext: {
    textAlign: "center",
    fontWeight: 600,
    marginBottom: 20,
    fontSize: 18,
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
export default Signup;
