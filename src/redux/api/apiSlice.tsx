import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000" }),
  tagTypes: ["comments"],
  endpoints: () => ({}),
});

export default api;
