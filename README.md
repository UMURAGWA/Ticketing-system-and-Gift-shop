# INKOMANE – Customer Ticketing System with Gift Shop (Frontend Only)

![INKOMANE Banner](public/images/banner.jpg)

## 💾 Project Overview

bf
**INKOMANE** is a fully functional frontend application built with **Next.js** that allows users to book event tickets and shop for gifts online. It simulates authentication for multiple roles (Admin, Staff, Customer), provides payment simulation, and features a responsive and user-friendly UI.

> ⚠️ This project is **frontend only** — no backend or database is used.

---

## 🚀 Features

### ✅ User Roles & Authentication (Frontend Simulation)

- **Admin**: Dashboard UI with analytics and management.
- **Staff**: Ticket/order management interface.
- **Customer**: Book events and order gifts.

### 🎫 Ticketing & Event Booking

- Browse events with descriptions and images.
- Book tickets using dynamic forms.
- Quantity input and total price calculation.
- Simulated booking confirmation page.

### 🛙️ Gift Shop (E-commerce)

- View and filter merchandise by category.
- Add to cart with quantity control.
- Cart page with editable items.
- Checkout simulation and summary page.

### 💳 Payment Simulation

- Simulated payment form (name, email, card).
- Simulated order confirmation.
- Logic handled via `localStorage`.

### 📊 Admin Dashboard (UI)

- Charts and analytics built using **Chart.js**.
- Simulated order and ticket statistics.
- Navigation based on user roles.

## 🛠️ Tech Stack

## Technology Purpose

Next.js Framework  
 React UI Components  
 Tailwind CSS Styling & Responsiveness  
 Chart.js Dashboard Analytics UI  
 Lucide Icons Icons  
 localStorage Simulated session & order data

---

## 📦 Folder Structure

```
src/
  ├── app/
  │   ├── admin/
      ├── events/          # Event pages and booking
  │   ├── gift/            # Gift shop and cart
  │   ├── admin/           # Admin dashboard
  │   ├── staff/           # Staff management
  │   ├── components/      # Reusable components (Header, Footer)
  │   ├── data/            # Static data (events, gifts)
  │   └── checkout         # Shared checkout page
  │   ├──signin            # sign in page
  │   ├──confirmation      # confirmation message
```

---

## 🧰 Running the Project

### 1. Clone the repository

```bash
git clone https://github.com/UMURAGWA/Ticketing-system-and-Gift-shop.git
cd ticketing-system
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
pnpm dev
```

Visit `http://localhost:3000` in your browser.

---

## 🔑 Simulated Logins

Use the following roles when signing in:

| Role     | Username | Password |
| -------- | -------- | -------- |
| Admin    | admin    | admin123 |
| Staff    | staff    | staff123 |
| Customer | customer | user123  |

Credentials are simulated in frontend only.

---

## 📸 Screenshots

> Replace these with actual screenshots:

- ![Home Page](public/images/Screenshot-home.jpg)
- ![Event Booking](public/images/Screenshot-event.jpg)
- ![Sign in](public/images/Screenshot-signin.jpg)

---

## 📘 License

This project is for educational/demo purposes only. All content and images are used with placeholder or demo intent.

---

## 📌 Author & Acknowledgements

Created by Hertier ISHIMWE. Part of a frontend internship challenge for **INKOMANE**.
