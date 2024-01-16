import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = useTranslations("Home");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{t("subtitle")}</h1>
      <Link href="/" locale="jp">
        Switch to japanese
      </Link>
      <Link href="/about">About</Link>
      <h3>Current locale is {locale}</h3>
    </main>
  );
}
