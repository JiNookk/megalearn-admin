# Megalearn-admin

## 프로젝트 소개
megalearn은 누구나 간편하게 강의를 시청하고 공유할 수 있는데 초점을 두고 만든 웹 서비스 입니다.

### 배포 URL
- 사용자 : [https://megalearn-frontend.fly.dev/](https://megalearn-frontend.fly.dev/)
- 어드민 : [https://megalearn-admin.fly.dev/](https://megalearn-admin.fly.dev/)

### Github
- 서버 : [https://github.com/JiNookk/megalearn-backend](https://github.com/JiNookk/megalearn-backend)
- 사용자 프론트 : [https://github.com/JiNookk/megalearn-frontend](https://github.com/JiNookk/megalearn-frontend)
- 어드민 프론트 : [https://github.com/JiNookk/megalearn-admin](https://github.com/JiNookk/megalearn-admin)

## 개발 기간
- 2022.11.26 ~ 2022.01.20
- 일주일 간격으로 8번의 스프린트를 진행했습니다.
<br>

## 기술 스택
### Frontend
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"></a>
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">

<br>

## 주요 기능

- 강의 관리
- 스킬태그 관리
- 강의 카테고리 관리

<br>

## 아키텍쳐
Flux Architecture를 참고했습니다.

1. View - Action
2. Dispatcher
3. Store

<br>

## 어드민 서비스

서비스 정책을 관리할 수 있는 관리자 페이지를 따로 생성했습니다. 

민감한 정보를 어드민 서비스로 분리해서 웹 서비스가 보다 원활하게 운영할 수 있도록 구성했습니다.

<img width="1440" alt="스크린샷 2023-02-24 오후 2 51 02" src="https://user-images.githubusercontent.com/82752544/227882888-88d726c7-6556-4eb4-a937-33c09d240d65.png">

