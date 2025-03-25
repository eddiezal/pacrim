# Environment Variables Documentation

This document outlines the environment variables used in the PacRim Labs website project.

## Setup

- `.env.development`: Variables used in development environment
- `.env.production`: Variables used in production environment
- `.env.local`: (Optional) Local overrides, not committed to Git

## Using Environment Variables

In Vite, all environment variables must be prefixed with `VITE_` to be exposed to the client-side code.

Example usage in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL;