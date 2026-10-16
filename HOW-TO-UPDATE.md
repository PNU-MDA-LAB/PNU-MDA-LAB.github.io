# MDA Lab Website — Content Update Guide

A quick reference for updating the lab homepage (<https://pnu-mda-lab.github.io>).

The site is built with **Jekyll** and hosted on **GitHub Pages**. You never build anything locally — every time you push to the `main` branch on GitHub, the site rebuilds automatically (takes 1–2 minutes).

---

## 1. Where things live

| Content | Location |
|---|---|
| News posts | `_posts/` (one Markdown file per post) |
| Post images | `assets/images/posts/` |
| Members, publications, etc. | other folders / data files in the repo |

## 2. Add a news post

### Step 1 — Prepare the images

1. Copy your photos into `assets/images/posts/`.
2. Name them with the post date and a short slug, numbered from 1:

   ```
   2025-11-07-apiems-smile-conference-1.jpg
   2025-11-07-apiems-smile-conference-2.jpg
   ```

3. Create a WebP copy of each image (the site uses WebP for faster loading; keep the original JPG/PNG too). With Python + Pillow:

   ```python
   from PIL import Image
   img = Image.open("2025-11-07-apiems-smile-conference-1.jpg")
   img.save("2025-11-07-apiems-smile-conference-1.webp", "WEBP", quality=85)
   ```

### Step 2 — Create the post file

Create a new file in `_posts/` named `YYYY-MM-DD-short-title.md` (the date prefix is required by Jekyll). Template:

```markdown
---
layout: post
title: "2025 대한산업공학회 춘계공동학술대회 참가"
date: 2025-07-18
author: "MDA Lab"
image: /assets/images/posts/2025-07-18-kiie-spring-conference-1.webp
---

MDA Lab이 **2025 대한산업공학회 춘계공동학술대회**에 참가하였습니다.

- **일시**: 2025.07.18-2025.07.21
```

- `image:` in the front matter is the **cover image** shown in the news list and at the top of the post.
- If you have more photos, add a gallery below the text (one `<figure>` block per photo):

```html
<div class="post-gallery">
  <div class="gallery-grid">
    <figure>
      <img src="{{ '/assets/images/posts/FILENAME-2.webp' | relative_url }}" alt="description" loading="lazy">
    </figure>
  </div>
</div>
```

## 3. Edit existing content

Just open the Markdown file (e.g. a post in `_posts/`), edit the text, and save. To replace a photo, overwrite the image files in `assets/images/posts/` keeping the same names.

## 4. Save and upload (git)

Open a terminal in the repo folder and run:

```bash
git add .                          # stage all changes
git commit -m "Add APIEMS 2025 news post"   # save with a short message
git push origin main               # upload to GitHub
```

Then wait 1–2 minutes and refresh the website to check the result.

## 5. Tips & troubleshooting

- **Post not showing?** Check the filename starts with a valid date (`YYYY-MM-DD-`) and the front matter (the `---` block) has no typos.
- **Image not showing?** Check the path in `image:` / `src` exactly matches the filename in `assets/images/posts/` (case-sensitive).
- **Future-dated posts** are still published — Jekyll on GitHub Pages builds them normally for this site.
- **Git errors about "invalid object" or "broken link"**: this repo lives inside OneDrive, which can corrupt the `.git` folder. Fix: clone a fresh copy from GitHub and copy its `.git/objects` over, or simply re-clone the repo. To prevent it, exclude the `.git` folder from OneDrive sync or move the repo outside OneDrive.
