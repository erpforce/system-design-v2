# HRM UI Kit

High-fidelity interactive recreation of the ERPForce HRM web application.
Source: `HRM-Review-File.fig` — Document Master page.

## Screens included
- **Document Master — Table Listing** (with search, filter, add, view, edit, delete)
- **Document Master — Add New / Edit Form** (modal overlay)
- **Document Master — View Detail** (modal overlay)
- Sidebar navigation (all modules listed, click to navigate)

## Components
| File | Contents |
|---|---|
| `Sidebar.jsx` | Left nav, logo, search, nav items |
| `TopBar.jsx` | Top bar with title, view tabs, user avatar |
| `Buttons.jsx` | Btn, Badge, Field, Input, Select, Toggle, IconBtn, IC (icons) |
| `DocumentMaster.jsx` | DocumentTable, DocumentForm, DocumentDetail, sample data |
| `index.html` | Full interactive prototype |

## Design notes
- 1440px wide layout (full desktop)
- Inter font, JetBrains Mono for IDs
- Primary: `#2EB273`, Sidebar: `#FBFBFB`
- All interactions are faked — no real backend
