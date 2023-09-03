const buildSuffix = (url?: {
  query?: Record<string, string>;
  hash?: string;
}) => {
  const query = url?.query;
  const hash = url?.hash;
  if (!query && !hash) return "";
  const search = query ? `?${new URLSearchParams(query)}` : "";
  return `${search}${hash ? `#${hash}` : ""}`;
};

export const pagesPath = {
  home: {
    $url: (url?: { hash?: string }) => ({
      pathname: "/home" as const,
      hash: url?.hash,
      path: `/home${buildSuffix(url)}`,
    }),
  },
  settings: {
    $url: (url?: { hash?: string }) => ({
      pathname: "/settings" as const,
      hash: url?.hash,
      path: `/settings${buildSuffix(url)}`,
    }),
  },
  sign_in: {
    $url: (url?: { hash?: string }) => ({
      pathname: "/sign_in" as const,
      hash: url?.hash,
      path: `/sign_in${buildSuffix(url)}`,
    }),
  },
  $url: (url?: { hash?: string }) => ({
    pathname: "/" as const,
    hash: url?.hash,
    path: `/${buildSuffix(url)}`,
  }),
};

export type PagesPath = typeof pagesPath;

export const staticPath = {
  next_svg: "/next.svg",
  vercel_svg: "/vercel.svg",
} as const;

export type StaticPath = typeof staticPath;
