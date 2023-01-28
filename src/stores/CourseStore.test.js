import CourseStore from './CourseStore';

describe('CourseStore', () => {
  let courseStore;

  beforeEach(() => {
    courseStore = new CourseStore();
  });

  describe('fetchCourses', () => {
    it('loads courses data', async () => {
      await courseStore.fetchCourses();

      expect(courseStore.courses.length).toBeTruthy();
    });
  });

  describe('fetchMyCourses', () => {
    it('loads my courses data', async () => {
      await courseStore.fetchCourse({ courseId: 1 });

      expect(courseStore.course.title).toBeTruthy();
    });
  });

  describe('save', () => {
    it('requests new Course data', async () => {
      await courseStore.save({ title: 'JPA' });

      expect(courseStore.savedCourse.title).toBeTruthy();
    });
  });

  describe('update', () => {
    it('patches course data', async () => {
      await courseStore.update({ title: 'update', category: 'category', courseId: 1 });

      expect(courseStore.savedCourse.title).toBe('update');
    });
  });
});
