import type Car from "~/model/Car.type";
import carsService from "~/services/carsService";

interface CarsStoreStateInterface {
  allCars: Car[];
  popularCars: Car[];
  favouriteCars: Car[];
  total: number;
  currentPage: number;
  lastPage: number;
  searchCars: Car[];
  search: string | null;
  searchTotal: number;
  currentSearchPage: number;
  lastSearchPage: number;
}

export const useCarsStore = defineStore("carsStore", {
  state: (): CarsStoreStateInterface => ({
    allCars: [],
    popularCars: [],
    favouriteCars: [],
    total: 0,
    currentPage: 1,
    lastPage: 1,
    searchCars: [],
    search: null,
    searchTotal: 0,
    currentSearchPage: 1,
    lastSearchPage: 1,
  }),

  getters: {
    isLoadMoreActive(): boolean {
      return this.currentPage < this.lastPage;
    },
    isLoadMoreSearchActive(): boolean {
      return this.currentSearchPage < this.lastSearchPage;
    },
  },

  actions: {
    async init() {
      this.currentPage = 1;
      this.lastPage = 1;
      await this.getAllCars();
      await this.getPopularCars();
    },
    resetSearch(): void {
      this.search = null;
      this.searchTotal = 0;
      this.currentSearchPage = 1;
      this.lastSearchPage = 1;
      this.searchCars.splice(0, this.searchCars.length);
    },
    addToFavourite(car: Car): void {
      if (this.favouriteCars.findIndex((c) => c.id === car.id) === -1) {
        this.favouriteCars.push(car);
      }
    },
    removeFromFavourite(car: Car): void {
      const index = this.favouriteCars.findIndex((c) => c.id === car.id);
      if (index > -1) {
        this.favouriteCars.splice(index, 1);
      }
    },
    async getAllCars(): Promise<void> {
      const callback = (context: { response: any }) => {
        const results = context.response._data;
        this.currentPage = 1;
        this.allCars = results.data;
        this.total = results.meta.total;
        this.lastPage = results.meta.last_page;
      };

      await carsService.findCars({ callback });
    },
    async getPopularCars(): Promise<void> {
      const callback = (context: { response: any }) => {
        this.popularCars = context.response._data;
      };

      await carsService.findPopularCars({ callback });
    },
    async getCarById(id: string): Promise<Car | null> {
      let car: Car | null = null;

      const callback = (context: { response: any }) => {
        car = context.response._data;
      };

      const params = { id };

      await carsService.findCarById({ params, callback });

      return car;
    },
    async searchInCars(search: string): Promise<void> {
      this.resetSearch();
      this.search = search;

      const callback = (context: { response: any }) => {
        const results = context.response._data;
        this.currentSearchPage = 1;
        this.searchCars = results.data;
        this.searchTotal = results.meta.total;
        this.lastSearchPage = results.meta.last_page;
      };

      const query = { q: this.search };

      await carsService.findCars({ query, callback });
    },
    async loadMore(isSearch: Boolean = false): Promise<void> {
      let callback, query;

      if (isSearch && this.currentSearchPage < this.lastSearchPage) {
        callback = (context: { response: any }) => {
          const results = context.response._data;
          this.searchCars.push(...results.data);
          this.searchTotal = results.meta.total;
          this.lastSearchPage = results.meta.last_page;
        };

        query = { page: ++this.currentSearchPage };
      } else if (this.currentPage < this.lastPage) {
        callback = (context: { response: any }) => {
          const results = context.response._data;
          this.allCars.push(...results.data);
          this.total = results.meta.total;
          this.lastPage = results.meta.last_page;
        };

        query = { page: ++this.currentPage };
      }

      await carsService.findCars({ query, callback });
    },
  },
});
