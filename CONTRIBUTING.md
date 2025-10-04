# Contributing to Open Source Stories

Thank you for wanting to share your story! This guide will help you contribute.

## What We're Looking For

**Good contributions:**
- Genuine personal experiences (50-1000 words)
- Helpful advice for beginners
- Overcoming challenges stories
- First contribution experiences
- Learning journey stories

**Not accepted:**
- Plagiarized or copied content
- Stories under 50 words
- Spam or promotional content
- Duplicate stories
- Offensive or inappropriate content

## How to Add Your Story

### Option 1: GitHub Web Interface (Easiest!)

1. Go to [`data/stories.json`](../data/stories.json)
2. Click the pencil icon (Edit this file)
3. Find the last story entry
4. Add a comma after the closing `}` of the last story
5. Copy this template and paste it:

```json
{
  "id": X,
  "username": "your-github-username",
  "name": "Your Full Name",
  "githubUrl": "https://github.com/your-username",
  "date": "Month Year",
  "title": "Your Story Title (e.g., My First Open Source Contribution)",
  "story": "Your full story here. Be genuine and helpful. Share what motivated you, what challenges you faced, what you learned, and any advice for others. Minimum 50 words, maximum 500 words.",
  "tags": ["tag1", "tag2", "tag3"]
}
```

6. Replace `X` with the next number (if last story is ID 5, use ID 6)
7. Fill in your information
8. Scroll down and click "Propose changes"
9. Click "Create pull request"
10. Wait for review!

### Option 2: Git Command Line

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR-USERNAME/Workshop.git
   cd Workshop
   ```

3. Create a new branch:
   ```bash
   git checkout -b add-my-story
   ```

4. Edit `data/stories.json` and add your story

5. Commit your changes:
   ```bash
   git add data/stories.json
   git commit -m "Add: [Your Name] open source story"
   ```

6. Push to your fork:
   ```bash
   git push origin add-my-story
   ```

7. Open a Pull Request on GitHub

## Story Format

### Required Fields

```json
{
  "id": number,              // Next sequential number
  "username": "string",      // Your GitHub username (without @)
  "name": "string",          // Your display name
  "githubUrl": "string",     // Your GitHub profile URL
  "date": "string",          // Month Year (e.g., "October 2025")
  "title": "string",         // Story title (3-10 words)
  "story": "string",         // Your story (50-1000 words)
  "tags": ["array"]          // 2-5 relevant tags
}
```

### Story Content Guidelines

**Length:**
- Minimum: 50 words
- Maximum: 1000 words
- Sweet spot: 150-400 words
- Longer stories get a "Read More" button automatically

**What to write:**
- Your background (student, developer, career changer, etc.)
- What motivated you to contribute
- Your first contribution experience
- Challenges you faced
- How you overcame them
- What you learned
- Advice for beginners
- Resources that helped you

**Writing tips:**
- Be authentic and genuine
- Write in first person ("I felt nervous...")
- Include specific details
- Focus on lessons learned
- Be encouraging to others
- Proofread for typos

### Tag Guidelines

Choose 2-5 tags. Good tags:

**Experience Level:**
- `beginner` - Your first contributions
- `intermediate` - Some experience
- `advanced` - Experienced contributor

**Topic:**
- `first-contribution` - Your very first PR
- `hacktoberfest` - Hacktoberfest participation
- `learning` - Learning journey
- `challenge` - Overcoming obstacles
- `success` - Achievement stories
- `career-change` - Transitioning careers

**Technology (optional):**
- `javascript`, `python`, `java`, `go`, etc.
- `documentation` - Doc contributions
- `design` - UI/UX contributions
- `translation` - Translation work

## Common Mistakes

### JSON Format Errors

**Wrong:** Missing comma between entries
```json
{
  "id": 1,
  "name": "Alice"
}
{                    ← Error! Missing comma above
  "id": 2,
  "name": "Bob"
}
```

**Correct:**
```json
{
  "id": 1,
  "name": "Alice"
},                   ← Comma here!
{
  "id": 2,
  "name": "Bob"
}
```

**Wrong:** Extra comma after last entry
```json
{
  "id": 2,
  "name": "Bob"
},                   ← Remove this comma!
  ]
}
```

### Content Issues

- Story too short (under 50 words) - Add more details!
- Using someone else's story - Write your own!
- Promotional content - Focus on your experience, not products
- Wrong ID number - Use the next sequential number

## Review Process

1. **Automated checks:** JSON format validation
2. **Manual review:** Story quality, originality, word count
3. **Feedback:** We may ask for clarification or edits
4. **Merge:** Once approved, your story appears on the website!
5. **Auto-deploy:** Website updates automatically

## After Your PR is Merged

- Your story appears on the website within a few minutes
- Your GitHub avatar shows up automatically
- You're added to the contributors list
- Share the website with others!

## Need Help?

- **JSON format issues?** Use a JSON validator: https://jsonlint.com/
- **Not sure what to write?** Read existing stories for inspiration
- **Technical problems?** Open an issue
- **Questions?** Ask in your PR or open a discussion

## Code of Conduct

Be respectful, inclusive, and kind. We're all here to learn and help each other.

## Recognition

All contributors are featured:
- On the website with your story and avatar
- In the GitHub contributors section
- In the project README

Thank you for sharing your story and inspiring others!
