import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({
		baseUrl:
			"https://api.elchocrud.pro/api/v1/86ec6480165d5e1eb0f1818dcd542649/query",
	}),

	endpoints: (builder) => ({
		getTodoLists: builder.query({
			query: () => ({
				url: "",
				method: "GET",
			}),
			providesTags: ["car"],
		}),
		addTodoList: builder.mutation({
			query: (newList) => ({
				url: "",
				method: "POST",
				body: newList,
			}),
			invalidatesTags: ["car"],
		}),
		deleteTodoList: builder.mutation({
			query: ({ id }) => ({
				url: `/${id}`,
				method: "DELETE",
			}),
			providesTags: ["car"],
		}),
	}),

	refetchOnReconnect: true,
	refetchOnFocus: false,
	tagTypes: ["car"],
});

export const {
	useGetTodoListsQuery,
	useAddTodoListMutation,
	useDeleteTodoListMutation,
} = api;
