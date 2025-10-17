# Next.js Multilingual Template

A universal Next.js template with support for Polish (PL) and English (EN) languages, pre-configured with SEO best practices and essential tools to kickstart web projects.

## Features
- **Multilingual Support**: Polish (PL) and English (EN) with `next-intl` for seamless internationalization.
- **SEO Optimized**: Configured for search engine optimization out of the box.
- **Next.js with Turbopack**: Uses Next.js 15.5.5 with Turbopack for faster development and builds.
- **Styling**: SCSS support via `sass` for flexible and modular styling.
- **Linting**: ESLint with Next.js configuration for code quality.
- **TypeScript**: Fully typed with TypeScript for better developer experience.
- **Swiper**: Integrated for creating responsive sliders and carousels.

## Prerequisites
- Node.js (version 20.x or higher recommended)
- npm (version 10.x or higher)

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo.git
   ```
2. Navigate to the project directory:
   ```bash
   cd your-repo
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Scripts
- **Start development server**:
  ```bash
  npm run dev
  ```
  Runs the app in development mode with Turbopack. Open `http://localhost:3000` to view it in the browser.
- **Build for production**:
  ```bash
  npm run build
  ```
  Creates an optimized production build with Turbopack.
- **Start production server**:
  ```bash
  npm run start
  ```
  Runs the built app in production mode.
- **Run linter**:
  ```bash
  npm run lint
  ```
  Checks code for linting errors using ESLint.

## Project Structure
- `/app`: Contains Next.js app router pages and layouts.
- `/public`: Static assets like images and fonts.
- `/styles`: SCSS files for styling.
- `/locales`: Translation files for Polish (PL) and English (EN).
- `/components`: Reusable React components.
- `/lib`: Utility functions and helpers.

## Usage
1. **Language Switching**: Use `next-intl` to manage translations. Add or modify translation files in `/locales` for PL and EN.
2. **SEO Configuration**: Update metadata in `app/layout.tsx` or page-specific metadata for SEO optimization.
3. **Styling**: Write SCSS in `/styles` and import into components or layouts.
4. **Adding Sliders**: Use the `swiper` library to create carousels. Refer to [Swiper documentation](https://swiperjs.com/) for details.

## Dependencies
- **Core**:
  - `next`: 15.5.5 (App Router with Turbopack)
  - `next-intl`: ^4.3.12 (Internationalization)
  - `react`: 19.1.0
  - `react-dom`: 19.1.0
  - `swiper`: ^12.0.2 (Responsive sliders)
- **Dev Dependencies**:
  - `eslint`: ^9 (Linting)
  - `eslint-config-next`: 15.5.5 (Next.js ESLint config)
  - `sass`: ^1.93.2 (SCSS support)
  - `typescript`: ^5 (Type safety)
  - `@types/node`, `@types/react`, `@types/react-dom`: Type definitions

## Contributing
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add your feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

## License
MIT License. See [LICENSE](LICENSE) for more information.