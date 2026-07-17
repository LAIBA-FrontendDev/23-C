# 👜 23 Collections — Luxury Bags E-Commerce Website

An elite, high-end luxury women’s handbag e-commerce storefront designed with a premium aesthetic and modern user experience. Built using **Next.js 15 (App Router)**, **TypeScript**, and **Tailwind CSS**.

---

## ✨ Design & Theme Concept
* **Visual Identity:** Sophisticated minimalist interface featuring a rich **White + Maroon (`#5B0A18`)** palette with brilliant **Gold (`#D4AF37`)** accent features.
* **Typography:** Elegant serif headings paired with clean, geometric sans-serif body text for an authentic high-fashion runway look.
* **Interactions:** Ultra-smooth, deliberate hover scales, micro-animations, and fluid transitions reflecting premium luxury brand showrooms.

---

## 🚀 Core Features
* **Dynamic Best Sellers Showroom:** Automated curated product showcases queried direct from database models.
* **Advanced Architecture:** Fully operational clean folder routing following modern software patterns.
* **Component-Driven Layout:** Optimized responsive architecture rendering beautifully across Mobile, Tablet, and Desktop.
* **State Management:** Fluid global state interactions driven by modern hooks and fast store architectures.

---

## 🛠️ Tech Stack & Architecture

* **Framework:** Next.js (App Router)
* **Language:** TypeScript (Strictly Typed)
* **Styling:** Tailwind CSS
* **Database:** MongoDB (via Mongoose ODM)
* **Icons:** Lucide React

---

## 📂 Key Directory Outline

```text
23-collections/
├── app/                  # App Router: Core pages, layouts, and API endpoints
├── components/           # UI Components (split by home, products, layout, and ui)
├── models/               # Mongoose Database schemas (Product, Order)
├── lib/                  # Shared database configurations (mongodb.ts)
├── data/                 # Mock datasets for standalone local execution
├── hooks/                # Custom state tracking hooks
└── store/                # Global client data state management (Zustand)
```

---

## 💻 Getting Started Locally

Follow these steps to run the luxury digital showroom on your machine:

### 1. Clone the repository
```bash
git clone https://github.com
cd 23-collections
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
Create a `.env.local` file in the root directory and append your connection string:
```env
MONGODB_URI=your_mongodb_connection_string
```

### 4. Fire up the development environment
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) inside your browser to view the application.

---

## 📜 License
Distributed under the MIT License. See `LICENSE` for more information.
