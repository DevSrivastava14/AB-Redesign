export function isValidGitHubRepoUrl(url: string): boolean {
  const trimmed = url.trim();
  if (!trimmed) return false;

  const pattern =
    /^(https?:\/\/)?(www\.)?github\.com\/[a-zA-Z0-9_-]+\/[a-zA-Z0-9_.-]+\/?(\?.*)?$/i;
  return pattern.test(trimmed);
}

export function isValidGitHubCommitUrl(url: string): boolean {
  const trimmed = url.trim();
  if (!trimmed) return false;

  const pattern =
    /^(https?:\/\/)?(www\.)?github\.com\/[a-zA-Z0-9_-]+\/[a-zA-Z0-9_.-]+\/commit\/[a-f0-9]{7,40}\/?(\?.*)?$/i;
  return pattern.test(trimmed);
}

export function isValidLinkedInPostUrl(url: string): boolean {
  const trimmed = url.trim();
  if (!trimmed) return false;

  const pattern =
    /^(https?:\/\/)?(www\.)?linkedin\.com\/(posts|feed\/update|pulse)\/.+/i;
  return pattern.test(trimmed);
}

export function getGitHubRepoError(url: string): string | null {
  if (!url.trim()) return null;
  if (isValidGitHubRepoUrl(url)) return null;
  return "That doesn't look like a GitHub repository URL.";
}

export function getGitHubCommitError(url: string): string | null {
  if (!url.trim()) return null;
  if (isValidGitHubCommitUrl(url)) return null;
  return "That doesn't look like a GitHub commit URL.";
}

export function getLinkedInPostError(url: string): string | null {
  if (!url.trim()) return null;
  if (isValidLinkedInPostUrl(url)) return null;
  return "That doesn't look like a LinkedIn post URL.";
}
