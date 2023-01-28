import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import defaultTheme from './styles/defaultTheme';
import GlobalStyle from './styles/GlobalStyle';
import CourseApprovePage from './pages/CourseApprovePage';
import CategoryPage from './pages/CategoryPage';
import SkillTagPage from './pages/SkillTagPage';

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Reset />
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<CourseApprovePage />} />
        <Route path="/categories" element={<CategoryPage />} />
        <Route path="/skill-tags" element={<SkillTagPage />} />
        {/* <Route path="/courses" element={<CourseApprovePage />} /> */}
      </Routes>
    </ThemeProvider>
  );
}
