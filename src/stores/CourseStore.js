import { apiService } from '../services/ApiService';
import Store from './Store';

export default class CourseStore extends Store {
  constructor() {
    super();

    this.courses = [];
    this.totalPages = 1;
  }

  async fetchCourses({ page }) {
    const { courses, totalPages } = await apiService.fetchCourses({ page });

    this.courses = courses;
    this.totalPages = totalPages;

    this.publish();
  }

  async updateStatus({ status, courseId }) {
    const updated = await apiService.updateStatus({ status, courseId });

    this.courses = this.courses
      .map((course) => (course.id === updated.id ? updated : course));

    this.publish();
  }
}

export const courseStore = new CourseStore();
