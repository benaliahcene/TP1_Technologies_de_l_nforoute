import { flightsHttpClient } from "../utils/httpClient";

export const getFlights = async (
  params = {
    origin: "MOW",
    destination: "LED",
    period_type: "month",
    one_way: false,
    beginning_of_period: "",
    trip_duration: 7,
    currency: "usd",
    trip_class: 0,
  },
  page = 1
) => {
  const { data } = await flightsHttpClient.get("/prices/latest", {
    params,
    page,
    limit: 30,
    token: "db937b78de6bcd09e8e7d09a13997e53",
  });

  return data;
};

export default { getFlights };
