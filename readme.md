# MDA Lab 홈페이지

부산대학교 산업공학과 제조 데이터 분석 연구실(Manufacturing Data Analytics Lab) 공식 홈페이지입니다.

Jekyll 기반의 정적 사이트 생성기를 사용하여 구축되었으며, GitHub Pages를 통해 호스팅됩니다.

## 📁 폴더 구조

```
PNU-MDA-LAB.github.io/
│
├── _layouts/                    # 페이지 레이아웃 템플릿
│   ├── default.html            # 기본 레이아웃 (헤더/푸터 포함)
│   ├── home.html               # 홈페이지 전용 레이아웃 (슬라이더 포함)
│   ├── page.html               # 일반 페이지 레이아웃
│   ├── post.html               # 뉴스 포스트 레이아웃
│   └── notice.html             # 공지사항 레이아웃
│
├── _includes/                   # 재사용 가능한 컴포넌트
│   ├── header.html             # 상단 네비게이션 바
│   └── footer.html             # 하단 푸터
│
├── _posts/                      # 뉴스 게시물 (마크다운 파일)
│   ├── 2026-02-02-homepage-renewal.md
│   ├── 2026-01-15-recruitment.md
│   └── 2025-12-10-publication.md
│   └── [파일명 형식: YYYY-MM-DD-title.md]
│
├── _notices/                    # 공지사항 게시물 (마크다운 파일)
│   ├── 2026-02-01-recruitment.md
│   ├── 2026-01-28-seminar.md
│   └── [파일명 형식: YYYY-MM-DD-title.md]
│
├── pages/                       # 주요 페이지
│   ├── professor.html          # 교수 소개 페이지
│   ├── members.html            # 구성원 페이지
│   ├── courses.html            # 강의 목록 페이지
│   ├── projects.html           # 프로젝트 페이지
│   ├── news.html               # 뉴스 목록 페이지
│   ├── notices.html            # 공지사항 목록 페이지
│   ├── publications.html       # 논문 목록 페이지 (카테고리별)
│   └── publications/           # 우수 논문 상세 소개 페이지
│       └── 2025-ontology-modeling.html
│
├── assets/                      # 정적 파일
│   ├── css/
│   │   └── custom.css          # 커스텀 스타일시트
│   ├── js/
│   │   └── main.js             # JavaScript (슬라이더, 네비게이션)
│   └── images/                 # 이미지 파일
│       ├── logo.png            # 로고 이미지
│       ├── slider1.jpg         # 슬라이더 이미지 1-3
│       ├── professor.jpg       # 교수 사진
│       ├── member-default.jpg  # 기본 멤버 사진
│       ├── news*.jpg           # 뉴스 이미지들
│       └── publications/       # 논문 관련 이미지
│
├── _config.yml                  # Jekyll 설정 파일
├── Gemfile                      # Ruby 의존성 파일
├── index.md                     # 홈페이지 (메인 페이지)
├── publications.md              # 논문 목록 페이지
└── README.md                    # 이 파일
```

## 🎯 주요 기능

### 1. 자동 슬라이딩 배너
- 메인 페이지 상단에 3개의 비주얼 이미지 슬라이더
- 5초마다 자동으로 이미지 전환
- 좌/우 화살표 버튼으로 수동 조작 가능
- 하단 도트 네비게이션
- 반응형 디자인 (모바일 최적화)

### 2. 홈페이지 레이아웃
- **좌측**: 6개의 메뉴 블록 (Lab Introduction, Address, Projects, Professor, Members, Publications)
- **우측**: 최신 공지사항 5개 자동 표시 (제목, 날짜 포함)
- 중요 공지는 빨간색 "중요" 뱃지로 강조

### 3. 동적 뉴스 게시판
- 마크다운 파일로 간편하게 게시물 작성
- 이미지 프리뷰 지원
- 홈페이지에 최신 3개 게시물 자동 표시
- 전체 뉴스 목록 페이지 제공
- 날짜별 자동 정렬

### 4. 공지사항 시스템
- 마크다운으로 간편한 공지 작성
- 우선순위 설정 (중요/일반/안내)
- 홈페이지 우측에 최신 5개 표시
- 중요 공지는 특별 강조 표시

