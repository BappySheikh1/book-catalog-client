import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://book-catalog-backend-ashy.vercel.app/api/v1/",
  }),
  tagTypes: ["comments"],
  endpoints: () => ({}),
});

export default api;
