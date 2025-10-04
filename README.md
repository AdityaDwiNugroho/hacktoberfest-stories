# Open Source Stories

> Share your open source contribution experience and inspire others!

[![Hacktoberfest](https://img.shields.io/badge/Hacktoberfest-2025-blueviolet)](https://hacktoberfest.com)
[![Contributors](https://img.shields.io/github/contributors/AdityaDwiNugroho/hacktoberfest-stories)](https://github.com/AdityaDwiNugroho/hacktoberfest-stories/graphs/contributors)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/AdityaDwiNugroho/hacktoberfest-stories/pulls)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## What is This?

A community website where people share their **real experiences** contributing to open source. Add your story and it appears live on the website with your GitHub profile picture!

**Live Website:** https://adityadwinugroho.github.io/hacktoberfest-stories/

## How to Contribute

### Step 1: Add Your Story

Edit the `data/stories.json` file and add your entry:

```json
{
  "id": 3,
  "username": "your-github-username",
  "name": "Your Name",
  "githubUrl": "https://github.com/your-username",
  "date": "October 2025",
  "title": "Your Story Title",
  "story": "Your experience here. Share what motivated you, what you learned, challenges you faced, or advice for beginners. Minimum 50 words, maximum 1000 words.",
  "tags": ["beginner", "hacktoberfest", "first-contribution"]
}
```

**Easy way:** Click the pencil icon on `data/stories.json` → Edit → "Propose changes" → Done!

### Step 2: Submit Pull Request

1. Fork this repository
2. Edit `data/stories.json`
3. Add your story (use the next available ID number)
4. Commit: `git commit -m "Add: My open source story"`
5. Push and create a Pull Request

**OR use GitHub's web interface:**

1. Click on `data/stories.json`
2. Click the pencil icon to edit
3. Add your story
4. Click "Propose changes"
5. Click "Create pull request"

## Story Guidelines

### What to Include

- Your experience (first contribution, challenges overcome, lessons learned)
- What motivated you to contribute
- Tips or advice for beginners
- Your journey in open source

### Word Count

- **Minimum:** 50 words
- **Maximum:** 1000 words
- Be genuine and helpful!

### Tags

Choose 2-5 tags that describe your story:
- `beginner`, `intermediate`, `advanced`
- `first-contribution`, `hacktoberfest`
- `learning`, `challenge`, `success`
- Language/tech tags: `javascript`, `python`, `documentation`, etc.

## Requirements for Hacktoberfest

This project is **Hacktoberfest compliant**:

- ✅ Has `hacktoberfest` topic
- ✅ Auto-labels PRs as `hacktoberfest-accepted`
- ✅ Welcomes quality contributions
- ✅ Has clear contribution guidelines
- ✅ Actively maintained

### What Counts as a Quality Contribution?

- Adding a genuine, original story (50+ words)
- Fixing typos or improving documentation
- Improving the website design/functionality
- Helping others in issues/discussions

### What Doesn't Count?

- Duplicate stories
- Plagiarized content
- Stories under 50 words
- Spam or irrelevant content

## Local Development

Want to see the website locally?

1. Clone the repository
2. Open `public/index.html` in your browser
3. Or use a local server:
   ```bash
   # Python
   python -m http.server 8000
   
   # Node.js
   npx http-server public
   ```
4. Visit `http://localhost:8000`

## Contributors

All contributors are automatically displayed on the website!

<a href="https://github.com/AdityaDwiNugroho/hacktoberfest-stories/graphs/contributors">
  <img src="https://readme-contribs.as93.net/contributors/AdityaDwiNugroho/hacktoberfest-stories?limit=100&perRow=10" />
</a>

## Questions?

- Open an [issue](https://github.com/AdityaDwiNugroho/hacktoberfest-stories/issues)
- Read [CONTRIBUTING.md](CONTRIBUTING.md)
- Check [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md)

## License

MIT License - Feel free to fork and adapt!

---

**Made with ❤️ for the open-source community**
