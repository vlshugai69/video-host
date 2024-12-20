import { type BeforeRequestHook, type AfterResponseHook } from "ky";
import { refreshAccessToken } from "./authApi";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
  USER_UUID_KEY,
} from "@/constants";

export const httpPrivateSetAccessToken: BeforeRequestHook = (request) => {
  const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);

  if (accessToken) {
    request.headers.set("Authorization", `Bearer ${accessToken}`);
  }

  return request;
};

export const httpPrivateTriggerRefreshAccessToken: AfterResponseHook = async (
  _request,
  _options,
  response
) => {
  const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY);
  const userUuid = localStorage.getItem(USER_UUID_KEY);

  if (response.status === 401 && refreshToken && userUuid) {
    const refreshAccessTokenData = await refreshAccessToken({
      json: {
        refreshToken,
        userUuid,
      },
    });
    localStorage.setItem(
      ACCESS_TOKEN_KEY,
      refreshAccessTokenData.data.accessToken
    );
  }

  return response;
};

export const refreshAccessTokenInstanceCleanUp: AfterResponseHook = (
  _request,
  _options,
  response
) => {
  if (!response.ok) {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN_KEY);

    throw new Response("", {
      status: 401,
    });
  }

  return response;
};
