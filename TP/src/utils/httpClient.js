import axios from "axios";

//it should be secret but for now its here
export const FLIGHT_API_TOKEN = "db937b78de6bcd09e8e7d09a13997e53";

export const flightsHttpClient = axios.create({
  baseURL: "https://api.travelpayouts.com/v2",
  headers: {
    "X-Access-Token": FLIGHT_API_TOKEN,
  },
});
