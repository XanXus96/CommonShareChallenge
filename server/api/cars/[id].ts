export default defineEventHandler((event) => {
  const config = useRuntimeConfig();
  const api_base_url = config.public.API_BASE_URL;

  const params = new URLSearchParams(getQuery(event));

  const id = event?.context?.params?.id;

  return $fetch(`${api_base_url}/cars/${id}?${params}`);
});