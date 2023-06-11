import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserState = {
  id: string;
};

const initialState = {
  id: "",
} as UserState;

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userId: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
    },
  },
});

export const {userId} = userSlice.actions;
export default userSlice.reducer;
