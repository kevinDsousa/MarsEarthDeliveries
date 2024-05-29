import { z } from "zod";

export const marsSchema = z.object({
  lote: z
    .string()
    .min(1, "Lote deve ter no mínimo 1 caractere")
    .max(10, "Lote deve ter no máximo 10 caracteres"),
});

export const earthSchema = z.object({
  rua: z
    .string()
    .min(2, "Rua deve ter no mínimo 2 caracteres")
    .max(100, "Rua deve ter no máximo 100 caracteres"),
  numero: z
    .string()
    .min(1, "Número deve ter no mínimo 1 caractere")
    .max(10, "Número deve ter no máximo 10 caracteres"),
  cidade: z
    .string()
    .min(2, "Cidade deve ter no mínimo 2 caracteres")
    .max(50, "Cidade deve ter no máximo 50 caracteres"),
  estado: z
    .string()
    .min(2, "Estado deve ter no mínimo 2 caracteres")
    .max(50, "Estado deve ter no máximo 50 caracteres"),
  pais: z
    .string()
    .min(2, "País deve ter no mínimo 2 caracteres")
    .max(50, "País deve ter no máximo 50 caracteres"),
  cep: z
    .string()
    .min(8, "CEP deve ter 8 caracteres")
    .max(8, "CEP deve ter 8 caracteres"),
});
