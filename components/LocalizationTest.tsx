import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import React from "react";

const LocalizationTest = ({ locale }: { locale: string }) => {
  const t = useTranslations("homePage.title");

  return (
    <div>
      <h1>
        {t("part1")} the {t("part2")}
      </h1>
      <Link href="/" locale="jp">
        Switch to japanese
      </Link>
      <br />
      <Link href="/" locale="en">
        Switch to English
      </Link>
      <br />
      <Link href="/about">About</Link>
      <h3>Current locale is {locale}</h3>
    </div>
  );
};

export default LocalizationTest;
