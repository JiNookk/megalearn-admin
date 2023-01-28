import { useEffect } from 'react';
import styled from 'styled-components';
import Padding from '../components/ui/Padding';
import SecondaryButton from '../components/ui/SecondaryButton';
import useSkillTagStore from '../hooks/useSkillTagStore';

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

const SkillTagHeader = styled.div`
  border-bottom: 1px solid black;
  margin-block: 1rem;
  padding-block: .5rem;
  
  h2{
    font-size: 1.5rem;
    font-weight: bold;
  }
  `;

const SkillTagsWrapper = styled.div`
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

const SkillTags = styled.ul`
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

export default function SkillTagPage() {
  const skillTagStore = useSkillTagStore();

  const handleSubmitSkillTag = (e) => {
    e.preventDefault();

    const skillTag = e.target.skillTag.value;

    if (skillTag) {
      skillTagStore.save({ skillTag });

      e.target.skillTag.value = '';
    }
  };

  const handleDeleteSkillTag = (id) => {
    skillTagStore.delete({ id });
  };

  useEffect(() => {
    skillTagStore.fetchSkillTags();
  }, []);

  return (
    <Container>
      <Padding>
        <SkillTagHeader>
          <h2>
            스킬태그 관리
          </h2>
        </SkillTagHeader>
        <SkillTagsWrapper>
          <div>
            <form onSubmit={handleSubmitSkillTag}>
              <label hidden htmlFor="input-skillTag">스킬태그</label>
              <input
                type="text"
                placeholder="스킬태그를 입력하세요"
                id="input-skillTag"
                name="skillTag"
              />
              <div>
                <SecondaryButton type="submit">
                  추가하기
                </SecondaryButton>
              </div>
              <hr />
            </form>
            <SkillTags>
              {skillTagStore.skillTags
                .map((skillTag) => (
                  <li key={skillTag.id}>
                    <p>
                      {skillTag.content}
                    </p>
                    <button type="button" onClick={() => handleDeleteSkillTag(skillTag.id)}>
                      <img src="/assets/trash.png" alt="delete" />
                    </button>
                  </li>
                ))}
            </SkillTags>
          </div>
          <Description>
            <h2>
              <strong>
                스킬태그 설정 안내
              </strong>
            </h2>
            <p>
              아래 추가하기 버튼을 눌러서 강의 스킬태그를 추가할 수 있습니다.
            </p>
            <p>
              스킬태그 우측의 삭제버튼을 눌러서 스킬태그를 삭제할 수 있습니다.
            </p>
          </Description>
        </SkillTagsWrapper>
      </Padding>
    </Container>
  );
}
