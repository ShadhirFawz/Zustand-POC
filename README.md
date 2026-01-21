# Zustand POC Application

## Overview

This is a proof-of-concept application demonstrating Zustand as a global client state management solution for React applications.

## Why Zustand?

- **Simplicity**: Minimal boilerplate compared to Redux
- **Performance**: Built-in selector support prevents unnecessary re-renders
- **Flexibility**: Can be used without providers wrapping the entire app
- **TypeScript Support**: Excellent TypeScript support out of the box
- **Scalability**: Slice pattern allows for organized state management

## Key Differences from React Context

1. **Performance**: Zustand uses selectors to prevent unnecessary re-renders, while Context re-renders all consumers when value changes
2. **Boilerplate**: Zustand requires less boilerplate code
3. **Organization**: Zustand's slice pattern provides better code organization for complex state
4. **No Provider Hell**: No need to wrap components in multiple providers

## Store Structure

The store is split into two slices:

### 1. Store Slice (`storeSlice.ts`)

- Contains business/domain state
- `storeName`: string
- `updateStoreName`: function

### 2. UI Slice (`uiSlice.ts`)

- Contains UI/presentation state
- `theme`: 'light' | 'dark'
- `counter`: number
- `toggleTheme`, `incrementCounter`, etc.: functions

## Rendering Control

Components use selectors to subscribe only to specific state pieces:

```typescript
// Good - only re-renders when counter changes
const counter = useAppStore((state) => state.counter);

// Bad - re-renders when ANY state changes
const { counter } = useAppStore();
