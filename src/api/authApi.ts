import type { Options } from "ky";
import type { OptionsWithTypedJson } from "@/types";
import { http, httpPrivate, refreshAccessTokenInstance } from "./ky";

export type LoginRequestData = {
  email: string;
  password: string;
};

export type LoginResponseData = {
  data: {
    userId: string;
    email: string;
    access_token: string;
    refresh_token: string;
  };
};

export const login = async (
  options: OptionsWithTypedJson<LoginRequestData>
) => {
  const response = await http.post("auth/login", options);
  return await response.json<LoginResponseData>();
};

export const logout = async (options?: Options) => {
  const response = await httpPrivate.post("auth/logout", options);
  return response;
};

export type RefreshAccessTokenRequestData = {
  refreshToken: string;
  userUuid: string;
};

export type RefreshAccessTokenResponseData = {
  data: {
    accessToken: string;
    expiresIn: string;
    idToken: string;
    tokenType: string;
  };
};

export const refreshAccessToken = async (
  options: OptionsWithTypedJson<RefreshAccessTokenRequestData>
) => {
  const response = await refreshAccessTokenInstance.post(
    "auth/refresh-token",
    options
  );
  return await response.json<RefreshAccessTokenResponseData>();
};

export type RegisterRequestData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const register = async (
  options: OptionsWithTypedJson<RegisterRequestData>
) => {
  const response = await http.post("auth/register", options);
  return response;
};
