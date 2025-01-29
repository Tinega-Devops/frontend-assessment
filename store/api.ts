import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.coingecko.com/api/v3" }),
  endpoints: (builder) => ({
    getCryptoData: builder.query({
      query: ({ coin, days }) =>
        `coins/${coin}/market_chart?vs_currency=usd&days=${days}&interval=daily`,
      transformResponse: (response: { prices: [number, number][] }) =>
        response.prices.map(([timestamp, price]) => ({
          date: new Date(timestamp).toLocaleDateString(),
          price,
        })),
    }),
  }),
});

export const { useGetCryptoDataQuery } = cryptoApi;
