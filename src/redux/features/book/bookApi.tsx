import api from "../../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getLimitBooks: builder.query({
      query: () => `/book/limit`,
    }),
    getBooks: builder.query({
      query: () => `/book`,
    }),
    getSingleBooks: builder.query({
      query: (id) => `/book/${id}`,
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetSingleBooksQuery,
  useGetLimitBooksQuery
} = bookApi;
