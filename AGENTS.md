# Project Guidelines & Agent Instructions

## Primary Working Directory Rule
- **Active Codebase**: All subsequent modifications, component enhancements, style adjustments, and code changes MUST be made exclusively in the **`clientcopy/`** directory.
- **Protected Directory**: Do **NOT** modify or alter any files inside the original **`client/`** directory.

---

## Technology Stack & Conventions
- **Framework**: React (Vite)
- **Styling**: Vanilla CSS (`client copy/src/App.css`, `client copy/src/index.css`)
- **State & Context**: `LanguageContext` for Marathi (`mr`) & English (`en`) bilingual support.
- **Design Aesthetic**: Rich matte orange (`#f15a24`), dark mode touches, DM Serif Display + Anton typography, editorial luxury layouts with responsive viewports.

---

## Responsive Design Rules
- Mobile breakpoints: `@media (max-width: 640px)` and `@media (max-width: 360px)`.
- Tablet breakpoint: `@media (max-width: 992px)` / `@media (max-width: 860px)`.
- Always ensure changes for mobile/tablet do NOT break or alter desktop styling (`> 992px`).
