# ddiae-ui

ddiae 프로젝트들의 공통 디자인 시스템입니다.

## 설치

새 프로젝트의 `package.json`이 있는 폴더에서 아래 명령어를 실행하세요.

```bash
npm install github:ddiae/ddiae-ui
```

## 사용법

```tsx
import { Button, Card, Badge } from 'ddiae-ui';
import 'ddiae-ui/src/index.css'; // 전역 스타일 (Tailwind + 애니메이션)

export default function MyPage() {
  return (
    <Card variant="gradient" color="purple">
      <Button variant="primary" color="purple">시작하기</Button>
      <Badge color="pink">NEW</Badge>
    </Card>
  );
}
```

## 컴포넌트

### Button

| prop | 타입 | 기본값 | 설명 |
|------|------|--------|------|
| `variant` | `primary \| confirm \| ghost` | `primary` | 버튼 스타일 |
| `color` | `purple \| pink \| sky \| green \| yellow` | `purple` | 버튼 색상 |

```tsx
<Button variant="primary" color="purple">나를 소개합니다</Button>
<Button variant="primary" color="sky">코딩 성향 알아보기</Button>
<Button variant="confirm" color="purple">확인</Button>
<Button variant="ghost">취소</Button>
```

### Card

| prop | 타입 | 기본값 | 설명 |
|------|------|--------|------|
| `variant` | `gradient \| white` | `white` | 카드 배경 스타일 |
| `color` | `purple \| pink \| sky \| green \| yellow` | `purple` | 그라데이션 색상 (gradient일 때만 적용) |

```tsx
<Card variant="gradient" color="pink">그라데이션 카드</Card>
<Card variant="white">흰색 카드</Card>
```

### Badge

| prop | 타입 | 기본값 | 설명 |
|------|------|--------|------|
| `color` | `purple \| pink \| sky \| green \| yellow` | `purple` | 뱃지 색상 |

```tsx
<Badge color="purple">크리에이터</Badge>
```

## 토큰

```ts
import { palette, pageBg } from 'ddiae-ui';

// pageBg: 페이지 배경 그라데이션 클래스 (from-purple-50 via-pink-50 to-yellow-50)
// palette: 색상별 bg / shadow / text / badge 클래스 모음
```

## Storybook

컴포넌트를 눈으로 확인하려면:

```bash
npm run storybook
```

## 컴포넌트 추가 방법

1. `src/components/새컴포넌트/` 폴더 생성
2. `컴포넌트.tsx` 작성
3. `컴포넌트.stories.tsx` 작성
4. `src/index.ts`에 export 추가
