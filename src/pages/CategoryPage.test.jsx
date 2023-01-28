import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CategoryPage from './CategoryPage';

test('CategoryPage', async () => {
  render((
    <MemoryRouter>
      <CategoryPage />
    </MemoryRouter>
  ));

  // screen.getByText('강의 1');
});
