# Setup Guide

## What You Have Now

A fully functional **Open Source Stories** website where people share their contribution experiences!

## Project Structure

```
Workshop/
├── data/
│   └── stories.json          ← People add their stories here
├── public/
│   ├── index.html           ← Main website
│   ├── styles.css           ← Styling
│   └── app.js               ← Loads and displays stories
├── .github/
│   ├── workflows/
│   │   ├── hacktoberfest.yml  ← Auto-labels PRs
│   │   └── pages.yml         ← Auto-deploys website
│   ├── ISSUE_TEMPLATE/       ← Issue templates
│   └── pull_request_template.md
├── CONTRIBUTING.md           ← How to contribute
├── CODE_OF_CONDUCT.md        ← Community rules
├── LICENSE                   ← MIT License
└── README.md                 ← Main documentation
```

## How It Works

1. Someone edits `data/stories.json` and adds their story
2. They create a Pull Request
3. GitHub Actions auto-labels it `hacktoberfest-accepted`
4. You review and merge
5. Website auto-deploys to GitHub Pages
6. Their story appears live with their GitHub avatar!

## Setup Steps

### 1. Push to GitHub

```bash
git add .
git commit -m "Transform into Open Source Stories website"
git push origin main
```

### 2. Enable GitHub Pages

1. Go to your repo: https://github.com/AdityaDwiNugroho/Workshop
2. Click **Settings**
3. Click **Pages** (left sidebar)
4. Under "Source", select **GitHub Actions**
5. Save

The website will deploy automatically!

### 3. Add Hacktoberfest Topic

1. Go to your repo homepage
2. Click the gear icon next to "About"
3. Add topic: `hacktoberfest`
4. Save

### 4. Update Repository Description

Set description to:
> Share your open source story and inspire others! A Hacktoberfest-friendly project where contributors share their experiences.

### 5. Add Website URL to README

After deployment (takes 2-3 minutes), your site will be at:
```
https://adityadwinugroho.github.io/Workshop/
```

Update the README with this URL!

## Hacktoberfest Compliance

✅ **Required elements:**
- [x] `hacktoberfest` topic
- [x] Public repository
- [x] Clear CONTRIBUTING.md
- [x] CODE_OF_CONDUCT.md
- [x] Issue templates
- [x] PR template
- [x] Auto-labeling workflow

✅ **Your repo is Hacktoberfest-ready!**

## Managing Contributions

### Reviewing PRs

**Check for:**
- JSON format is valid
- Story is 50-500 words
- ID number is correct (sequential)
- Content is original
- Tags are appropriate
- No spam or promotional content

### Merging

Once you merge, the website updates automatically within 1-2 minutes!

### Rejecting

If a PR is spam or doesn't meet guidelines:
1. Label it `invalid` or `spam`
2. Explain why it doesn't meet requirements
3. Close the PR

## Suggested Repository Names

When you're ready to rename:

**Good names:**
- `open-source-stories`
- `contribution-tales`
- `dev-journey`
- `first-pr-stories`
- `hacktoberfest-experiences`
- `contributor-stories`

**To rename:**
1. Go to Settings
2. Rename repository
3. Update all URLs in docs

## Optional Enhancements

### Add More Issue Templates

Create templates for:
- Feature requests
- Bug reports
- Story suggestions

### Add Labels

Helpful labels:
- `good first issue`
- `hacktoberfest`
- `invalid`
- `needs-review`
- `approved`

### Social Preview

Add an image:
1. Settings → General
2. Social preview → Upload image
3. Shows when shared on social media

## Testing Locally

```bash
# Open in browser
open public/index.html

# Or use Python server
cd public
python -m http.server 8000

# Visit http://localhost:8000
```

## FAQs

**Q: Will my 29 previous commits still count?**
A: Yes! All contributor history is preserved. The contributor badge shows everyone who has ever contributed.

**Q: How many words minimum?**
A: 50 words minimum, 500 words maximum. But quality over quantity!

**Q: Can people contribute without coding?**
A: Yes! They just edit a JSON file through GitHub's web interface. No coding required.

**Q: Is this Hacktoberfest compliant?**
A: Absolutely! It has all required elements and auto-labels PRs.

## Next Steps

1. Push everything to GitHub
2. Enable GitHub Pages
3. Add `hacktoberfest` topic
4. Share the repo!
5. Wait for contributions to roll in

## Need Help?

This setup is complete and ready to go! Just push to GitHub and enable Pages.

Good luck with Hacktoberfest! 🎃
