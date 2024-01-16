import createMiddleware from "next-intl/middleware";
import { locales, localePrefix } from "./navigation";

export default createMiddleware({
  locales,
  defaultLocale: "en",
  localePrefix,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(jp|en)/:path*"],
};
