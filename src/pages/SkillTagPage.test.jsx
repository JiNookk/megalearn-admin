import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SkillTagPage from './SkillTagPage';

test('SkillTagPage', async () => {
  render((
    <MemoryRouter>
      <SkillTagPage />
    </MemoryRouter>
  ));

  // screen.getByText('강의 1');
});
