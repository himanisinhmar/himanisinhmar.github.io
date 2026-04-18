# Content Intake

Drop new content here before I wire it into the site. Each project gets its own folder.

---

## Directory structure

```
_content/
  projects/
    my-project-name/
      meta.md            ← required: title, theme, tagline, links
      description.md     ← required: full project write-up (paragraphs)
      main.jpg           ← required: card thumbnail (landscape, ~800×500px ideal)
      fig1.jpg           ← optional: additional figures
      fig2.jpg
      demo.gif           ← optional: animation loop (great for cards)
      demo.mp4           ← optional: video file
                            OR add youtube_id in meta.md for YouTube embeds
```

---

## meta.md format

```yaml
---
title: "My Project Title"
theme: "Swarm Intelligence"          # pick one below
theme_color: "#11999e"               # matching hex
tagline: "One-sentence hook for the research card (~20 words max)"
report: "filename.pdf"               # or "To Come"
video: "demo.mp4"                    # optional — file from this folder
youtube_id: "XXXXXXXXXXX"            # optional — YouTube video ID
---
```

### Available themes & colors

| Theme | Color |
|---|---|
| Swarm Intelligence | `#11999e` |
| Safe Control | `#1b4f72` |
| Formal Methods | `#6c3483` |
| Bio-inspired Robotics | `#1e8449` |
| Aerospace Systems | `#a04000` |
| Hardware & Systems | `#7d6608` |

---

## Image tips

- **Card image** (`main.jpg`): landscape, 800–1200px wide, under 300 KB. This is what shows on the research grid.
- **Figures**: any size, will auto-fit in a responsive grid on the project detail page.
- **GIF/video**: a looping robot demo as a GIF or `.mp4` makes the biggest visual impact. Keep GIFs under 5 MB.
- **YouTube**: easiest option — just paste the video ID (the part after `?v=`) into `youtube_id`.

---

## PDF reports

Put PDF files in `/pdf/` (already exists). Reference them by filename in `meta.md`.

---

## Once you've added content here

Tell me the project folder name and I'll:
1. Move images to `/img/` and video to `/media/`
2. Create the `_projects/` entry with correct front matter
3. Wire it into the research grid automatically
