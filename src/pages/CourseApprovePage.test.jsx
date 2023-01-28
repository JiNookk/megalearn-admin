import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CourseApprovePage from './CourseApprovePage';

test('CourseApprovePage', async () => {
  render((
    <MemoryRouter>
      <CourseApprovePage />
    </MemoryRouter>
  ));

  await waitFor(() => {
    screen.getByText('강의 1');
  });
});
