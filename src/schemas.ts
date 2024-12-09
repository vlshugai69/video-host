import { z } from "zod";

const requiredFieldMessage = "This field is required";
const requiredEmailMessage = "Please enter a valid email address.";

export const emailField = z
  .string({
    required_error: requiredFieldMessage,
  })
  .min(1, {
    message: requiredFieldMessage,
  })
  .email({
    message: requiredEmailMessage,
  });

export const commonLoginSchema = z.object({
  email: emailField,
  password: z
    .string({
      required_error: requiredFieldMessage,
    })
    .min(1, {
      message: requiredFieldMessage,
    }),
});

export type CommonLoginForm = z.infer<typeof commonLoginSchema>;
