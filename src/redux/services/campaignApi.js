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
      query: ({ id, body }) => ({
        url: `donation_campaign/update/${id}`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["campaign"],
    }),
    deleteCampaign: builder.mutation({
      query: (id) => ({
        url: `donation_campaign/delete/${id}`,
        method: "POST",
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
      query: ({ id, body }) => ({
        url: `subDonation/update/${id}`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["campaign"],
    }),
    deleteSubCampaign: builder.mutation({
      query: (id) => ({
        url: `/subDonation/delete/${id}`,
        method: "POST",
      }),
      invalidatesTags: ["campaign"],
    }),
    deleteEnquiry: builder.mutation({
      query: (id) => ({
        url: `enquiry/delete/${id}`,
        method: "POST",
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
  useDeleteCampaignMutation,
  useDeleteSubCampaignMutation,
  useDeleteEnquiryMutation,
} = campaignApi;
