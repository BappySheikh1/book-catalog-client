import api from "../../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // book query start
    getLimitBooks: builder.query({
      query: () => `/book/limit`,
    }),
    getBooks: builder.query({
      query: () => `/book`,
    }),
    getSingleBooks: builder.query({
      query: (id) => `/book/${id}`,
    }),
    // book query end
    // -----------------------------------------
    // book mutation start
    updateBooks: builder.mutation({
      query: ({ id, data }) => ({
        url: `/book/${id}`,
        method: 'PATCH',
        body: data,
      }),
    }),
    deleteBooks: builder.mutation({
      query: ({ id }) => ({
        url: `/book/${id}`,
        method: 'DELETE'
      }),
    }),
   // book mutation end
  //  -------------------------------------------------
  //  comment start
    postComment: builder.mutation({
      query: ({ id, data }) => ({
        url: `/book/comment/${id}`,
        method: 'POST',
        body: data,
      }),
     
    }),
    getComment: builder.query({
      query: (id) => `/book/comment/${id}`,
     
    }),
    // comment end
  }),
});

export const {
  useGetBooksQuery,
  useGetSingleBooksQuery,
  useGetLimitBooksQuery,
  useDeleteBooksMutation,
  useUpdateBooksMutation,
  usePostCommentMutation,
  useGetCommentQuery
} = bookApi;
