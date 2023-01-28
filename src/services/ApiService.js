/* eslint-disable class-methods-use-this */
import axios from 'axios';
import baseUrl from '../config';

export default class ApiService {
  constructor() {
    this.accessToken = '';
  }

  setAccessToken(accessToken) {
    this.accessToken = accessToken;
  }

  async updateStatus({ status, courseId }) {
    const { data } = await axios.patch(`${baseUrl}/courses/${courseId}/status`, {
      status,
    });

    return data;
  }

  async fetchCourses({ page }) {
    const query = page ? `?page=${page}` : '';

    const { data } = await axios.get(`${baseUrl}/admin/courses${query}`);

    return data;
  }

  async updateCourse({
    title = '', category = '', description = '', imagePath = '', level = '', price = 0,
    status = '', skill = '', courseId,
  }) {
    const { data } = await axios.patch(`${baseUrl}/courses/${courseId}`, {
      title, category, description, imagePath, price, status, level, skill,
    }, {
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
    });

    return data;
  }

  async fetchLectures() {
    const { data } = await axios.get(`${baseUrl}/lectures`);

    return data.lectures;
  }

  async fetchCategories() {
    const { data } = await axios.get(`${baseUrl}/categories`);

    return data.categories;
  }

  async postCategory({ category, url }) {
    const { data } = await axios.post(`${baseUrl}/categories`, {
      category, url,
    });

    return data;
  }

  async deleteCategory({ id }) {
    const { data } = await axios.delete(`${baseUrl}/categories/${id}`);

    return data;
  }

  async fetchSkillTags() {
    const { data } = await axios.get(`${baseUrl}/skills`);

    return data.skills;
  }

  async createSkillTag({ skillTag }) {
    const { data } = await axios.post(`${baseUrl}/skills`, {
      skillTag,
    });

    return data;
  }

  async deleteSkillTag({ id }) {
    const { data } = await axios.delete(`${baseUrl}/skills/${id}`);

    return data;
  }
}

export const apiService = new ApiService();
