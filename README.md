<div align="center">

  # 💼 Employee Management System (EMS)

  <p align="center">
    <b>A modern, high-performance web platform for task assignment, tracking, and employee management.</b>
  </p>

  [![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
  [![Vite](https://img.shields.io/badge/Vite-5.2.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
  [![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

  <br />

  <a href="#-demo-credentials"><strong>Explore Demo Credentials »</strong></a>
  &nbsp;&middot;&nbsp;
  <a href="#-getting-started"><strong>Quick Start »</strong></a>
  &nbsp;&middot;&nbsp;
  <a href="#-key-features"><strong>Features »</strong></a>

</div>

---

## 📌 Table of Contents
- [✨ Overview](#-overview)
- [🔑 Demo Credentials](#-demo-credentials)
- [⚡ Key Features](#-key-features)
  - [👑 Admin Portal](#-admin-portal)
  - [👨‍💼 Employee Portal](#-employee-portal)
- [🛠️ Tech Stack](#️-tech-stack)
- [📁 Project Structure](#-project-structure)
- [🚀 Getting Started](#-getting-started)
- [🎨 UI Highlights](#-ui-highlights)
- [📄 License](#-license)
- [👤 Author](#-author)

---

## ✨ Overview

The **Employee Management System (EMS)** is a sleek, responsive full-featured React web application designed to bridge the workflow gap between managers and team members. 

It provides an intuitive dashboard for admins to **create, assign, and monitor tasks**, while giving employees a dedicated portal to **accept, manage, and complete assigned tasks** in real time. Powered by React's Context API and LocalStorage persistence, all interactions remain smooth, instant, and persistent across browser sessions.

---

## 🔑 Demo Credentials

Test out both user roles directly on the platform:

| Role | Email | Password | Access Rights |
| :--- | :--- | :--- | :--- |
| **Admin** 👑 | `admin@example.com` | `123` | Create & assign tasks, monitor all employee statistics |
| **Employee** 👨‍💼 | `e@e.com` | `123` | View assigned tasks, accept, complete, or fail tasks |
| **Employee** 👩‍💼 | `employee2@example.com` | `123` | Dedicated dashboard for Sneha |
| **Employee** 👨‍💼 | `employee3@example.com` | `123` | Dedicated dashboard for Ravi |

---

## ⚡ Key Features

### 👑 Admin Portal
- 📝 **Task Creator Engine**: Assign title, detailed description, due date, category (Design, Dev, QA, etc.), and target employee.
- 📊 **Real-time Task Metrics**: Live status counts for **Active**, **New**, **Completed**, and **Failed** tasks across the team.
- 👥 **Team Task Overview**: Comprehensive list showing task distribution per employee.

### 👨‍💼 Employee Portal
- 🎯 **Personalized Dashboard**: Dynamic header showing employee name and task counters.
- 🗂️ **Interactive Task Board**: Filterable cards for:
  - **New Tasks**: Accept incoming tasks.
  - **Active Tasks**: Mark tasks as completed or failed.
  - **Completed Tasks**: Track finished deliverables.
  - **Failed Tasks**: Review incomplete assignments.
- 💾 **Persistent Local Storage**: Data automatically saves and syncs locally.

---

## 🛠️ Tech Stack

| Domain | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend Framework** | ![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB) | UI Component Hierarchy & Reactive State |
| **Build System** | ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white) | Lightning-fast HMR & Production Bundling |
| **Styling** | ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white) | Utility-first Modern Dark UI Design |
| **State Management** | **React Context API** | Global Auth and Task Data Flow |
| **Data Persistence** | **Web LocalStorage API** | Pre-seeded mock DB & state persistence |

---

## 📁 Project Structure

```text
ems/
├── 📁 public/                 # Static public assets
├── 📁 src/
│   ├── 📁 assets/             # SVGs, icons, and branding media
│   ├── 📁 components/
│   │   ├── 📁 auth/           # Login form & authentication screens
│   │   ├── 📁 dashboard/      # Admin and Employee dashboard views
│   │   ├── 📁 other/          # Header, Task List Numbers, Task Creators
│   │   └── 📁 tasklist/       # Accept, Complete, Failed, and New task cards
│   ├── 📁 context/           # AuthContext & AuthProvider for state
│   ├── 📁 utils/             # Pre-populated local storage seed data
│   ├── 📄 App.jsx             # Main Application Routing logic
│   ├── 📄 main.jsx            # React root renderer
│   └── 📄 index.css           # Global Tailwind CSS styles
├── 📄 index.html              # HTML5 Entry point
├── 📄 package.json            # Project dependencies & scripts
├── 📄 tailwind.config.js      # Custom theme configuration
└── 📄 vite.config.js          # Vite build configuration
```

---

## 🚀 Getting Started

Follow these steps to run the application locally on your machine.

### Prerequisites
Make sure you have **Node.js** (v16 or higher) and **npm** installed:
```bash
node -v
npm -v
```

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/adarshydv08/EMS.git
   ```

2. **Navigate into the directory**:
   ```bash
   cd EMS
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser to view the application!

5. **Build for Production**:
   ```bash
   npm run build
   ```

---

## 🎨 UI Highlights

- 🌙 **Dark Mode Aesthetic**: Custom dark theme styled with Tailwind CSS for maximum visual comfort.
- 📱 **Fully Responsive Layout**: Fits seamlessly on mobile, tablet, and desktop viewports.
- ⚡ **Zero-Latency Interaction**: Instant feedback on task updates without page reloads.

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

## 👤 Author

Developed with ❤️ by **Adarsh**

- **GitHub**: [@adarshydv08](https://github.com/adarshydv08)
- **Repository**: [EMS Project](https://github.com/adarshydv08/EMS)

<div align="center">
  <sub>Built with React & Vite • Give a ⭐️ if you like this project!</sub>
</div>
