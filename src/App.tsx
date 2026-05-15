import Button from './components/Button/Button';
import Card from './components/Card/Card';
import Badge from './components/Badge/Badge';
import { pageBg } from './tokens/colors';

export default function App() {
  return (
    <div className={`min-h-screen ${pageBg} flex items-center justify-center p-8`}>
      <div className="max-w-sm w-full flex flex-col gap-4">
        <Card variant="gradient" color="purple">
          <h1 className="text-2xl font-black text-purple-700 text-center">ddiae-ui</h1>
          <p className="text-gray-500 text-sm text-center mt-1">디자인 시스템 미리보기</p>
        </Card>
        <Card variant="white">
          <div className="flex flex-col gap-3">
            <Button variant="primary" color="purple">나를 소개합니다</Button>
            <Button variant="primary" color="sky">내 코딩 성향 알아보기</Button>
            <Button variant="confirm" color="purple">확인</Button>
            <Button variant="ghost">취소</Button>
          </div>
        </Card>
        <Card variant="white">
          <div className="flex flex-wrap gap-2">
            {(['purple', 'pink', 'sky', 'green', 'yellow'] as const).map((c) => (
              <Badge key={c} color={c}>{c}</Badge>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
