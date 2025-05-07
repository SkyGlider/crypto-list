# 💱 Crypto-List Demo React Native App (With Expo)

A modern React Native application built using **Expo**, **Zustand**, **React Navigation**, and **React Query** to demonstrate how to display crypto and fiat currencies with a search feature, authentication, offline simulation, and clean UI.

[untitled (1).webm](https://github.com/user-attachments/assets/a4896d0a-953b-4ade-bab9-a73d329425b1)


## 🧠 Problem Statement

The goal was to build a **reusable `CurrencyList`** capable of displaying both **Crypto** and **Fiat** currencies. The app should support:
- A way to insert and clear currency data from a simulated local database.
- A toggle to view either crypto, fiat, or purchasable currencies.
- A rich search feature with icon indicators, debounce, and navigation to search results. (Bonus)
- Passkey authentication on first launch. (Bonus)
- Consistent styling and performance optimization. (Bonus)
- Expandability with modular architecture.

## 🏗️ Architecture

### 🧱 Tech Stack
- **Expo + React Native** – mobile framework
- **TypeScript** – for type safety
- **Zustand** – global state management (I'm new to this please have mercy)
- **React Navigation** – screen and tab navigation (Bonus, Could also use expo's navigation which is simpler)
- **React Query** – caching, fetching, and async mutation handling (Bonus)
- **Jest + Testing Library** – unit testing framework
- **i18n-js** – internationalization (Bonus)
- **Expo Secure Store** – secure storage (Bonus)

## 🗂️ Folder Structure
   ```bash
   app/
   ├── components/
   │ └── # UI components
   ├── CCDesignSystem/ 
   │ └── # A deisgn system for reusable components across the entire app. (e.g. Buttons, Icon)
   ├── screens/
   │ ├── DemoScreen.tsx
   │ ├── SearchResultsScreen.tsx
   │ └── AuthScreen.tsx
   ├── api/ 
   │ └── # Simulated API handlers
   ├── hooks/
   │ ├── tests/ # tests
   │ └── # Custom React Query hooks (e.g. useQuery() and useStore())
   └── utils/
   │ ├── tests/ # tests
   │ └── # Utility functions like auth.ts, i18n.ts
   └── constants/
     └── # constants.ts
   ```

## Get started


1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npm run ios/android
   ```

## 🧪 Testing

### Run tests
```bash
npm test

