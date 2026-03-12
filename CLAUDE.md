# Cardnews Generation Rules

## Project
Diverga 카드뉴스 자동 생성 파이프라인. 연구자 대상 Claude Code 기능 소개.

## Design Principles — MUST follow

### 1. 공간을 100% 채워라
- 모든 박스(터미널, 문서 미리보기, 체크리스트 등)는 **가용 세로 공간을 꽉 채워야** 한다
- `flex: 1`을 사용하여 남는 공간을 요소가 흡수하도록 한다
- 슬라이드 하단 50%가 비어있으면 실패. 최소 80% 이상 콘텐츠로 채워야 한다
- 빈 공간이 생기면: 폰트를 키우거나, 정보를 추가하거나, 박스를 늘려라

### 2. 텍스트는 모바일 피드 기준으로 크게
- 타이틀: 72-84px (hero), 56-64px (section)
- 본문: 28px 최소
- 코드/터미널: 22px 최소
- 캡션: 22px
- 1080x1350 캔버스는 모바일에서 약 375px 너비로 축소됨을 항상 고려

### 3. 실제 캡처 > 하드코딩 목업
- 터미널 출력, 브라우저 화면, 문서 미리보기는 **Playwright로 실제 캡처**한 이미지를 사용
- `npm run capture`로 생성된 `assets/captures/` 이미지를 `<img>` 태그로 삽입
- 하드코딩 HTML 목업은 캡처 불가능한 경우의 fallback으로만 사용

### 4. 연구자는 학술 개념을 이미 안다
- APA 7th, MLA, Chicago 등 학술 형식에 대한 설명 불필요
- 연구자가 모르는 것: **Claude Code의 구체적 기능과 사용법**
- 각 슬라이드는 "이렇게 하면 이게 나온다"를 보여줘야 함
- 핵심: **프롬프트 예시 → 실제 output → 숨겨진 기능 소개**

### 5. Claude Code 기능 중심 콘텐츠
- 실제 사용할 **프롬프트 텍스트**를 크게 보여줘라
- `/slash` 명령어, Skill 이름, CLI 옵션 등 **구체적 기능명**을 강조
- "이런 기능이 있다"가 아니라 "이렇게 쓴다"를 보여줘라
- 연구자가 복사해서 바로 쓸 수 있는 수준의 구체성

### 6. 한 슬라이드 = 한 메시지
- 슬라이드당 핵심 메시지는 하나
- 정보를 압축하되 빈 공간은 남기지 마라
- 메시지가 작으면 폰트를 키워서 공간을 채워라

## Theme
- Warm 모드 통일 (ivory #FAF9F5 배경)
- Accent 슬라이드는 terracotta #D97757 배경 (1-2장만)
- Dark 모드 사용 금지
- 마스코트: 🦊🎓 (Apple 이모지)

## Pipeline
```bash
npm run capture    # Playwright 스크린샷 캡처
npm run generate   # EN + KR 카드뉴스 생성
npm run build      # capture → generate 전체 파이프라인
```

## File Structure
- `src/design-system.js` — 디자인 토큰
- `src/slide-renderer.js` — 슬라이드 컴포넌트
- `src/slides/*.js` — 각 카드뉴스 콘텐츠
- `src/capture.js` — Playwright 스크린샷 캡처
- `src/generate.js` — HTML → PNG → PDF 파이프라인
- `captures/*.json` — 캡처 설정 파일
- `assets/captures/` — 캡처된 스크린샷
- `output/` — 최종 생성물 (PNG + PDF)

## Git
- 커밋 전 반드시 `npm run generate`로 output 갱신
- output/ 폴더는 git에 포함 (결과물 확인용)
