import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("data/fetchData", async () => {
    const res = await fetch("https://hp-api.onrender.com/api/characters");
    const json = await res.json();
    return json;
});

const dataSlice = createSlice({
    name: "data",
    initialState: {
        status: "idle",
        items: [],
        error: null
    },
    reducers: {
        addData: (state, action) => {

        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchData.pending, (state) => {
            state.status = "loading"
        })
        .addCase(fetchData.fulfilled, (state, action) => {
            state.status = "resolved"
            state.items = action.payload
        })
        .addCase(fetchData.rejected, (state) => {
            state.status = "rejected"
            state.error = "There is an error"
        })
    }
});

export default dataSlice.reducer;