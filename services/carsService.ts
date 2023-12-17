interface CarsServiceOptions {
  query?: { page?: number; q?: string };
  params?: { [key: string]: any };
  callback?: Function;
}

export default {
  async findCars(options: CarsServiceOptions) {
    await useFetch(`/api/cars`, {
      key: new Date().toString(),
      query: options.query || {},
      onResponse: options.callback,
      onResponseError,
    });
  },
  async findPopularCars(options: CarsServiceOptions) {
    await useFetch(`/api/cars/popular`, {
      key: new Date().toString(),
      onResponse: options.callback,
      onResponseError,
    });
  },
  async findCarById(options: CarsServiceOptions) {
    await useFetch(`/api/cars/${options.params?.id}`, {
      key: new Date().toString(),
      onResponse: options.callback,
      onResponseError,
    });
  },
};
