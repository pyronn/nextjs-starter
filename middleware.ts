import createMiddleware from 'next-intl/middleware';
import {localePrefix} from "@/navigation";

export default createMiddleware({
    // A list of all locales that are supported
    locales: ['en', 'zh'],
    localePrefix,
    // Used when no locale matches
    defaultLocale: 'en'
});

export const config = {
    // Match only internationalized pathnames
    matcher: ['/', '/(zh|en)/:path*']
};
