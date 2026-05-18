# GIS Surabaya Health - Frontend

A premium, interactive Geographic Information System (GIS) application to analyze and visualize the distribution, density, and scaling ratios of healthcare facilities (Fasilitas Kesehatan / Faskes) across all subdistricts (Kecamatan) in the city of Surabaya.

Built using **React + TypeScript + Vite + TailwindCSS + Leaflet**, featuring custom SVG-based analytics, complex data dashboarding, and a high-end **Glassmorphism Theme** that is fully optimized for smooth animations and visually stunning user experience.

---

## 🚀 Key Features

### 1. Interactive Geographic Map (`MapPage`)
- **Map Visualization**: Renders all subdistrict boundaries using Leaflet GeoJSON polygons.
- **Dynamic Popup & Tooltip**: Hovering over subdistricts reveals tooltips, while clicking opens a gorgeous styled popup directly centered over the subdistrict (complete with a safety-spaced close button that prevents border overlaps).
- **Scale and Highlighting**: Highlights subdistricts interactively based on ratio scale classification (from critical red to elite purple).
- **Subdistrict Analytics**: Allows navigating instantly to detail analytics with the **"Lihat Detail Analytics"** feature.

### 2. Proportional Data Analytics (`StatisticsPage`)
- **SVG Charts**: Fully animated entering transitions on SVG charts.
- **Proportional Segment Donut Chart**: A completely customized SVG donut chart utilizing a **fixed visual gap with proportional length distribution**, resolving overlap and clipping bugs for small percentages (such as RSK or Puskesmas elements in highly dominated subdistricts like Mulyorejo).
- **Animated Bar & Line Charts**: Historical ratio trendlines and facility distributions that dynamically remount and play smooth entering animations on subdistrict transitions or page reloads.

### 3. Glassmorphic Data Dashboard (`DashboardPage`)
- **Premium Design System**: Fully customized cards, tables, and buttons following the Glassmorphism styling guidelines (vibrant gradients, smooth border highlights, backdrops, and Poppins font harmony).
- **Advanced Sorting**: Allows multi-dimensional data sorting (Fasilitas, Penduduk, Rasio, or Status) with independent order directions (`↑ Tertinggi` / `↓ Terendah`) that trigger instant, reactive, auto-refreshed updates.

### 4. Interactive Sidebar (`Layout`)
- **Collapsible sidebar**: Automatically collapses when clicking outside or navigating.
- **Animated Hamburger Icon**: Seamlessly transforms from a three-line menu icon to a close cross (`X`) with custom rotation and crossfade micro-animations.
- **Visual Dividers**: Clearly separates the city-wide ("Kota Surabaya") statistical analysis from subdistricts using visual dividers and badges.

---

## 🛠️ Tech Stack & Dependencies
- **Core**: React 18, TypeScript, Vite
- **Styling**: TailwindCSS (v4), Poppins Google Fonts, Lucide Icons
- **Mapping**: React-Leaflet, Leaflet
- **HTTP client**: Fetch API integrated with custom services

---

## 🚀 Getting Started

### Prerequisites
Make sure you have Node.js (version 18 or above) installed on your system.

### Installation
1. Navigate to the frontend directory:
   ```bash
   cd frontend_gis_surabaya_health
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally
To launch the frontend dev server:
```bash
npm run dev
```
The application will run on your local server (usually `http://localhost:5173`).

---

## 📖 Related Projects
- **Backend API**: [.NET Minimal API Backend](../backend_gis_surabaya_health)