### 5. 논문 관리 시스템
- **좌측 카테고리 네비게이션**: 7개 카테고리로 분류
  - International Journal (SCI/SCIE)
  - International Journal (Non-SCI)
  - Domestic Journal
  - Book Chapter
  - International Conference
  - Domestic Conference
  - Patents and Programs
- **우수 논문 상세 페이지**: 영어 원문 기반, 이미지/유튜브 지원
  - Abstract, Key Contributions, Highlights
  - Figures, Citation (BibTeX)
  - 관련 리소스 링크 (PDF, Code, Dataset)

### 6. 반응형 디자인
- 모바일, 태블릿, 데스크톱 완벽 지원
- 모바일에서 햄버거 메뉴 자동 전환
- 터치 제스처 지원

### 7. SEO 최적화
- Jekyll SEO Tag 플러그인 사용
- 메타 태그 자동 생성
- RSS 피드 지원

## 콘텐츠 관리 가이드

### 1. 뉴스 게시물 추가하기

**단계 1:** `_posts/` 폴더에 새 파일 생성
- 파일명 형식: `YYYY-MM-DD-post-title.md`
- 예: `2026-03-15-new-research.md`

**단계 2:** 파일 내용 작성

```markdown
---
layout: post
title: "게시물 제목"
date: 2026-03-15
author: "작성자 이름"
image: /assets/images/news-image.jpg
---

여기에 게시물 본문을 작성합니다.

## 소제목 사용 가능

- 리스트 항목 1
- 리스트 항목 2

**굵은 글씨**와 *이탤릭*도 가능합니다.
```

**단계 3:** 이미지 추가 (선택사항)
- 이미지를 `assets/images/` 폴더에 업로드
- Front Matter의 `image` 항목에 경로 지정

**단계 4:** 저장 후 커밋/푸시

### 2. 뉴스 게시물 수정하기

**방법 1:** 기존 파일 직접 수정
- `_posts/` 폴더에서 해당 파일 찾기
- 내용 수정 후 저장
- 커밋/푸시

**방법 2:** 파일명 변경 (날짜 변경 시)
- 파일명의 날짜 부분 수정
- 내용 수정
- 커밋/푸시

### 3. 뉴스 게시물 삭제하기

- `_posts/` 폴더에서 해당 파일 삭제
- 관련 이미지도 `assets/images/`에서 삭제 (선택)
- 커밋/푸시

### 4. 교수 정보 수정하기

`pages/professor.html` 파일 편집:

```html
<h2>류광열 교수</h2>  <!-- 이름 수정 -->
<h3>Prof. Kwangyeol Ryu</h3>

<div class="profile-details">
  <p><strong>소속:</strong> 부산대학교 산업공학과</p>
  <p><strong>연구실:</strong> 제10공학관 626호</p>
  <p><strong>전화:</strong> +82-51-510-2473</p>  <!-- 연락처 수정 -->
  <p><strong>이메일:</strong> kyryu@pusan.ac.kr</p>
</div>
```

### 5. 구성원 추가/수정/삭제하기

`pages/members.html` 파일 편집:

**구성원 추가:**
```html
<div class="member-card">
  <div class="member-photo">
    <img src="{{ '/assets/images/member-name.jpg' | relative_url }}" alt="이름">
  </div>
  <h3>이름</h3>
  <p class="member-role">석사과정</p>
  <p class="member-research">연구 분야: AI</p>
  <p class="member-email"><i class="fas fa-envelope"></i> email@pusan.ac.kr</p>
</div>
```

**구성원 삭제:**
- 해당 `<div class="member-card">...</div>` 블록 전체 삭제

### 6. 프로젝트 추가/수정/삭제하기

`pages/projects.html` 파일 편집:

