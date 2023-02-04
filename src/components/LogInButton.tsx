import { signIn, signOut, useSession } from 'next-auth/react';

import { Button } from './Button';

export default function LogInButton() {
  const { data: session } = useSession();
  if (session) {
    return (
      <div className=" flex items-center gap-x-3">
        Hello, {session?.user?.name}
        <Button variant="destructive" onClick={() => signOut()}>
          Logout
        </Button>
      </div>
    );
  }
  return (
    <div className="flex flex-col">
      <Button variant="subtle" onClick={() => signIn()}>
        Login
      </Button>
    </div>
  );
}
