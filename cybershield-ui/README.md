# CyberShield UI

CyberShield UI is a Vite + React dashboard purpose-built for cybersecurity teams. It ships with TailwindCSS (dark mode by default), reusable UI primitives, and mock services that simulate real security workflows.

## Features

- **Authentication**: Animated login surface with validation, show/hide password, and security copy.
- **Command Center Dashboard**: KPI cards, live status banner, and recent alerts table.
- **Data Protection**: File upload widget, AES-256 selection, mock encrypt/decrypt service with toast feedback.
- **Network Monitor**: Real-time Recharts line graph, suspicious IP list, risk badges.
- **Access Control**: Role provisioning form, permissions table, MFA toggles.
- **Alerts Center**: Filterable alert feed with a slide-in detail drawer.
- **Global UI**: Sidebar navigation, topbar with theme switcher, reusable Card/Badge/Button/Table/Modal, and toast notifications.

## Tech Stack

- React 19 + Vite
- React Router 7
- TailwindCSS (custom cyber palette)
- Lucide React icons
- Recharts for telemetry graphing

## Getting Started

```bash
npm install
npm run dev
```

Then open the printed local URL (default: http://localhost:5173).

### Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
 ├─ components/    # Reusable UI primitives
 ├─ hooks/         # Theme and toast providers
 ├─ layout/        # Shell layout (sidebar + topbar)
 ├─ pages/         # Login + app feature pages
 ├─ services/      # Mock encryption service
 └─ utils/         # Dummy data feeds
```

## Notes

- Tailwind dark mode is enforced by default but can be toggled in the topbar.
- Dummy data and mock services make it safe to demo without back-end dependencies.
