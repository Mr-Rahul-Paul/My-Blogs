# Paul's Blog - Personal Tech Blog

![Blog Screenshot](/public/template.png) <!-- Assuming there's a screenshot in public; adjust if needed -->

A modern, responsive personal blogging platform built with Next.js, TypeScript, and Tailwind CSS. Share your technical insights, coding tutorials, and creative content through an elegant, SEO-optimized interface.

## 📖 What It Is

Paul's Blog is a full-stack web application designed as a personal tech blog. It allows users to create, read, and manage blog posts with rich markdown support, syntax highlighting, and a clean, professional UI. Built for developers who want to share their knowledge while practicing modern web development.

## 🎯 Why I Built It

I created this blog to:

- Document my learning journey in software development
- Share practical insights from academic projects and side hustles
- Practice building full-stack applications with modern technologies
- Create a portfolio piece that demonstrates clean code and responsive design
- Have a personal space for technical writing and community engagement

It's more than just a blog—it's a learning tool and a showcase of my development skills.

## ✨ Features

- **Blog Creation**: Easy-to-use form for writing and posting new blogs with title and markdown content
- **Markdown Rendering**: Supports full markdown syntax with syntax highlighting, tables, and code blocks
- **Responsive Design**: Mobile-first layout that looks great on all devices
- **Dark Mode**: Automatic theme switching with user preference persistence
- **SEO Optimized**: Built-in meta tags and fast loading for better search visibility
- **Performance Features**: Image optimization, code splitting, and Next.js best practices
- **Database Integration**: Stores blogs in MongoDB for persistent data
- **API Routes**: Secure backend endpoints for CRUD operations on blogs

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: MongoDB
- **Markdown**: React Markdown with remark-gfm and rehype-highlight
- **Icons**: Custom SVGs and React Icons
- **Deployment**: Vercel (recommended)
- **Other**: ESLint for code quality, PostCSS for CSS processing

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- MongoDB instance (local or cloud like MongoDB Atlas)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/my-blogs.git
   cd my-blogs
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add your MongoDB connection string:

   ```
   MONGODB_URI=your_mongodb_connection_string
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Deployment

Deploy easily to Vercel:

1. Push your repo to GitHub
2. Create a new project on Vercel and import your repo
3. Add your MONGODB_URI as an environment variable
4. Deploy!

## 📸 Screenshots

![Home Page](/public/template.png)
![Blog Post](/public/template2.png) <!-- Add actual screenshots -->
![Blog Post](/public/template3.png) <!-- Add actual screenshots -->

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

- Paul
- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com

Happy blogging! 🚀
