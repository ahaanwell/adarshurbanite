export const SITE_URL = "https://www.adarshurbanite.com";

// Anchor text is always bold; no underline or colour change (inherits from surrounding text).
export function IntLink({ href, children }) {
  return (
    <a href={`${SITE_URL}${href}`}>
      <strong>{children}</strong>
    </a>
  );
}

export function ExtLink({ href, children }) {
  return (
    <a href={href} target="_blank" rel="nofollow noopener noreferrer">
      <strong>{children}</strong>
    </a>
  );
}
