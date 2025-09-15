# My Blog Development Learnings

## 🔐 API Security & Protection

### How I Protected the Write API

**What was wrong:**

- Initially, the write API (`/api/write`) was completely unprotected
-
**How I fixed it:**

```typescript
// Authentication: Expect Authorization: Bearer <INTERNAL_API_SECRET>
const authHeader = request.headers.get("auth-code");
if (!authHeader) {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

if (authHeader !== process.env.INTERNAL_API_SECRET) {
  return NextResponse.json({ error: "Forbidden" }, { status: 403 });
}
```

**Key Learnings:**

- Always protect write operations with authentication

### Markdown Posting Scripts

**Script Features:**

- `post-markdown.js`: Quick posting from predefined file
- `post-markdown-flexible.js`: Configurable posting with custom metadata
- Error handling and success feedback
- File path resolution for different environments

