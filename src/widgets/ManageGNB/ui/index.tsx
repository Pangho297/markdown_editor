import { Button, Logo } from "@/shared";

export function ManageGNB() {
  return (
    <div className="flex h-16 items-center justify-between border-b bg-white px-6">
      <Logo size="sm" />
      <Button>로그아웃</Button>
    </div>
  );
}
