import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://bookstore-backend-ahmed-begreatorco.vercel.app",
  //baseUrl: "http://localhost:3001",
  //credentials: "include",
});

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery,
  endpoints: (builder) => ({
    getCart: builder.query({
      query: (access_token) => {
        return {
          url: "/cart/",
          method: "GET",
          headers: {
            "x-auth-token": `${access_token}`,
          },
        };
      },
    }),
    addToCart: builder.mutation({
      query: ({ book_id, access_token }) => {
        return {
          url: "/cart/add_book",
          method: "POST",
          body: book_id,
          headers: {
            "x-auth-token": `${access_token}`,
          },
        };
      },
    }),
  }),
});