**프로젝트 추가:**
```html
<div class="project-card ongoing">  <!-- ongoing 또는 completed -->
  <div class="project-header">
    <h3>프로젝트 제목</h3>
    <span class="project-status ongoing">진행중</span>
  </div>
  <div class="project-info">
    <p><strong>기간:</strong> 2026.01 - 2028.12</p>
    <p><strong>지원기관:</strong> 한국연구재단</p>
    <p><strong>연구책임자:</strong> 류광열 교수</p>
  </div>
  <p class="project-description">
    프로젝트 설명...
  </p>
  <div class="project-tags">
    <span class="tag">AI</span>
    <span class="tag">Manufacturing</span>
  </div>
</div>
```

**프로젝트 상태 변경 (진행중 → 완료):**
- `class="project-card ongoing"` → `class="project-card completed"`
- `class="project-status ongoing"` → `class="project-status completed"`
- 텍스트 "진행중" → "완료"

### 7. 강의 추가/수정/삭제하기

`pages/courses.html` 파일 편집:

**강의 추가:**
```html
<div class="course-card">
  <h3>강의명</h3>
  <div class="course-info">
    <span class="course-level">대학원</span>
    <span class="course-credits">3학점</span>
  </div>
  <p class="course-description">
    강의 설명...
  </p>
  <ul class="course-topics">
    <li>주제 1</li>
    <li>주제 2</li>
  </ul>
</div>
```

### 8. 논문 목록 업데이트하기

`pages/publications.html` 파일 편집:

**카테고리:** 좌측 사이드바에 다음 7개 카테고리로 구분
- International Journal (SCI/SCIE)
- International Journal (Non-SCI)
- Domestic Journal
- Book Chapter
- International Conference
- Domestic Conference
- Patents and Programs Registered

**새 논문 추가:**
```html
<article class="publication-item">
  <div class="pub-badge">SCIE</div>
  <h4 class="pub-title">논문 제목</h4>
  <p class="pub-authors">저자명 and <strong>Kwangyeol Ryu*</strong></p>
  <p class="pub-journal"><em>저널명</em>, 권(호), 페이지, 월 연도</p>
</article>
```

**우수 논문 표시:**
```html
<article class="publication-item featured">
  <div class="pub-badge">SCIE</div>
  <h4 class="pub-title">
    <a href="/pages/publications/YYYY-paper-title.html">논문 제목</a>
  </h4>
  <!-- ... -->
  <div class="pub-tags">
    <span class="tag">Featured</span>
    <span class="tag">키워드1</span>
  </div>
</article>
```

### 9. 우수 논문 상세 페이지 만들기

`pages/publications/` 폴더에 새 HTML 파일 생성 (예: `2026-new-paper.html`):

**필수 섹션:**
- **Header**: 제목, 저자, 저널 정보, 날짜, SCIE/SCI 뱃지
- **Featured Media**: 이미지 또는 유튜브 영상
- **Abstract**: 논문 초록 (영문)
- **Key Contributions**: 주요 기여사항
- **Research Highlights**: 연구 하이라이트
- **Figures**: 논문 그림들
- **Citation**: BibTeX 형식 인용 정보
- **Links & Resources**: PDF, 소스코드, 데이터셋 링크

**이미지 추가:**
```html
<div class="featured-image">
  <img src="/assets/images/publications/paper-name.jpg" alt="Research Overview">
  <p class="image-caption">Figure 1: Overview</p>
</div>
```

**유튜브 영상 추가:**
```html
<div class="featured-video">
  <div class="video-wrapper">
    <iframe width="100%" height="500" 
      src="https://www.youtube.com/embed/VIDEO_ID" 
      frameborder="0" 
      allowfullscreen>
    </iframe>
  </div>
  <p class="video-caption">Research presentation video</p>
</div>
```

참고: `pages/publications/2025-ontology-modeling.html` 파일을 템플릿으로 사용하세요.

### 10. 공지사항 추가/수정/삭제하기

**공지사항 추가:**

`_notices/` 폴더에 새 파일 생성 (파일명: `YYYY-MM-DD-title.md`):

```markdown
---
layout: notice
title: "공지사항 제목"
date: 2026-03-01
priority: high  # high, normal, low 중 선택
---

공지사항 내용을 작성합니다.

## 소제목

- 항목 1
- 항목 2
```

**우선순위:**
- `high`: 중요 공지 (빨간색 강조)
- `normal`: 일반 공지 (파란색)
- `low`: 안내사항 (회색)

