import 'server-only';

import { fetchAccessToken } from "hume";

export const getAccessToken = async () => {
  const accessToken = await fetchAccessToken({
    apiKey: String(process.env.API_KEY),
    secretKey: String(process.env.SECRET_KEY),
  });

  if (accessToken === "undefined") {
    return null;
  }

  return accessToken ?? null;
};
