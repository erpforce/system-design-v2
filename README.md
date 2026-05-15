# ERPForce HRM Design System

## Overview

**ERPForce** is a web-based Enterprise Resource Planning (ERP) platform focused on Human Resource Management (HRM). The product is a full-featured HRMS covering employee lifecycle management, payroll, timesheets, onboarding/offboarding, recruitment, leave management, assets, documents, and organization structure.

**Target users:** HR managers, admins, and employees — many of whom are non-technical. The design philosophy is minimal, functional, and easy to navigate.

---

## Sources

- **Figma file:** `HRM-Review-File.fig` (mounted as VFS at `/`)
  - Key pages: Document-Master, Onboarding, Offboarding, Payroll, Timesheet, Dashboard, Recruitment, Employee-Management, and more (26 pages total, 129 top-level frames)
- No external codebase was provided

---

## Products / Surfaces

| Surface | Description |
|---|---|
| **HRM Web App** | Full-screen desktop web application (1440px wide). Sidebar nav + top bar layout. All HR modules. |

---

## CONTENT FUNDAMENTALS

### Tone & Voice
- **Professional but approachable.** The copy is concise and direct — no marketing fluff.
- **Sentence case** for labels, headings, button text. E.g. "Add new document", "Document Master".
- **Second-person ("you")** implied but rarely stated. Labels and actions speak directly.
- **No emoji** in the product UI (except the footer easter-egg: "Crafted with ❤️").
- **No exclamation marks.** Calm, functional tone.
- **Action-oriented button labels**: "Add", "Save", "Actions", "Filter", "Search".
- **Module names are title-cased**: "Document Master", "Leave Policy Master", "Salary Structure".
- **Empty states** use simple, direct text: "No document records exist. Create your first document record."

### Examples
- Button: `Add`, `Save`, `Actions`, `Cancel`
- Page title: `Document Master`
- Breadcrumb: `Document Master / Add New Document`
- Field label: `Document Type Name`, `Status`
- Status badge: `Active`, `Draft`
- Table column: `ID`, `Document Type`, `Number of Documents`, `Status`

---

## VISUAL FOUNDATIONS

### Colors
- **Primary green:** `#2EB273` — CTAs, primary buttons, active states, success indicators
- **Dark navy:** `#001866` — Used sparingly for deep contrast accents
- **Olive/icon green:** `#798638` — Secondary icon tint, dropdown arrows
- **Background:** `#FFFFFF` (main), `#F5F6F5` (borders, dividers, row separators), `#FBFBFB` (sidebar)
- **Text hierarchy:** `#1F2125` (primary) → `#656669` / `#232529` (secondary) → `#7B7C7F` / `#8E8E93` (muted) → `#A7A8A9` / `#BDC0BF` (disabled/placeholder)
- **Status tints:** Green `#D6F3E5` / `#EBF9F2`, Blue `#CDE3F4`, Yellow `#FFF3CC`
- **Avatar bg:** `#F6DEE8` with text `#6F065D` (pink/purple tones)

### Typography
- **Primary font:** Inter — Regular (400), Medium (500), SemiBold (600), Bold (700)
- **Mono font:** JetBrains Mono — for IDs, codes, technical values
- **Cover/display only:** Poppins (not used in product UI)
- **Scale:** 12px (labels, captions) → 13px → 14px (body, default) → 16px (sub-headings) → 18px → 20px (page titles)
- **Letter spacing:** `-0.02em` consistently throughout
- **Line height:** `1.4` (140%)

### Spacing & Layout
- **Sidebar:** 240px wide, `#FBFBFB` background
- **Top bar:** 56px tall, white, `1px solid #F5F6F5` bottom border
- **Sub-header / breadcrumb bar:** 56px tall
- **Content padding:** 32px horizontal
- **Component gap:** 4px (tight), 8px (default), 12px (comfortable), 16px, 24px, 32px
- **Grid:** 8px base unit

### Border Radius
- **Standard elements:** 4px (inputs, buttons, cards, dropdowns)
- **Avatars / chips:** 8px
- **Pills / badges:** 15px (fully rounded small badges)
- **Toggle:** fully rounded

