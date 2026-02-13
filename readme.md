# MDA Lab 홈페이지

부산대학교 산업공학과 제조 데이터 분석 연구실(Manufacturing Data Analytics Lab) 공식 홈페이지입니다.

Jekyll 기반의 정적 사이트 생성기를 사용하여 구축되었으며, GitHub Pages를 통해 호스팅됩니다.

🌐 **Live:** [https://pnu-mda-lab.github.io](https://pnu-mda-lab.github.io)

## 📁 폴더 구조

```
PNU-MDA-LAB.github.io/
│
├── _config.yml                  # Jekyll 설정 파일
├── Gemfile                      # Ruby 의존성 (Jekyll 4.3, webrick 등)
├── index.md                     # 홈페이지 (메인 페이지, layout: home)
├── publications.md              # 논문 목록 마크다운
├── readme.md                    # 이 파일
│
├── _layouts/                    # 페이지 레이아웃 템플릿
│   ├── default.html            # 기본 레이아웃 (헤더/푸터 포함)
│   ├── home.html               # 홈페이지 전용 레이아웃 (슬라이더, 메뉴카드, 공지위젯)
│   ├── page.html               # 일반 페이지 레이아웃
│   ├── post.html               # 뉴스 포스트 레이아웃
│   └── notice.html             # 공지사항 레이아웃
│
├── _includes/                   # 재사용 가능한 컴포넌트
│   ├── header.html             # 상단 네비게이션 바 (드롭다운 메뉴 포함)
│   └── footer.html             # 하단 푸터 (PNU 시그니처 로고)
│
├── _data/                       # 데이터 파일
│   ├── members.yml             # 현재 구성원 (PhD, Master, Undergrad)
│   ├── alumni.yml              # 졸업생 목록
│   ├── publications.yml.backup # 이전 통합 논문 데이터 백업 (Book Chapters, Patents 포함)
│   └── publications/           # 논문 데이터 (카테고리별 5개 파일)
│       ├── international_sci.yml        # 국제 저널 (SCI/SCIE)
│       ├── international_non_sci.yml    # 국제 저널 (Non-SCI)
│       ├── domestic.yml                 # 국내 저널
│       ├── international_conferences.yml # 국제 학술대회 (~137건)
│       └── domestic_conferences.yml     # 국내 학술대회 (~165건)
│
├── _posts/                      # 뉴스 게시물 (마크다운)
│   ├── 2026-02-09-cde-winter-conference.md
│   ├── 2026-02-02-homepage-renewal.md
│   └── [파일명 형식: YYYY-MM-DD-title.md]
│
├── _notices/                    # 공지사항 게시물 (마크다운)
│   ├── 2026-01-20-publication.md
│   └── [파일명 형식: YYYY-MM-DD-title.md]
│
├── pages/                       # 주요 페이지 (8개)
│   ├── introduction.html       # 연구실 소개 (Overview, Research Areas)
│   ├── location.html           # 위치 및 지도 (네이버 맵)
│   ├── professor.html          # 교수 소개
│   ├── members.html            # 구성원 페이지 (_data/members.yml 참조)
│   ├── publications.html       # 논문 목록 (카테고리별, _data/publications/ 참조)
│   ├── projects.html           # 프로젝트
│   ├── news.html               # 뉴스 목록
│   └── notices.html            # 공지사항 목록
│
├── assets/                      # 정적 파일
│   ├── css/
│   │   └── custom.css          # 전체 스타일시트 (~3400줄, CSS 변수 기반)
│   ├── js/
│   │   └── main.js             # JavaScript (슬라이더, 네비게이션, 스크롤)
│   └── images/
│       ├── logo.png            # 사이트 로고
│       ├── pnu_signature.png   # PNU 시그니처 (푸터용)
│       ├── slider1.jpg/.webp   # 슬라이더 이미지 (JPG 원본 + WebP 최적화)
│       ├── slider2.jpg/.webp
│       ├── slider3.jpg/.webp
│       ├── members/            # 구성원 사진
│       └── posts/              # 뉴스 게시물 이미지 (WebP 최적화)
│
└── _site/                       # Jekyll 빌드 결과물 (자동 생성, Git 무시)
```

## 🎯 주요 기능

### 1. 홈페이지 레이아웃
- **히어로 슬라이더**: 3개의 비주얼 이미지 (WebP + JPG 폴백), 5초 자동 전환
- **메뉴 카드 그리드**: 6개 바로가기 (Introduction, Location, Projects, Professor, Members, Publications)
- **공지사항 위젯**: 최신 5개 공지, 우선순위별 뱃지 (중요/일반/안내)
- **최신 뉴스**: 최근 3개 게시물 자동 표시

### 2. Introduction & Location 페이지
- **Introduction**: 연구실 개요(Overview), 연구 분야(Research Areas), 좌측 스티키 사이드바 네비게이션
- **Location**: 네이버 맵 임베드 (부산대 제10공학관), 주소 및 연락처 정보

### 3. 논문 관리 시스템
- **YAML 데이터 기반**: 5개 카테고리 파일로 분리 관리 (~300건 이상)
- **좌측 카테고리 네비게이션**: SCI/SCIE, Non-SCI, 국내 저널, 국제/국내 학술대회
- **뱃지 시스템**: SCI, SCIE, Scopus, KCI 등 자동 표시
- **수상 논문 표시**: `award` 필드로 학술대회 수상 논문 강조

### 4. 구성원 관리
- **YAML 데이터 기반**: `_data/members.yml`과 `_data/alumni.yml`로 관리
- **카드형 레이아웃**: 사진, 이름, 연구 분야, 이메일, 홈페이지 링크
- **졸업생 섹션**: 학위, 현 소속, 졸업 논문 제목

### 5. 뉴스 & 공지사항
- **마크다운 기반**: 간편한 게시물 작성
- **이미지 갤러리**: 그리드 레이아웃 지원
- **공지 우선순위**: high(중요), normal(일반), low(안내)

### 6. 반응형 디자인
- **5단계 브레이크포인트**: 1024px, 768px, 600px, 480px
- 모바일 햄버거 메뉴 자동 전환
- 모든 그리드 레이아웃 모바일 최적화

### 7. 이미지 최적화
- **WebP 포맷**: 슬라이더 99% 용량 절감 (44.4MB → 396KB)
- **`<picture>` 태그**: WebP 우선, JPG 폴백
- **Lazy Loading**: 첫 번째 슬라이드 제외 지연 로딩

## 🎨 디자인 시스템

### 컬러 스킴
```css
:root {
  --primary-color: #1a2a3a;       /* 진한 네이비 */
  --secondary-color: #2c4a6e;     /* 중간 네이비 */
  --accent-color: #3a7cc2;        /* 파란색 강조 */
  --text-color: #2d2d2d;          /* 텍스트 */
  --light-gray: #f5f6f8;          /* 배경 */
  --border-color: #d8dce2;        /* 테두리 */
}
```

### 헤더 네비게이션 구조
```
Home | Introduction ▾ | Professor | Members | Publications | Projects | News | Notices
              ├── About MDA Lab
              └── Location
```

## 콘텐츠 관리 가이드

### 1. 뉴스 게시물 추가

`_posts/` 폴더에 `YYYY-MM-DD-title.md` 파일 생성:

```markdown
---
layout: post
title: "게시물 제목"
date: 2026-03-15
author: "작성자"
image: /assets/images/posts/image.webp
---

본문 내용 (마크다운)
```

이미지는 `assets/images/posts/` 폴더에 업로드합니다.
가능하면 WebP 포맷으로 변환하여 용량을 절감합니다.

### 2. 공지사항 추가

`_notices/` 폴더에 `YYYY-MM-DD-title.md` 파일 생성:

```markdown
---
layout: notice
title: "공지사항 제목"
date: 2026-03-01
priority: high    # high(중요), normal(일반), low(안내)
---

공지사항 내용
```

### 3. 논문 추가

해당 카테고리의 YAML 파일에 항목 추가:

```yaml
# _data/publications/international_sci.yml 예시
- title: "논문 제목"
  authors: "Author1, Author2, and Kwangyeol Ryu*"
  journal: "Journal Name"
  volume: "Vol.XX, No.X, pp.XXX-XXX"
  date: "2026-01"
  badge: "SCIE"
  tags:
    - keyword1
    - keyword2
```

학술대회 논문에서 수상작인 경우 `award: "Best Paper Award"` 필드를 추가합니다.

### 4. 구성원 추가/수정

`_data/members.yml` 편집:

```yaml
- name: "이름"
  name_en: "English Name"
  role: "Ph.D. Student"      # Ph.D. Student, M.S. Student, Undergraduate
  research: "연구 분야"
  email: "email@pusan.ac.kr"
  photo: "/assets/images/members/photo.jpg"
```

졸업생은 `_data/alumni.yml`에 추가합니다.

### 5. 슬라이더 이미지 변경

1. 이미지 준비 (권장: 1920×500px)
2. `assets/images/` 폴더에 JPG + WebP 버전 모두 업로드
3. `_layouts/home.html`의 `<picture>` 태그에서 경로 수정

```html
<picture>
  <source srcset="{{ '/assets/images/slider1.webp' | relative_url }}" type="image/webp">
  <img src="{{ '/assets/images/slider1.jpg' | relative_url }}" alt="Slide">
</picture>
```

### 6. 색상 변경

`assets/css/custom.css` 파일 상단의 `:root` 변수를 수정합니다.
그라데이션 등 하드코딩된 색상도 함께 변경해야 합니다.

## 로컬 개발 환경 설정

### 사전 요구사항
- Ruby (2.7 이상)
- Bundler (`gem install bundler`)

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

- 파일 저장 시 자동 재빌드 (LiveReload)
- `_config.yml` 수정 시에만 서버 재시작 필요

## 배포

### GitHub Pages 자동 배포

```bash
git add .
git commit -m "Update: 변경 내용 설명"
git push origin main
```

약 2–3분 후 자동 빌드 및 배포 완료.
GitHub 저장소 → **Actions** 탭에서 빌드 상태 확인 가능.

## 기술 스택

| 구분 | 기술 |
|------|------|
| **정적 사이트 생성** | Jekyll 4.3 |
| **호스팅** | GitHub Pages |
| **스타일링** | CSS Custom Properties, Flexbox, Grid |
| **아이콘** | Font Awesome 6 |
| **지도** | Naver Map Embed |
| **SEO** | jekyll-seo-tag, jekyll-feed (RSS) |
| **이미지 최적화** | WebP (`<picture>` 태그 + lazy loading) |

## 문의

**제조 데이터 분석 연구실 (Manufacturing Data Analytics Lab)**
- 📍 부산광역시 금정구 장전동 산30 부산대학교 제10공학관 626호
- 📞 +82-51-510-2473
- ✉️ kyryu@pusan.ac.kr

## 라이선스

Copyright © 2026 Pusan National University MDA Lab. All rights reserved.
