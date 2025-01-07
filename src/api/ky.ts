import ky from "ky";
import {
  httpPrivateSetAccessToken,
  httpPrivateTriggerRefreshAccessToken,
  refreshAccessTokenInstanceCleanUp,
} from "./kyHooks";

export const http = ky.create({
  prefixUrl: "http://localhost:8001",
  headers: {
    "Accept-Version": "1",
  },
  timeout: false,
  retry: 0,
});

export const httpPrivate = http.extend({
  hooks: {
    beforeRequest: [httpPrivateSetAccessToken],
    afterResponse: [httpPrivateTriggerRefreshAccessToken],
  },
});

export const refreshAccessTokenInstance = http.extend({
  hooks: {
    afterResponse: [refreshAccessTokenInstanceCleanUp],
  },
});
