import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import { db } from "../redux/firebaseconfig";
import { collection, where, addDoc, getDocs } from "firebase/firestore";
// const initialState = {
//   value: 0,
// };

export const addTodoAsync = createAsyncThunk(
  "todos/addTodoAsync",
  async ({ todo, userId }) => {
    const docRef = await addDoc(collection(db, "todos"), { ...todo, userId });
    return { id: docRef.id, ...todo, userId };
  }
);
export const fetchTodosAsync = createAsyncThunk(
  "todos/fetchTodosAsync",
  async (userId) => {
    // const querySnapshot = await getDocs(collection(db, "todos"));
    const querySnapshot = query(
      collection(db, "todos"),
      where("userId", "==", userId)
    );

    const list = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    // .filter((todo) => todo.userId === userId);
    console.log("list of todos", list);
    return list;
  }
);

export const todoSlice = createSlice({
  name: "todos",
  initialState: { todos: [], status: "idle" },

  extraReducers: (builder) => {
    builder
      .addCase(addTodoAsync.fulfilled, (state, action) => {
        console.log(action.payload);
        state.todos.push(action.payload);
      })
      .addCase(fetchTodosAsync.fulfilled, (state, action) => {
        state.todos = action.payload;
      });
  },
});

// export const { addTodos } = todoSlice.actions;
export default todoSlice.reducer;
