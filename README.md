# TMDB Vanila
### [click me](https://cellenar26.github.io/tmdb-vanila/)
### Project Goal

- 리액트와 바닐라 코딩의 차이는 무엇인지 탐구한다.
- [팝콘타임](https://popcorntime-online.ch)을 클론 코딩하여, Vanila로 open api를 활용한 웹 서비스 구현.

### 에러 해결 사항
- GEThttp://127.0.0.1:5500/js/api net::ERR_ABORTED 404 (Not Found).
- 새로고침시 스크롤바의 위치가 맨아래로 고정되어 사용성이 저하되는 현상.
- [자세한 에러 해결 내역 확인](https://mountain-axolotl-824.notion.site/tmdb-vanila-4a051bac27f8470d972a204dde04bac1)

### 기능적 요구사항

- [ ] [Now playing](https://developers.themoviedb.org/3/movies/get-now-playing) (Movie)
- [ ] [Upcoming](https://developers.themoviedb.org/3/movies/get-upcoming) (Movie)

### 느낀 점

- 소규모지만 추후 기능들이 늘어나면 관심사 분리가 까다로울 것 같다.
- 바닐라는 웹팩 설정이 없어서 CRA로 생성한 리액트 프로젝트에서는 당연하게 import 되던 것이 잘 되지 않았다.
- 바닐라 그 자체로 특정 html element에 대해 조건부 렌더링 할 방법이 딱히 생각나지 않았다.
  - 만약 react라면 props 및 삼항 연산자 등을 활용해 조건부 렌더링 및 조건부 스타일링이 모두 쉽게 가능했다.
- css도 한 파일에 전부 몰리는 구조이므로 이것도 유지 보수의 난이도를 올리는 원인으로 작용 할 것 같다.
  - 물론 규칙을 정해서 여러 개의 css 파일을 생성해서 관리를 할 순 있다.
  - 그러나 react에서 styled component를 사용하면 그런 복잡한 규칙을 정할 일도, css 파일에서 특정 선택자를 찾느라 검색하는 시간을 줄일 수 있다.

### 결론
- react는 컴포넌트 기반으로 개발을 하기 때문에 관심사 분리가 더 용이하다.
- css와 html tag를 js 파일 안에서 작업 할 수 있으므로 응집도를 높일 수 있다.
- 동적으로 생성되는 컴포넌트에 대해 css를 적용하기 용이하다.
- 특정 조건에 따라 렌더링 해야 하는 경우를 쉽게 구현 할 수 있다.
