export default defineEventHandler((event) => {
    const config = useRuntimeConfig();
    const api_base_url = config.public.API_BASE_URL;
    
    return $fetch(`${api_base_url}/cars/popular`);
  });
  