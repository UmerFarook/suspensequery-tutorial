# React Query – Suspense & Error Boundaries

This project demonstrates how to use **React Query (TanStack Query)** with **Suspense** and **Error Boundaries** for handling async data fetching in a clean and declarative way.

## Key Concepts Used

- **Suspense Queries** (`useSuspenseQuery`)
    - Handles loading states automatically using React Suspense.
    - No manual `isLoading` checks.

- **Error Boundaries**
    - Catches runtime and data-fetching errors.
    - Prevents the entire app from crashing.

## How It Works

- Data fetching is done using `useSuspenseQuery`
- Components suspend while data is loading
- Errors are caught by `ErrorBoundry`
- `QueryClientProvider` is configured at the app root

## Why Suspense + Error Boundary?

- Cleaner components
- Centralized error handling
- Declarative loading states
- Better separation of concerns

## Requirements

- React 18+
- @tanstack/react-query v5+

---

Built to explore modern React async patterns ✨

