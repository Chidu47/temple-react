import { createApi } from "@reduxjs/toolkit/query/react";

import apiBaseQuery from "./axiosBaseQuery";

export const CAMPAIGN_API = "campaignApi";

export const campaignApi = createApi({
  reducerPath: CAMPAIGN_API,
  baseQuery: apiBaseQuery,
  tagTypes: ["campaign", "login", "users"],
  endpoints: (builder) => ({
    getAllCampaign: builder.query({
      query: () => ({
        url: "donation_campaign/list",
      }),
      providesTags: ["campaign"],
    }),
    getCampaign: builder.query({
      query: (id) => ({
        url: `donation_campaign/get-by-id/${id}`,
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
        url: "donation_campaign/update",
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
    getAllUser: builder.query({
      query: () => ({
        url: "/users/get-all-users",
      }),
      providesTags: ["users"],
    }),
    getAllSubCampaign: builder.query({
      query: () => ({
        url: "subDonation/list",
      }),
      providesTags: ["subCampaign"],
    }),
    getSubCampaign: builder.query({
      query: (id) => ({
        url: `get-by-id/${id}`,
      }),
      providesTags: ["subCampaign"],
    }),
    createSubCampaign: builder.mutation({
      query: (body) => ({
        url: "subDonation/create",
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["campaign"],
    }),
    updateSubCampaign: builder.mutation({
      query: (body) => ({
        url: "subDonation/add",
        method: "POST",
        body,
      }),
      invalidatesTags: ["campaign"],
    }),
    getAllEnquiries: builder.query({
      query: () => ({
        url: "enquiry/list",
      }),
      providesTags: ["campaign"],
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
  useGetAllUserQuery,
  useGetAllSubCampaignQuery,
  useGetSubCampaignQuery,
  useCreateSubCampaignMutation,
  useUpdateSubCampaignMutation,
  useGetAllEnquiriesQuery,
} = campaignApi;
