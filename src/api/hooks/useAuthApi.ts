import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login, LoginRequestData, LoginResponseData } from "../authApi";
import { resetAllStores } from "@/store";
import { HTTPError } from "ky";

export const authMutationKeys = {
  login: "auth/login",
} as const;

export const useLoginMutation = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation<LoginResponseData, HTTPError, LoginRequestData>({
    mutationKey: [authMutationKeys.login] as const,
    mutationFn(variables) {
      return login({
        json: variables,
      });
    },
    async onSuccess() {
      await queryClient.cancelQueries();
      queryClient.clear();
      resetAllStores();
    },
  });

  return mutation;
};
