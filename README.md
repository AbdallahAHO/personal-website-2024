# Abdallah's Personal Website

This is my personal website and blog, built with Astro (based on [AstroNano](https://github.com/markhorn-dev/astro-nano) Theme), Tailwind CSS, and TypeScript. It's designed to be a lightweight, fast, and SEO-friendly platform to showcase my work, share my thoughts, and connect with others in the tech community.

## 🚀 Tech Stack

- [Astro](https://astro.build/): A modern static site generator
- [Tailwind CSS](https://tailwindcss.com/): For responsive and customizable styling
- [TypeScript](https://www.typescriptlang.org/): For type-safe JavaScript
- MDX: For writing content with Markdown and JSX

## 📋 Features

- ✅ Optimized for performance (100/100 Lighthouse score)
- ✅ Responsive design
- ✅ Dark mode support
- ✅ Blog with MDX support
- ✅ Project showcase
- ✅ Work experience timeline
- ✅ SEO-friendly (with auto-generated sitemap)
- ✅ RSS feed

## 🏗️ Project Structure

- `src/pages/`: Astro pages
- `src/components/`: Reusable Astro components
- `src/layouts/`: Page layouts
- `src/content/`: Markdown content for blog posts, projects, and work experience
- `public/`: Static assets

## 🚀 Getting Started

1. Clone this repository
2. Install dependencies: `npm install`
3. Copy `.env.example` to `.env` and add your Last.fm credentials
4. Start the development server: `npm run dev`

## 🔧 Environment Variables

The site needs a Last.fm API key to display your currently playing track.
Create a `.env` file using the provided example and fill in your credentials:

```bash
PUBLIC_LASTFM_API_KEY=your-api-key
PUBLIC_LASTFM_USERNAME=your-username
```

## 📝 Content Management

Content is managed through Markdown files in the `src/content/` directory:

- Blog posts: `src/content/blog/`
- Projects: `src/content/projects/`
- Work experience: `src/content/work/`

## 🌐 Deployment

This site is deployed on my Coolify Cloud. Deployment is triggered automatically on pushes to the main branch.

## 🤝 Connect with Me

- [LinkedIn](https://www.linkedin.com/in/AbdallahAHO/)
- [GitHub](https://github.com/AbdallahAHO)
- [Twitter](https://twitter.com/AbdallahAHO)

## 📄 License

This project is open source and available under the MIT License
