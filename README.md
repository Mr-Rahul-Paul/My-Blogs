# Paul's Blog - Personal Tech Blog

![Blog Screenshot](/public/template.png)

A modern, responsive personal blogging platform built with Next.js, TypeScript, and Tailwind CSS. Share your technical insights, coding tutorials, and creative content through an elegant, SEO-optimized interface with powerful markdown support.

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

### Core Blogging Features

- **Blog Creation**: Easy-to-use form for writing and posting new blogs with title and markdown content
- **Markdown Rendering**: Supports full markdown syntax with syntax highlighting, tables, and code blocks
- **Blog Management**: View, edit, and organize your blog posts efficiently
- **Rich Content Support**: Images, code snippets, tables, lists, and more

### User Experience

- **Responsive Design**: Mobile-first layout that looks great on all devices
- **Dark Mode**: Automatic theme switching with user preference persistence
- **Fast Performance**: Optimized loading and smooth interactions
- **SEO Optimized**: Built-in meta tags and fast loading for better search visibility

### Technical Features

- **Database Integration**: Stores blogs in MongoDB with connection caching for performance
- **API Routes**: Secure backend endpoints with authentication for CRUD operations
- **Markdown Posting Scripts**: Automated tools for posting markdown files to your blog
- **API Security**: Protected write operations with auth headers and environment variables
- **Image Optimization**: Built-in image handling and optimization
- **Code Splitting**: Efficient loading with Next.js best practices

## 🛠️ Tech Stack

### Frontend

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with modern design patterns

### Backend & Database

- **Database**: MongoDB with connection caching
- **API**: Next.js API routes with TypeScript and authentication
- **Markdown Processing**: React Markdown with remark-gfm and rehype-highlight
- **Security**: Protected write API with auth headers

### Development Tools

- **Code Quality**: ESLint configuration
- **CSS Processing**: PostCSS with Tailwind
- **Build Tools**: Next.js build system
- **Deployment**: Vercel (recommended)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- MongoDB instance (local or cloud like MongoDB Atlas)
- npm or yarn

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Mr-Rahul-Paul/my-blogs.git
   cd my-blogs
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env.local` file in the root directory and add your MongoDB connection string and API secret:

   ```env
   MONGODB_URI=your_mongodb_connection_string
   INTERNAL_API_SECRET=your_secure_api_secret
   ```

4. **Run the development server:**

   ```bash
   npm run dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000) in your browser**

### Using Markdown Posting Scripts

The project includes automated scripts for posting markdown files to your blog:

#### Quick Post Script (`post-markdown.js`)

```bash
node post-markdown.js
```

This script reads from `src/components/MDfiles/1.md` and posts it to your blog.

#### Flexible Post Script (`post-markdown-flexible.js`)

```bash
node post-markdown-flexible.js
```

This script allows you to configure the post details before posting.

### Deployment

Deploy easily to Vercel:

1. Push your repo to GitHub
2. Create a new project on Vercel and import your repo
3. Add your environment variables:
   - `MONGODB_URI` - Your MongoDB connection string
   - `INTERNAL_API_SECRET` - Your secure API secret for write operations
4. Deploy!

## 📁 Project Structure

```
my-blogs/
├── src/
│   ├── app/                 # Next.js app router pages
│   │   ├── Blogs/          # Blog listing and individual posts
│   │   ├── write-blog/     # Blog creation form
│   │   └── api/            # API routes for blog operations
│   ├── components/          # React components
│   │   ├── home/           # Homepage components
│   │   ├── layout/         # Layout and navigation components
│   │   └── ui/             # Reusable UI components
│   └── services/           # Database and API services
├── public/                  # Static assets and images
├── post-markdown.js         # Quick markdown posting script
├── post-markdown-flexible.js # Configurable markdown posting script
└── src/components/MDfiles/  # Markdown files for posting
```

## 📸 Screenshots

![Home Page](/public/template.png)
![Blog Post](/public/template2.png)
![Blog Creation](/public/template3.png)

## 🔧 Development Workflow

### Adding New Blog Posts

1. **Via Web Interface:**

   - Navigate to `/write-blog`
   - Fill in title and markdown content
   - Submit to create the post

2. **Via Markdown Files:**
   - Create or edit markdown files in `src/components/MDfiles/`
   - Use the posting scripts to automatically publish them

### Customizing the Blog

- **Styling**: Modify `tailwind.config.ts` and `src/app/globals.css`
- **Components**: Edit components in `src/components/`
- **Layout**: Modify `src/app/layout.tsx` for global changes
- **API**: Update routes in `src/app/api/`

## 📚 Learning Journey

This project has been an incredible learning experience covering:

- **API Security**: Implementing authentication and protecting write operations
- **Full-Stack Development**: Next.js App Router, TypeScript, and MongoDB integration
- **Modern React Patterns**: Component composition, state management, and responsive design
- **Database Optimization**: Connection caching and performance improvements
- **Markdown Processing**: Rich content support with syntax highlighting
- **Automation**: Node.js scripts for content management

Check out the detailed learnings in [`learnings/learning.md`](./learnings/learning.md) for a comprehensive breakdown of the development journey and key insights gained.

## 🤝 Contributing

While this is a personal project, suggestions and feedback are welcome! Feel free to:

- Open issues for bugs or feature requests
- Fork the repository for your own use
- Share improvements or ideas

## 📄 License

This project is licensed under the MIT License.

## 👤 Author

- **Rahul Paul**
- GitHub: [@Mr-Rahul-Paul](https://github.com/Mr-Rahul-Paul)
- Email: rpaul29120@gmail.com

## 🚀 What's Next

Future improvements planned:

- [ ] User authentication system with JWT tokens
- [ ] Comment system for blog posts
- [ ] Advanced search and filtering
- [ ] Blog post categories and tags
- [ ] Analytics dashboard
- [ ] RSS feed support
- [ ] Rate limiting for API endpoints
- [ ] Image upload and optimization

---

**Happy blogging! 🚀**

_Last updated: December 2024_
