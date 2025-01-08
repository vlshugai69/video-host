"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/ui/form";
import { Input } from "@/ui/input";
import { Button } from "@/ui/button";
import { LoginForm, loginSchema } from "./schemas";
import { useLoginMutation } from "@/api/hooks/useAuthApi";
import {
  ACCESS_TOKEN_KEY,
  HTTP_ERROR,
  REFRESH_TOKEN_KEY,
  USER_UUID_KEY,
} from "@/constants";
import { GlobalFetchErrorResponse } from "@/types";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import PasswordInput from "@/components/PasswordInput";

const Login: React.FC = () => {
  const router = useRouter();

  const form = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutate: mutateLogin } = useLoginMutation();

  const loginHandler = form.handleSubmit((data) => {
    mutateLogin(data, {
      onSuccess(respData) {
        console.log(respData);
        const { access_token, refresh_token, userId } = respData;

        localStorage.setItem(ACCESS_TOKEN_KEY, access_token);
        localStorage.setItem(REFRESH_TOKEN_KEY, refresh_token);
        localStorage.setItem(USER_UUID_KEY, userId);

        router.push("/dashboard");
      },
      async onError(error) {
        const { response } = error;

        if (response?.status === 429) {
          return;
        }

        if (error.name === HTTP_ERROR) {
          // TODO: should add translation for error messages
          const errorData: GlobalFetchErrorResponse = await response.json();

          toast("Error", {
            description: errorData.message,
          });
        } else {
          toast("Error", {
            description: "error message",
          });
        }
      },
    });
  });

  return (
    <div className="flex justify-center items-center w-full">
      <Form {...form}>
        <form
          onSubmit={loginHandler}
          className="space-y-8 p-6 w-full rounded-[0.75rem] max-w-[25rem] bg-card"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="john@gmail.com" type="text" {...field} />
                </FormControl>
                <FormMessage className="text-error" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <PasswordInput {...field} />
                </FormControl>
                <FormMessage className="text-error" />
              </FormItem>
            )}
          />
          <Button type="submit" className="text-text">
            Sign in
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default Login;
