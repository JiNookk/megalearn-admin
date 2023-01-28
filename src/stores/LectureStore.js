import { apiService } from '../services/ApiService';
import Store from './Store';

export default class LectureStore extends Store {
  constructor() {
    super();

    this.lectures = [];
  }

  async fetchLectures() {
    this.lectures = await apiService.fetchLectures();

    this.publish();
  }
}

export const lectureStore = new LectureStore();
