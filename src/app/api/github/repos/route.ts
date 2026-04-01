import { NextRequest, NextResponse } from "next/server";

/**
 * Proxies GitHub public API so the browser never needs a token.
 * Cache for 1 hour via Next fetch revalidate.
 */
export async function GET(request: NextRequest) {
  const user =
    request.nextUrl.searchParams.get("user") ||
    process.env.GITHUB_USERNAME ||
    "octocat";

  try {
    const res = await fetch(
      `https://api.github.com/users/${encodeURIComponent(user)}/repos?sort=updated&per_page=8&type=owner`,
      {
        headers: { Accept: "application/vnd.github+json" },
        next: { revalidate: 3600 },
      },
    );

    if (!res.ok) {
      return NextResponse.json([], { status: 200 });
    }

    const data = (await res.json()) as Array<{
      id: number;
      name: string;
      description: string | null;
      html_url: string;
      homepage: string | null;
      topics?: string[];
      fork: boolean;
    }>;

    const mapped = data
      .filter((r) => !r.fork)
      .map((r) => ({
        id: r.id,
        name: r.name,
        description: r.description,
        html_url: r.html_url,
        homepage: r.homepage,
        topics: r.topics ?? [],
      }));

    return NextResponse.json(mapped);
  } catch {
    return NextResponse.json([], { status: 200 });
  }
}
