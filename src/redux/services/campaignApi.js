import { createApi } from "@reduxjs/toolkit/query/react";

import apiBaseQuery from "./axiosBaseQuery";

export const CAMPAIGN_API = "campaignApi";

export const campaignApi = createApi({
  reducerPath: CAMPAIGN_API,
  baseQuery: apiBaseQuery,
  tagTypes: ["campaign", "login"],
  endpoints: (builder) => ({
    getAllCampaign: builder.query({
      query: () => ({
        url: "donation_campaign/list",
      }),
      providesTags: ["campaign"],
    }),
    getCampaign: builder.query({
      query: (id) => ({
        url: `get-by-id/${id}`,
      }),
      providesTags: ["campaign"],
    }),
    createCampaign: builder.mutation({
      query: (body) => ({
        url: "donation_campaign/add",
        method: "POST",
        body,
      }),
      invalidatesTags: ["campaign"],
    }),
    updateCampaign: builder.mutation({
      query: (body) => ({
        url: "donation_campaign/add",
        method: "POST",
        body,
      }),
      invalidatesTags: ["campaign"],
    }),
    sentOtp: builder.mutation({
      query: (body) => ({
        url: "/users/sendOtp",
        method: "POST",
        body,
      }),
      invalidatesTags: ["login"],
    }),
    verifyOtp: builder.mutation({
      query: (body) => ({
        url: "/users/verifyOTP",
        method: "POST",
        body,
      }),
      invalidatesTags: ["login"],
    }),
  }),
});

export const {
  useGetAllCampaignQuery,
  useCreateCampaignMutation,
  useGetCampaignQuery,
  useUpdateCampaignMutation,
  useSentOtpMutation,
  useVerifyOtpMutation,
} = campaignApi;
