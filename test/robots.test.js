import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const robots = await readFile(new URL("../public/robots.txt", import.meta.url), "utf8");
const sitemaps = robots
  .split("\n")
  .filter((line) => /^sitemap:/i.test(line.trim()))
  .map((line) => line.trim().replace(/^sitemap:\s*/i, ""));

// Search Console has /sitemap.xml registered. robots.txt announcing a different
// URL is a second source of truth for the same index, even if both resolve.
test("robots.txt announces exactly one sitemap, the one Search Console knows", () => {
  assert.deepEqual(sitemaps, ["https://diegobarrioh.dev/sitemap.xml"]);
});

test("robots.txt keeps the whole site crawlable", () => {
  assert.match(robots, /^User-agent: \*$/m);
  assert.match(robots, /^Allow: \/$/m);
  assert.doesNotMatch(robots, /^Disallow: \/\s*$/m);
});
