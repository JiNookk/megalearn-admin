import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Padding from './ui/Padding';

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-block-end: 1px solid black;
  background: #f6f5f6;
`;

const List = styled.ul`
  display: flex;
  height: 100%;
  
  li{
    display: flex;
    align-items: center;
    padding: 2rem;
    border-inline: 1px solid #d9dadb;
    border-collapse: collapse;
  }
`;

export default function Header() {
  return (
    <Navigation>
      <Padding>
        <List>
          <li>
            <Link to="/courses">
              강의 관리
              {/* - 강의 관리 :  강의 승인, 강의 삭제, 강의 스킬셋 관리 */}
            </Link>
          </li>
          <li>
            <Link to="/categories">
              카테고리 관리
            </Link>
          </li>
          <li>
            <Link to="/skill-tags">
              스킬 태그 관리
            </Link>
          </li>
          {/* <li>
            <Link to="/chattings">
              챗봇 관리
            </Link>
          </li> */}
        </List>
      </Padding>
    </Navigation>
  );
}
