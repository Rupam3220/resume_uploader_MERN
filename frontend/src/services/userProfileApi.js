import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const userProfileApi = createApi({
  reducerPath: 'userProfileApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api/v2/users' }),
  endpoints: (builder) => ({

    // Save User
    saveUser: builder.mutation ({
      query: (user) => {
        return {
            url: 'resume',
            method: 'POST',
            body: user
        }
      }
    }),


    // Get User
    retrieveUser: builder.query({
        query: () => {
            return {
                url: 'view-resume',
                method: 'GET'
            }
        }
    })


  }),
})


export const { useSaveUserMutation, useRetrieveUserQuery  } = userProfileApi