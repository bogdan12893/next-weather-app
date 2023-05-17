export const geoUrl: string | undefined = process.env.RAPID_API_URL;
export const geoApiOptions: any = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.RAPID_API_KEY,
    "X-RapidAPI-Host": process.env.RAPID_API_HOST,
  },
};
