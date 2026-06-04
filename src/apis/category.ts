import httpInstance from "@/utils/http";

export function getCategoryAPI(id: string | string[]) {
  return httpInstance({
    url: "/category",
    params: {
      id,
    },
  });
}
