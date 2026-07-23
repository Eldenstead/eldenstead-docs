# Eldenstead Docs Domain Setup

This repository builds two Docusaurus sites:

- `community/` -> public community documentation
- `operations/` -> staff operations documentation

The current GitHub Actions workflow builds both sites into one GitHub Pages artifact:

```text
docs.eldenstead.com/community/
docs.eldenstead.com/operations/
```

## Important Limitation

DNS records cannot point a hostname directly to a GitHub repository subdirectory.

For example, DNS alone cannot make:

```text
docs.eldenstead.com -> /community/
ops.eldenstead.com  -> /operations/
```

DNS only maps hostnames to another host. Routing a hostname to a path requires the web server, GitHub Pages configuration, a redirect, or a reverse proxy/CDN rule.

GitHub Pages also treats a custom domain as a site-level setting. One Pages site should be considered one published site with one canonical custom domain.

## Current Recommended Setup

Use one GitHub Pages site:

```text
docs.eldenstead.com
```

Then publish:

```text
https://docs.eldenstead.com/community/
https://docs.eldenstead.com/operations/
```

The root page redirects to `/community/`.

### DNS Record

At the DNS provider for `eldenstead.com`, create this record:

```text
Type:  CNAME
Name:  docs
Value: eldenstead.github.io
```

Some DNS providers require the target with a trailing dot:

```text
eldenstead.github.io.
```

### GitHub Pages Settings

In the `Eldenstead/eldenstead-docs` repository:

1. Open repository settings.
2. Go to **Pages**.
3. Set the publishing source to **GitHub Actions**.
4. Set the custom domain to:

```text
docs.eldenstead.com
```

5. Enable **Enforce HTTPS** after GitHub finishes DNS validation.

## If You Need Separate Subdomains

To serve these exact URLs:

```text
https://docs.eldenstead.com/
https://ops.eldenstead.com/
```

use one of the following approaches.

## Option A: Two Separate GitHub Pages Sites

Create two deployable Pages sites:

```text
Eldenstead/eldenstead-community-docs -> docs.eldenstead.com
Eldenstead/eldenstead-operations-docs -> ops.eldenstead.com
```

Each repository would have its own Docusaurus app at the site root and its own Pages custom domain.

DNS:

```text
Type:  CNAME
Name:  docs
Value: eldenstead.github.io

Type:  CNAME
Name:  ops
Value: eldenstead.github.io
```

GitHub Pages custom domains:

```text
Eldenstead/eldenstead-community-docs: docs.eldenstead.com
Eldenstead/eldenstead-operations-docs: ops.eldenstead.com
```

This is the cleanest GitHub Pages-only setup.

## Option B: Keep This Repo, Use a Reverse Proxy or CDN

Keep this repository as the source of truth and deploy the existing artifact:

```text
docs.eldenstead.com/community/
docs.eldenstead.com/operations/
```

Then configure a proxy/CDN in front of GitHub Pages:

```text
docs.eldenstead.com/* -> docs.eldenstead.com/community/*
ops.eldenstead.com/*  -> docs.eldenstead.com/operations/*
```

This requires a service such as Cloudflare Workers, another reverse proxy, or another static host that supports rewrite rules.

Use this option only if you specifically want one repository and two clean hostnames.

## Option C: Redirect Only

If clean hostnames are not required to preserve the path invisibly, configure redirects:

```text
docs.eldenstead.com -> https://docs.eldenstead.com/community/
ops.eldenstead.com  -> https://docs.eldenstead.com/operations/
```

This is simpler than a proxy, but the browser address will end up on the `/community/` or `/operations/` path.

## Recommendation

For the current repository layout, use:

```text
https://docs.eldenstead.com/community/
https://docs.eldenstead.com/operations/
```

If staff operations must have its own hostname, split the deploy target into a second GitHub Pages site or use a reverse proxy/CDN rewrite.