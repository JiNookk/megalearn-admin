import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

test('Header', () => {
  render((
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  ));

  screen.getByText('강의 승인하기');
});
