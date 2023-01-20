# gowid-web-ui
```shell
해당 프로젝트는 고위드 프론트엔드 개발자들에게 Next.js 를 활용한 디자인 패턴을 설명하기 위한 프로젝트 입니다.
제작자 : 박한얼
프로젝트 설명 : Material-ui 를 활용한 디자인 프레임워크 설명 및 디렉토리 구조 설명, 에러 처리에 대한 설명, 뷰 컨테이너 설명

제작은 온전히 개인의 의견을 바탕으로 제작되었으며, 추후 논의 후 반영 여부를 결정 합니다.
```

## 디렉토리 구조
```shell
.
├── next.config.js
├── pages
├── public
├── resource
│  ├── fonts
│  ├── img
│  └── svg
├── scripts
└── src
    ├── common
    ├── components
    ├── error
    ├── index.tsx
    ├── model
    ├── reportWebVitals.ts
    ├── service
    ├── stores
    ├── utils
    └── views
```

## 디렉토리 설명
| 명칭             | 설명                                               |
|:---------------|:-------------------------------------------------|
| pages          | Next.js 에서 라우팅 관련 엔트리 포인트                        |
| resource       | 정적인 파일을 저장하는 공간 (fonts, img, svg 파일등...)         |
| scripts        | 번들링 혹은 빌드에 필요한 스크랩트 파일을 저장하는 공간                  |
| src/common     | 공용으로 사용될 항목을 저장하는 공간 (style, globalTheme)        |
| src/components | 표현 컴포넌트 모음                                       |
| src/error      | 에러 핸들러 모음                                        |
| src/model      | view model 모음                                    |
| src/service    | api 관련 문서 모음                                     |
| src/stores     | store 관련 문서 모음                                   |
| src/utils      | 공용 모듈 모음 (auth, custom hooks 등...)               |
| src/views      | 페이지에 따른 컨테이너 (store 에 접근하는 컴포넌트) 모음              |

## 프로젝트 미리보기
```shell
-- 의존성 라이브러리 설치
$ yarn install
-- 로컬 빌드
$ yarn dev
```