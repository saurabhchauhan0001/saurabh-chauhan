# Saurabh Portfolio

A personal portfolio website built with React, TypeScript, Vite, and Tailwind CSS.

## Overview

This project is a single-page portfolio for showcasing:
- Intro/About section
- Skills grid
- Project cards
- Contact form UI
- Social/profile links
- Interactive terminal-style command box

The terminal box in the hero section supports these commands:
- `github`
- `repos`
- `projects`
- `contact`
- `clear`

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS v4

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

### 4. Preview production build

```bash
npm run preview
```

## Project Structure

```text
saurabh-portfolio/
  public/
    favicon.svg
    icons.svg
    logo-sc.svg
  src/
    assets/
    App.tsx
    main.tsx
    style.css
  index.html
  package.json
  tsconfig.json
  vite.config.ts
```

## Customize Content

Most editable content is in `src/App.tsx`:
- `skills` array: skills and logos
- `projects` array: project cards and descriptions
- `socialLinks` array: footer/social links
- About text and contact section text

## Deployment

You can deploy this app to Vercel, Netlify, or any static hosting platform after running `npm run build`.

## Author

Saurabh Chauhan
- GitHub: https://github.com/saurabhchauhan0001
- Email: saurabhchauhan1503@gmail.com
