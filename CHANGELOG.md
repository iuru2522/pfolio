# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2026-07-15

### Added
- Neuromancer cyberdeck UI: `/CONNECT`, `/ARCHIVES`, `/PROTOCOLS`, `/SIGNAL`
- Deck Override themes (Matrix Grid / Night City) with `localStorage` persistence
- Typed content modules (`content/profile`, `archives`, `protocols`, `console-logs`)
- Signal uplink via Server Action + `/api/signal` (Zod validation, optional Resend)
- Vitest unit tests and Playwright e2e coverage
- Spec Kit artifacts under `specs/001-cyberdeck-portfolio/`

### Changed
- Full rewrite from classic section portfolio to single-page cyberdeck terminal
- Migrated v1.7 projects into `/ARCHIVES` (Acme Dashboard, uTracker, Bug Tracker, ParseComment, Zettelkasten)
- Stack refreshed to Next.js 16, React 19, Tailwind CSS v4

### Removed
- Legacy v1.x UI (intro, about, projects, skills, experience, contact, header, footer, blog)
- Old theme/section context, Framer Motion contact email flow, Cloudflare `wrangler` config
- Unused public assets (project screenshots, Resume.pdf, starter SVGs)

## [1.7.1] - 2026-07-09

### Fixed
- TypeScript build issues
- Node version alignment for tooling/CI

## [1.7.0] - 2026-05-09

### Changed
- Project content and presentation updates

## [1.6.0] - 2026-05

### Changed
- Resume and experience sections

## [1.5.0] - 2025

### Added
- Bug tracker project

## [1.4.0] - 2024

### Added
- Blog section and blog page

## [1.3.0] - 2024

### Added
- Project images, links, and Resume.pdf

## [1.2.0] - 2024

### Added
- Social media links

## [1.1.0] - 2024

### Added
- Dark mode

### Fixed
- Responsive styling for smaller screens

## [1.0.0] - 2024-03

### Added
- Initial portfolio: Header, Intro, About, Projects, Skills, Experience, Contact
- Contact form with server actions and email
- Toast notifications and Footer

[2.0.0]: https://github.com/iuru2522/pfolio/releases/tag/v2.0.0
[1.7.1]: https://github.com/iuru2522/pfolio/releases/tag/v1.7.1
[1.7.0]: https://github.com/iuru2522/pfolio/releases/tag/v1.7.0
[1.6.0]: https://github.com/iuru2522/pfolio/releases/tag/v1.6.0
[1.5.0]: https://github.com/iuru2522/pfolio/releases/tag/v1.5.0
[1.4.0]: https://github.com/iuru2522/pfolio/releases/tag/v1.4.0
[1.3.0]: https://github.com/iuru2522/pfolio/releases/tag/v1.3.0
[1.2.0]: https://github.com/iuru2522/pfolio/releases/tag/v1.2.0
[1.1.0]: https://github.com/iuru2522/pfolio/releases/tag/v1.1.0
[1.0.0]: https://github.com/iuru2522/pfolio/releases/tag/v1.0.0