### Shadows
- **Primary button:** `0px 4px 10px -2px rgba(20,78,50,0.05), 0px 2px 2px -1px rgba(20,78,50,0.1), 0px -1px 4px 0px rgba(0,0,0,0.05)`
- **Secondary button / card:** `0px 0px 2px 0px #E0E0E0, 0px 1px 4px -2px rgba(24,39,75,0.02), 0px 4px 4px -2px rgba(24,39,75,0.06)`
- **Input:** `0px 1px 2px 0px rgba(0,0,0,0.05)`
- **No large drop shadows.** Everything is subtle, minimal elevation.

### Backgrounds & Surfaces
- **No gradients** in the product UI (gradients are cover-slide-only).
- **No background images** in the app — pure white and light gray surfaces.
- **No textures or patterns.**
- **Dividers** are `1px solid #F5F6F5` — very subtle.

### Borders
- Standard: `1px solid #F5F6F5` (very light)
- Input active: `1px solid #EEF0F1`
- No heavy outlines anywhere.

### Animation
- **Minimal / no animation** indicated. ERP focus — speed and clarity over delight.
- Toggle states imply simple transitions.
- No bounces, springs, or decorative motion.

### Hover / Press States
- Hover: subtle background lightening (not explicitly defined in Figma — inferred as `#F5F6F5` tint on interactive items)
- Active nav items: `#2EB273` left accent or background fill
- Buttons: color darkening implied (no explicit hover state defined)

### Icons
- **Style:** Linear (outline/stroke) icons — Vuesax icon library
- **Sizes:** 16px (table/inline), 20px (standard UI), 24px (header actions)
- **Color:** `#656669` (default), `#2EB273` (active/primary), `#1C1C1C` (strong)
- **No filled icons** in default state; Bulk variants used for special cases

### Cards / Tables
- Tables: white background, `#F5F6F5` row borders, 40px row height
- Table headers: white bg, medium-weight Inter 12–14px, `#656669` text
- Cards: white bg, subtle shadow, 4px radius
- No colored left-border cards.

### Corner Radius Summary
| Element | Radius |
|---|---|
| Button | 4px |
| Input | 4px |
| Card | 4px |
| Dropdown | 4px |
| Avatar | 8px |
| Badge/Pill | 15px |
| Toggle | 999px |

---

## ICONOGRAPHY

- **Icon library:** Vuesax Icons (Linear/Outline variant by default, Bulk variant for emphasis)
- **Delivery:** Referenced as inline React components in Figma; no standalone icon font detected
- **Substitution:** For the UI kit, **Phosphor Icons** (CDN) is used as the closest match to Vuesax Linear style (consistent stroke weight, similar metaphors)
- **Sizes in use:** 14px (sidebar search), 16px (table actions), 20px (nav, header), 24px (header icons)
- **No emoji** used as icons in the product
- **No unicode character icons**
- Common icons: search, edit, trash, arrow-down, arrow-left, add/plus, filter, more (kebab/dots), calendar, user, help, notification bell

---

## File Index

```
README.md                    ← This file
SKILL.md                     ← Agent skill definition
colors_and_type.css          ← CSS design tokens (colors, type, spacing)
assets/
  cover-bg.jpg               ← Cover background image
preview/
  colors-brand.html          ← Brand color palette card
  colors-surface.html        ← Surface & border colors card
  colors-semantic.html       ← Semantic/status colors card
  type-scale.html            ← Typography scale card
  type-specimens.html        ← Type specimens (Inter + Mono)
  spacing-tokens.html        ← Spacing & radius tokens card
  shadows.html               ← Shadow elevation system card
  components-buttons.html    ← Button variants card
  components-inputs.html     ← Input field variants card
  components-badges.html     ← Badge/pill/status variants card
  components-table.html      ← Table row/header component card
  components-nav.html        ← Sidebar navigation card
  components-topbar.html     ← Top navigation bar card
ui_kits/
  hrm/
    README.md                ← UI kit notes
    index.html               ← Interactive HRM prototype
    Sidebar.jsx              ← Sidebar nav component
    TopBar.jsx               ← Top bar component
    Table.jsx                ← Data table component
    Buttons.jsx              ← Button components
    Forms.jsx                ← Form input components
    DocumentMaster.jsx       ← Document Master screen
```
