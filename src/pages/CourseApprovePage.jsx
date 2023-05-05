/* eslint-disable react/no-array-index-key */
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Padding from "../components/ui/Padding";
import useCourseStore from "../hooks/useCourseStore";
import useLectureStore from "../hooks/useLectureStore";
import { timeFormat } from "../utils/TimeFormat";

const Container = styled.div`
  flex: 1;

  > div {
    height: 100%;
  }

  form {
    button {
      width: 100%;
      padding-block: 1rem;
    }
  }

  input {
    width: 100%;
    padding: 1rem;
    margin-bottom: 0.5rem;
    border: 1px solid #d3dadd;
    border-radius: 4px;
  }
`;

const CourseHeader = styled.div`
  border-bottom: 1px solid black;
  margin-block: 1rem;
  padding-block: 0.5rem;

  h2 {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

const Table = styled.table`
  display: block;
  padding-block: 2rem;

  thead,
  tbody {
    display: block;
    width: 100%;
  }

  th {
    text-align: start;
    font-size: 1.3rem;
    font-weight: 500;
    color: gray;
  }

  tr {
    display: grid;
    grid-template-columns: 40fr 20fr 10fr 10fr 10fr 10fr;
    padding: 1rem;
    align-items: center;
    border: 1px solid #d3dadd;
    border-collapse: collapse;
  }

  td {
    > div {
      display: flex;
      align-items: center;
    }
  }
`;

const Image = styled.img`
  width: 120px;
  height: 80px;
  margin-right: 1rem;
`;

const Pagination = styled.ul`
  display: flex;
  justify-content: end;
  margin-block: 3rem;
`;

const Page = styled.button`
  border: none;
  border-radius: 4px;
  background-color: ${(props) =>
    props.value === +props.page ? "#dbdedf" : "#FFFFFF"};
  cursor: pointer;
`;

export default function CourseApprovePage() {
  const navigate = useNavigate();
  const currentPage = useLocation().search.split("=")[1];

  const courseStore = useCourseStore();
  const lectureStore = useLectureStore();

  const handleChangeStatus = (e, courseId) => {
    const status = e.target.value;

    courseStore.updateStatus({ status, courseId });
  };

  const handleChangePage = (page) => {
    courseStore.fetchCourses({ page });

    navigate(`/courses?page=${page}`);
  };

  useEffect(() => {
    courseStore.fetchCourses({ page: currentPage });
    lectureStore.fetchLectures();
  }, []);

  return (
    <Container>
      <Padding>
        <CourseHeader>
          <h2>강의 관리</h2>
        </CourseHeader>
        <Table>
          <thead>
            <tr>
              <th>강의</th>
              <th>카테고리</th>
              <th>길이</th>
              <th>가격</th>
              <th>난이도</th>
              <th>상태</th>
            </tr>
          </thead>
          <tbody>
            {courseStore.courses.map((course) => (
              <tr key={course.id}>
                <td>
                  <div>
                    <Image
                      src={course.coverImage || "/assets/test.jpg"}
                      alt="course"
                    />
                    <p>{course.title}</p>
                  </div>
                </td>
                <td>{course.category}</td>
                <td>
                  {timeFormat.hourMinute(
                    lectureStore.lectures
                      .filter((lecture) => lecture.courseId === course.id)
                      .map((lecture) => lecture.lectureTime)
                      .reduce(
                        (acc, lectureTime) =>
                          acc + 60 * lectureTime.minute + lectureTime.second,
                        0
                      )
                  )}
                </td>
                <td>{course.price}</td>
                <td>{course.level}</td>
                <td>
                  <form>
                    <select
                      defaultValue={course.status}
                      name="status"
                      onChange={(e) => handleChangeStatus(e, course.id)}
                    >
                      <option value="PROCESSING">임시저장</option>
                      <option value="SUBMITTED">제출</option>
                      <option value="APPROVED">승인</option>
                    </select>
                  </form>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Pagination>
          {[...Array(courseStore.totalPages)].map((_, page) => (
            <li key={page}>
              <Page
                type="button"
                onClick={() => handleChangePage(page + 1)}
                value={page + 1}
                page={currentPage}
              >
                {page + 1}
              </Page>
            </li>
          ))}
        </Pagination>
      </Padding>
    </Container>
  );
}
