import { USER_LOGIN_URL } from "../constants/endpoints";
import { apiSlice } from "./baseAPISlice";

const userAPISlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: USER_LOGIN_URL,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { login } = userAPISlice;
