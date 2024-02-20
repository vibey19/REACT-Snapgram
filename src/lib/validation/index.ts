import { z } from "zod";

export const SignupValidation = z.object({
  name: z.string().min(2, { message: "Please provide a valid name" }),
  username: z.string().min(2, { message: "Please enter a valid username" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(8, { message: "Password should be at least 8 characters long" }),
});