**공지사항 수정:**
- 해당 파일을 열어 내용 수정

**공지사항 삭제:**
- `_notices/` 폴더에서 해당 파일 삭제

**홈페이지 표시:**
- 최신 5개의 공지사항이 홈페이지 우측에 자동으로 표시됨
- 전체 공지사항은 Notices 페이지에서 확인 가능

### 11. 슬라이더 이미지 변경하기

**단계 1:** 새 이미지 준비
- 권장 크기: 1920x500px
- 파일명: `slider1.jpg`, `slider2.jpg`, `slider3.jpg`

**단계 2:** `assets/images/` 폴더에 업로드

**단계 3:** `_layouts/home.html`에서 텍스트 수정 (선택)
```html
<div class="slide-content">
  <h2>원하는 제목</h2>
  <p>원하는 설명</p>
</div>
```

### 12. 로고 이미지 변경하기

**단계 1:** 새 로고 준비
- 권장 크기: 높이 40px (너비 자동 조정)
- 파일명: `logo.png`

**단계 2:** `assets/images/logo.png` 파일 교체

**단계 3:** 자동으로 헤더에 반영됨

## 로컬 개발 환경 설정

### 사전 요구사항
- Ruby (버전 2.7 이상)
- Bundler

### 설치 및 실행

```bash
# 1. 저장소 클론
git clone https://github.com/PNU-MDA-LAB/PNU-MDA-LAB.github.io.git
cd PNU-MDA-LAB.github.io

# 2. 의존성 설치
bundle install

# 3. 로컬 서버 실행
bundle exec jekyll serve

# 4. 브라우저에서 확인
# http://localhost:4000
```

### 실시간 수정 확인
- 파일 저장 시 자동으로 재빌드
- 브라우저 새로고침으로 변경사항 확인
- `_config.yml` 수정 시에만 서버 재시작 필요

## 배포

### GitHub Pages 자동 배포
1. 변경사항 커밋
   ```bash
   git add .
   git commit -m "Update: 변경 내용 설명"
   ```

2. GitHub에 푸시
   ```bash
   git push origin main
   ```

3. 자동 빌드 및 배포 (약 2-3분 소요)

4. 배포 확인
   - URL: https://pnu-mda-lab.github.io

### 배포 상태 확인
- GitHub 저장소 → Actions 탭에서 빌드 상태 확인
- 초록색 체크: 성공
- 빨간색 X: 실패 (에러 로그 확인 필요)

## 디자인 커스터마이징

### 색상 변경
`assets/css/custom.css` 파일의 상단 변수 수정:

```css
:root {
  --primary-color: #2c3e50;      /* 메인 색상 */
  --secondary-color: #3498db;    /* 강조 색상 */
  --accent-color: #e74c3c;       /* 액센트 색상 */
  --text-color: #333;            /* 텍스트 색상 */
  --light-gray: #f8f9fa;         /* 배경 색상 */
}
```

### 레이아웃 수정
- `_layouts/` 폴더의 HTML 파일 편집
- `_includes/` 폴더의 헤더/푸터 편집

### 스타일 수정
- `assets/css/custom.css` 파일 편집
- CSS 클래스 추가/수정

## 문제 해결

### 로컬 서버가 시작되지 않는 경우
```bash
# Gemfile.lock 삭제 후 재설치
rm Gemfile.lock
bundle install
bundle exec jekyll serve
```

### 이미지가 표시되지 않는 경우
- 파일 경로 확인: `/assets/images/파일명.jpg`
- 파일명 대소문자 정확히 일치 확인
- 이미지 파일 존재 여부 확인

### GitHub Pages 빌드 실패
- GitHub Actions 로그 확인
- `_config.yml` 문법 오류 확인
- Front Matter 형식 확인

## 문의

**제조 데이터 분석 연구실 (MDA Lab)**
- 주소: 부산광역시 금정구 장전동 산30 부산대학교 제10공학관 626호
- 전화: +82-51-510-2473
- 이메일: kyryu@pusan.ac.kr

## 라이선스

Copyright © 2026 Pusan National University MDA Lab. All rights reserved.
