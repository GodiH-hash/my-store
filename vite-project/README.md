# 🛍️ React Online Store – Final Project

## 📘 Overview
This project is my **final React.js project** for the front-end course.  
The goal is to design and build a simple, responsive **online store** using **React**, **TypeScript**, and **Tailwind CSS**,  
with data fetched from the [Fake Store API](https://fakestoreapi.com/).

---

## 🚀 Features
- 🧩 **React + TypeScript** – structured, type-safe, and component-based code  
- 🎨 **Tailwind CSS** – modern, responsive, and clean styling  
- 🌐 **FakeStore API** – real product data for testing  
- 🛒 **Cart System** – add, remove, and clear cart items  
- 📦 **Custom Hook** – `useFetch` for reusable data fetching  
- 💡 **Context API** – shared cart state across all components  
- 🪟 **Modal Popup** – product detail view with image and description  
- 📱 **Responsive Design** – adjusts for mobile, tablet, and desktop screens  

---

## 🧠 Project Structure
```
vite-project/
│
├── src/
│   ├── App.tsx              # Main app layout and UI
│   ├── hooks/
│   │   └── useFetch.ts      # Custom hook for API calls
│   ├── contexts/
│   │   └── CartContext.tsx  # Global cart state management
│   ├── index.css            # Tailwind base styles
│   └── main.tsx             # Entry point
│
├── package.json             # Project dependencies
├── tailwind.config.js       # Tailwind configuration
└── README.md                # Project documentation
```

---

## ⚙️ Installation & Setup
1. **Clone the repository**
   ```bash
   git clone https://github.com/GodiH-hash/my-store.git
   cd my-store
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the project**
   ```bash
   npm run dev
   ```

4. Open your browser at:  
   👉 [http://localhost:5173](http://localhost:5173)

---

## 🧩 Technologies Used
| Technology | Purpose |
|-------------|----------|
| **React** | UI building |
| **TypeScript** | Type safety |
| **Tailwind CSS** | Styling |
| **Axios** | API requests |
| **Context API** | Global state management |
| **FakeStore API** | Product data source |

---

## 💬 How It Works
1. The app fetches product data from **FakeStore API** using the `useFetch` hook.  
2. Products are displayed in a **responsive grid layout**.  
3. Each product card has options to:
   - View details in a popup modal  
   - Add the product to the cart  
4. The cart shows added items, and you can remove or clear them.

---

## 🧠 Learning Goals
- Practice **React functional components** and **hooks**  
- Learn how to manage **state** globally with **Context API**  
- Use **responsive design** with Tailwind CSS  
- Understand how to **fetch and handle API data**  
- Build and organize a clean **front-end architecture**

---

## 💬 Credits
- Instructor: **Alireza Sadeghi**  
- Developed by: **Hoda Goodarzi**  
- GitHub: [GodiH-hash](https://github.com/GodiH-hash)  
- Course: **React.js Front-End Training – Final Project**

---

## 🏁 Build Command
Before deployment, run:
```bash
npm run build
```
This generates optimized production files in the `/dist` folder.

---

## 📸 Preview
(Add a screenshot of your app here if you like)  
```markdown
![App Preview](./screenshot.png)
```

---

## 🪪 License
This project is for **educational purposes only**.
