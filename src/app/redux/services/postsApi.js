import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:4000" }),
  tagTypes:['Movie'],
  endpoints: (builder) => ({
    posts: builder.query({
      query: () => "/movies",
      providesTags:['Movie']
    }),

    post: builder.query({
      query: (id) => `/movies/${id}`,
    }),

    addPost: builder.mutation({
      query: (newPost) => ({
        url: "/movies",
        method: "POST",
        body: newPost,
      }),
      invalidatesTags:['Movie']
    }),

    editPost: builder.mutation({
      query: ({ id, ...newData }) => ({
        url: `/movies/${id}`,
        method: "PATCH",
        body: newData,
      }),
      invalidatesTags:['Movie']
    }),

    deletePost: builder.mutation({
      query: ({id}) => ({
        url: `movies/${id}`,
        method: "DELETE",
        body:id
      }),
      invalidatesTags:['Movie']
    }),
  }),
});

export const {
  usePostsQuery,
  usePostQuery,
  useAddPostMutation,
  useEditPostMutation,
  useDeletePostMutation,
} = postApi;
