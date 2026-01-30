import { z } from "zod";

export const LeadSchema = z.object({
  audience: z.enum(["institution", "student"]),
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  subject: z.string().optional(),
  serviceInterest: z.string().optional(),
  message: z.string().min(10),
  locale: z.enum(["fr", "en", "es"])
});

export const DevisSchema = z.object({
  audience: z.enum(["institution", "student"]),
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  service: z.string().min(2),
  packId: z.string().optional(),
  deadline: z.string().optional(),
  details: z.string().min(10),
  locale: z.enum(["fr", "en", "es"])
});
