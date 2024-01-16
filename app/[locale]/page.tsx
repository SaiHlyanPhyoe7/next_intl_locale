"use client";

import LocalizationTest from "@/components/LocalizationTest";
import { Link } from "@/navigation";
import { signOut, useSession } from "next-auth/react";
import { useTranslations } from "next-intl";

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const session = useSession();
  console.log(session);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>{session?.data?.user?.name}</div>
      <button onClick={() => signOut()}>Logout</button>
      <LocalizationTest locale={locale} />
    </main>
  );
}
