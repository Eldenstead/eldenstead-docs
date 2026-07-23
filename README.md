# Eldenstead Docs

This repository contains two Docusaurus sites for Eldenstead documentation.

- `community/` is the player-facing documentation site published under `/community/`.
- `operations/` is the staff operations and policy manual published under `/operations/`.

## Local Development

```powershell
npm install --prefix community
npm install --prefix operations
npm run start:community
npm run start:operations
```

## Builds

```powershell
npm run build
```

The community and operations sites are intentionally separate Docusaurus apps so public player guidance and staff process documentation can evolve independently.
