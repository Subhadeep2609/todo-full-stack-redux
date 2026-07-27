import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  todos: [],
  loading: false,
  error: null,
};

const BASE_URL = "http://localhost:8001";

//  FETCH TODOS

export const fetchTodos = createAsyncThunk(
  "todo/fetchAll",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(`${BASE_URL}/getAll`);
      return res.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to fetch todos."
      );
    }
  }
);

//  ADD TODO

export const addTodo = createAsyncThunk(
  "todo/create",
  async (data, thunkAPI) => {
    try {
      const title = data.title?.trim();


      if (!title) {
        return thunkAPI.rejectWithValue("Task cannot be empty.");
      }


      const { todo } = thunkAPI.getState();

      const alreadyExists = todo.todos.some(
        (item) => item.title.trim().toLowerCase() === title.toLowerCase()
      );

      if (alreadyExists) {
        return thunkAPI.rejectWithValue("Task already exists.");
      }

      const res = await axios.post(`${BASE_URL}/create`, {
        title,
      });

      return res.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to create todo."
      );
    }
  }
);

//DELETE TODO

export const delTodo = createAsyncThunk(
  "todo/delete",
  async (id, thunkAPI) => {
    try {
      if (!id) {
        return thunkAPI.rejectWithValue("Invalid Todo ID.");
      }

      await axios.delete(`${BASE_URL}/delete/${id}`);

      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to delete todo."
      );
    }
  }
);

//UPDATE TODO

export const updateTodo = createAsyncThunk(
  "todo/update",
  async ({ id, data }, thunkAPI) => {
    try {
      if (!id) {
        return thunkAPI.rejectWithValue("Invalid Todo ID.");
      }

      const title = data.title?.trim();

      if (!title) {
        return thunkAPI.rejectWithValue("Task cannot be empty.");
      }


      const { todo } = thunkAPI.getState();

      const alreadyExists = todo.todos.some(
        (item) =>
          item._id !== id &&
          item.title.trim().toLowerCase() === title.toLowerCase()
      );

      if (alreadyExists) {
        return thunkAPI.rejectWithValue("Task already exists.");
      }

      const res = await axios.put(`${BASE_URL}/update/${id}`, {
        title,
      });

      return res.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to update todo."
      );
    }
  }
);



const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder

      // FETCH
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ADD
      .addCase(addTodo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.loading = false;
        state.todos.push(action.payload);
      })
      .addCase(addTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // DELETE
      .addCase(delTodo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(delTodo.fulfilled, (state, action) => {
        state.loading = false;
        state.todos = state.todos.filter(
          (todo) => todo._id !== action.payload
        );
      })
      .addCase(delTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // UPDATE
      .addCase(updateTodo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        state.loading = false;

        const index = state.todos.findIndex(
          (todo) => todo._id === action.payload._id
        );

        if (index !== -1) {
          state.todos[index] = action.payload;
        }
      })
      .addCase(updateTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default todoSlice.reducer;
