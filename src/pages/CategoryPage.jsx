import { useEffect } from 'react';
import styled from 'styled-components';
import Padding from '../components/ui/Padding';
import SecondaryButton from '../components/ui/SecondaryButton';
import useCategoryStore from '../hooks/useCategoryStore';

const Container = styled.div`
  flex: 1;
  
  >div{
    height: 100%;
  }

  form{
    button{
      width: 100%;
      padding-block: 1rem;
    }
  }

  input{
    width:100%;
    padding: 1rem;
    margin-bottom: .5rem;
    border: 1px solid #D3DADD;
    border-radius: 4px;
  }
  `;

const CategoryHeader = styled.div`
  border-bottom: 1px solid black;
  margin-block: 1rem;
  padding-block: .5rem;
  
  h2{
    font-size: 1.5rem;
    font-weight: bold;
  }
  `;

const CategoriesWrapper = styled.div`
  display  : grid;
  grid-template-columns: 1fr 2fr;
  padding-block: 2rem;
  height: 100%;

  >div{
    border: 1px solid #D3DADD;
    padding: 1rem;
    height: 100%;
  }

  >ul{
    height: 100%;
  }
`;

const Description = styled.div`
  p{
    margin-block: 1rem;
  }
`;

const Categories = styled.ul`
  padding: 1rem;

  li{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-block: 1rem;
  }  

  button{
    background: none;
    border: none;
  }
`;

export default function CategoryPage() {
  const categoryStore = useCategoryStore();

  const handleSubmitCategory = (e) => {
    e.preventDefault();

    const category = e.target.category.value;
    const url = e.target.url.value;

    if (category) {
      categoryStore.save({ category, url });

      e.target.category.value = '';
      e.target.url.value = '';
    }
  };

  const handleDeleteCategory = (id) => {
    categoryStore.delete({ id });
  };

  useEffect(() => {
    categoryStore.fetchCategories();
  }, []);

  return (
    <Container>
      <Padding>
        <CategoryHeader>
          <h2>
            카테고리 관리
          </h2>
        </CategoryHeader>
        <CategoriesWrapper>
          <div>
            <form onSubmit={handleSubmitCategory}>
              <div>
                <label hidden htmlFor="input-category">카테고리</label>
                <input
                  type="text"
                  placeholder="카테고리를 입력하세요"
                  id="input-category"
                  name="category"
                />
              </div>
              <div>
                <label hidden htmlFor="input-url">url</label>
                <input
                  type="text"
                  placeholder="매핑할 url을 입력하세요"
                  id="input-url"
                  name="url"
                />
              </div>
              <div>
                <SecondaryButton type="submit">
                  추가하기
                </SecondaryButton>
              </div>
              <hr />
            </form>
            <Categories>
              {categoryStore.categories
                .map((category) => (
                  <li key={category.id}>
                    <p>
                      {category.content}
                    </p>
                    <button type="button" onClick={() => handleDeleteCategory(category.id)}>
                      <img src="/assets/trash.png" alt="delete" />
                    </button>
                  </li>
                ))}
            </Categories>
          </div>
          <Description>
            <h2>
              <strong>
                카테고리 설정 안내
              </strong>
            </h2>
            <p>
              아래 추가하기 버튼을 눌러서 강의 카테고리를 추가할 수 있습니다.
            </p>
            <p>
              카테고리 우측의 삭제버튼을 눌러서 카테고리를 삭제할 수 있습니다.
            </p>
          </Description>
        </CategoriesWrapper>
      </Padding>
    </Container>
  );
}
