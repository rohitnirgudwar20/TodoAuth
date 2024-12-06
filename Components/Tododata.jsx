import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { addTodos } from "../features/todoSlice";
import { addTodoAsync, fetchTodosAsync } from "../features/todoSlice";

const Tododata = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (user) {
      dispatch(fetchTodosAsync(user.uid));
    }
  }, [dispatch,user]);
  const submitHandler = () => {
    const data = {
      titlename: title,
      description: description,
      date: date,
    };
    if (user) {
      dispatch(addTodoAsync({ todo: data, userId: user.uid })); // Add todo with userId
    }
    setTitle("");
    setDescription("");
    setDate("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>TodoList</Text>

      <View style={styles.inputgroup}>
        <Text style={styles.label}>Title :</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter the Title"
          value={title}
          onChangeText={(text) => setTitle(text)}
        />
      </View>
      <View style={styles.inputgroup}>
        <Text style={styles.label}>Description</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Enter the Description"
          value={description}
          onChangeText={(text) => setDescription(text)}
        />
      </View>
      <View style={styles.inputgroup}>
        <Text style={styles.label}>Date</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter the Date"
          value={date}
          onChangeText={(text) => setDate(text)}
        />
      </View>

      <Button title="Submit" onPress={submitHandler} />

      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.todoItem}>
            <Text style={styles.todoTitle}>{item.titlename} </Text>
            <Text>{item.description}</Text>
            <Text>{item.date}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f8f9fa",
    flex: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#555",
  },
  inputgroup: {
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    fontSize: 14,
    backgroundColor: "#fff",
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
  todoItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  todoTitle: {
    fontWeight: "bold",
  },
});

export default Tododata;
