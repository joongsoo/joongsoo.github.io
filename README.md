# Joongsoo Blog

Hugo 기반 개인 블로그입니다.

## 시작하기

### 1. Hugo 설치

```bash
# macOS
brew install hugo

# 설치 확인
hugo version
```

### 2. 개발 서버 실행

```bash
hugo server -D
```

브라우저에서 http://localhost:1313 접속

## 새 글 작성하기

### 1. 포스트 생성

```bash
hugo new posts/my-new-post.md
```

### 2. 내용 작성

`content/posts/my-new-post.md` 파일을 열어 수정합니다.

```markdown
+++
date = '2026-01-25'
draft = false
title = '글 제목'
description = 'SEO를 위한 설명'
tags = ['tag1', 'tag2']
+++

여기에 내용을 작성합니다.

## 소제목

본문 내용...

### 코드 블록

```python
print("Hello, World!")
```

> 인용문 스타일

- 목록 아이템 1
- 목록 아이템 2
```

### 3. 미리보기

```bash
hugo server -D
```

`-D` 플래그로 draft 상태의 글도 확인할 수 있습니다.

### 4. 발행

`draft = false`로 변경하면 빌드에 포함됩니다.

## 페이지 추가하기

```bash
# 새 페이지 생성
hugo new about.md
```

`content/about.md` 파일이 생성됩니다.

## 메뉴 수정하기

`hugo.toml`에서 메뉴를 수정합니다.

```toml
[menus]
  [[menus.main]]
    name = 'Posts'
    url = '/posts/'
    weight = 1
  [[menus.main]]
    name = 'About'
    url = '/about/'
    weight = 2
```

`weight`가 작을수록 먼저 표시됩니다.

## 사이트 설정

`hugo.toml`에서 기본 설정을 변경합니다.

```toml
title = 'Joongsoo Blog'

[params]
  description = 'Personal blog about technology'
  author = 'Joongsoo Park'
```

## 배포하기

### 자동 배포 (GitHub Actions)

master 브랜치에 push하면 GitHub Pages로 자동 배포됩니다.

### 수동 빌드

```bash
hugo --minify
```

`public/` 폴더에 결과물이 생성됩니다.

## 디렉토리 구조

```
.
├── content/             # 콘텐츠 (마크다운)
│   ├── posts/           # 블로그 포스트
│   ├── about.md         # About 페이지
│   └── _index.md        # 홈페이지 인트로
├── themes/warm-minimal/ # 테마
├── static/              # 정적 파일 (이미지 등)
├── hugo.toml            # 설정 파일
└── public/              # 빌드 결과물
```

## 자주 쓰는 명령어

| 명령어 | 설명 |
|--------|------|
| `hugo server -D` | 개발 서버 (드래프트 포함) |
| `hugo server` | 개발 서버 |
| `hugo --minify` | 프로덕션 빌드 |
| `hugo new posts/title.md` | 새 포스트 생성 |

## 기능

- 반응형 디자인
- 다크모드 자동 지원
- SEO 최적화 (Open Graph, Twitter Card, JSON-LD)
- RSS 피드
- 코드 하이라이팅
- 한글 최적화 타이포그래피
