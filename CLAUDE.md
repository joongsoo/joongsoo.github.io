# STARTUP LIFE

실행하고 깨져가며 배워가는 기록을 남기는 블로그입니다.

Hugo 기반으로 제작되었으며, warm-minimal 커스텀 테마를 사용합니다.

## 프로젝트 구조

```
.
├── archetypes/          # 새 콘텐츠 템플릿
├── content/             # 블로그 콘텐츠 (마크다운)
│   ├── posts/           # 블로그 포스트
│   └── about.md         # About 페이지
├── themes/warm-minimal/ # 커스텀 테마
│   ├── assets/css/      # CSS 스타일
│   └── layouts/         # HTML 템플릿
├── hugo.toml            # Hugo 설정
└── public/              # 빌드 출력 (gitignore)
```

## 개발 명령어

```bash
hugo server -D      # 개발 서버 실행
hugo --minify       # 프로덕션 빌드
hugo new posts/my-post.md  # 새 포스트 생성
```

## 디자인 시스템

### 색상 팔레트 (Warm Minimal)

| 용도 | 변수명 | Light Mode | Dark Mode |
|------|--------|------------|-----------|
| 배경 | `--bg` | #FAFAF9 | #191F28 |
| 보조 배경 | `--bg-secondary` | #F5F5F4 | #242B35 |
| 본문 텍스트 | `--text` | #374151 | #B0B8C1 |
| 보조 텍스트 | `--text-secondary` | #6B7280 | #8B95A1 |
| 제목 | `--heading` | #191F28 | #F9FAFB |
| 액센트 | `--accent` | #C2410C | #EA580C |

### 타이포그래피 & Vertical Rhythm

**8px 기반 그리드 시스템**을 사용합니다.

| 요소 | 크기 | 행간 | 위 간격 | 아래 간격 |
|------|------|------|---------|-----------|
| 본문 p | 16px | 1.75~1.85 | - | 20px |
| 제목 H1 | 30px | 1.3 | 0 | 24px |
| 제목 H2 | 24px | 1.35 | 48px | 16px |
| 제목 H3 | 20px | 1.4 | 40px | 12px |
| 제목 H4 | 18px | 1.45 | 32px | 12px |

### Vertical Rhythm 원칙

1. **제목 proximity**: 제목 위 간격 > 제목 아래 간격 (약 3:1 비율)
   - 제목은 아래 내용과 시각적으로 연결되어야 함
   - 위에 더 많은 공간을 두어 이전 섹션과 분리

2. **일관된 간격**: 8px 배수로 모든 간격 설정
   - 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px, 64px

3. **줄 길이**: 최대 680px (45~75자)
   - 읽기에 최적화된 줄 길이 유지

4. **hr 사용 자제**: 섹션 구분은 제목의 간격으로 충분
   - hr은 주제가 완전히 바뀔 때만 사용

### 폰트

- 기본: Pretendard (CDN)
- 코드: SFMono-Regular, Consolas

## 콘텐츠 작성 가이드

### Front Matter

```yaml
+++
date = '2026-01-25'
draft = false
title = 'Post Title'
description = 'SEO 설명'
tags = ['tag1', 'tag2']
+++
```

### 문서 구조화 원칙

1. **계층 구조 준수**: H1 → H2 → H3 순서로 사용
2. **단락 길이**: 3~5문장이 적당
3. **리스트 활용**: 나열 시 bullet points 사용
4. **hr 최소화**: 큰 주제 전환에만 사용

## SEO 최적화

- Open Graph / Twitter Card 메타 태그
- JSON-LD 구조화 데이터
- Canonical URL
- RSS 피드
- sitemap.xml / robots.txt 자동 생성
