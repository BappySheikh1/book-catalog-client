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
    createBook: builder.mutation({
      query: (data) => ({
        url: `/book/add-book`,
        method: "POST",
        body: data,
      }),
    }),

    updateBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `/book/${id}`,
        method: "PUT",
        body: data,
      }),
    }),
    deleteBooks: builder.mutation({
      query: (id) => ({
        url: `/book/${id}`,
        method: "DELETE",
      }),
    }),
    // book mutation end
    //  -------------------------------------------------
    //  comment start
    postComment: builder.mutation({
      query: ({ id, data }) => ({
        url: `/book/comment/${id}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["comments"],
    }),
    getComment: builder.query({
      query: (id) => `/book/comment/${id}`,
      providesTags: ["comments"],
    }),
    // comment end
  }),
});

export const {
  useGetBooksQuery,
  useGetSingleBooksQuery,
  useGetLimitBooksQuery,
  useDeleteBooksMutation,
  useUpdateBookMutation,
  usePostCommentMutation,
  useGetCommentQuery,
  useCreateBookMutation,
} = bookApi;
