export type ApiErrorResponse = {
   ok: false;
   error: string;
   data: null;
};

export default function apiError(error: unknown): ApiErrorResponse {
   if (error instanceof Error) {
      return { ok: false, error: error.message, data: null };
   } else {
      return { ok: false, error: "Error genérico", data: null };
   }
}
