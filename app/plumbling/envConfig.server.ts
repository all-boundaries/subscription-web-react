import { z } from "zod";

const envServerSchema = z.object({
  VITE_SVC_SUBSCRIPTION_URL: z.string().url(),
});

export const envConfigServer = envServerSchema.parse(import.meta.env);
