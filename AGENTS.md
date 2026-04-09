# AGENTS.md - Neo Data Center Repository

## Repository Overview

This repository contains documentation and planning materials for the Neo Data Center infrastructure project - a transition from BTC mining to LLM (Large Language Model) inference infrastructure. The repository includes technical specifications, implementation plans, and presentation materials.

**Purpose**: Infrastructure planning documentation for deploying open-weight language models using vLLM + Kubernetes with GPU sharing.

**Target Audience**: Engineering teams, DevOps, ML engineers, and stakeholders.

## File Structure

```
/
├── AGENTS.md                       # This file - instructions for coding agents
├── docs/
│   └── plans/                      # Planning documents and design specs
│       ├── 2026-04-09-neo-data-center-slides-design.md
│       └── 2026-04-09-neo-data-center-slides-implementation.md
├── neoDataCenter.md                # Initial requirements analysis
├── neoDataCenterV2.md              # Complete architectural design
├── neoDataCenterV3.md              # Implementation plan and roadmap
├── neoDataCenter-slides.html       # Self-contained HTML presentation (150-200KB)
└── presentation-styles.css         # Standalone CSS stylesheet (design system)
```

## Build/Test/Lint Commands

### No Build Process Required
This is a documentation repository. There are no build, compile, or transpilation steps.

### Validation Commands

#### Markdown Files
```bash
# Check markdown syntax (if markdownlint-cli installed)
markdownlint *.md docs/**/*.md

# Check for broken links (if recommended)
# Note: Manual review recommended for external infrastructure links

# Validate markdown formatting
# - Use consistent heading hierarchy (H1 > H2 > H3)
# - Ensure all code blocks have language specifiers
# - Check for proper list formatting
```

#### HTML/CSS Files
```bash
# Validate HTML structure
# Open neoDataCenter-slides.html in browser and check console for errors

# Validate HTML (if html-validate installed)
html-validate neoDataCenter-slides.html

# Check CSS syntax (if stylelint installed)
stylelint presentation-styles.css

# Verify file size (HTML should be < 200KB)
ls -lh neoDataCenter-slides.html

# Test presentation in browser
# - Open neoDataCenter-slides.html
# - Navigate with arrow keys (←, →)
# - Check all 20 slides render correctly
# - Verify interactive SVG charts work
# - Test keyboard navigation (Home, End, Space)
```

### Single File Testing
Since this is a documentation repo, use these commands to inspect specific files:

```bash
# Preview markdown files
cat neoDataCenterV2.md | grep "##"  # Show all section headers
head -50 neoDataCenterV3.md         # Preview first 50 lines

# Check presentation HTML size
wc -l neoDataCenter-slides.html     # Should be ~1000-1500 lines
du -h neoDataCenter-slides.html     # Should be < 200KB

# Validate CSS custom properties
grep "^  --" presentation-styles.css | head -20  # Check variable definitions
```

## Code Style Guidelines

### Markdown Files (*.md)

#### General Principles
- Use clear, descriptive filenames: `[project-name]-v[version].md`
- Version numbers in filenames: `neoDataCenterV2.md`, `neoDataCenterV3.md`
- Keep planning documents in `docs/plans/` with date prefixes: `YYYY-MM-DD-[topic].md`

#### Heading Hierarchy
```markdown
# Title (H1) - One per file, at the top
## Major Section (H2) - Main topics
### Subsection (H3) - Detailed topics
#### Sub-subsection (H4) - Granular details (use sparingly)
```

#### Formatting Standards
- Bold text for key terms: `**Term**: Definition`
- Italic for emphasis: `_italic text_`
- Inline code: `code` for commands, file names, values
- Code blocks with language specifiers:
  ````markdown
  ```bash
  command --flag value
  ```
  
  ```python
  def example():
      return None
  ```
  
  ```
  [Architecture Diagrams]
        ↓
  [Component]
  ```
  ````
- Lists: Use `-` for unordered, `1.` for ordered (maintain consistent numbering)
- Links: `[Link Text](url-or-path)` - prefer relative paths for internal docs

#### Special Conventions for Infrastructure Docs
- Use emojis for status indicators: ✅ (complete/pass), ❌ (incomplete/fail), ⭐ (recommended)
- Architecture diagrams: Use ASCII art with clear flow symbols (`↓`, `→`, `├──`, `└──`)
- Tables for comparisons:
  ```markdown
  | Feature | Option A | Option B |
  |---------|-----------|----------|
  | Cost    | High      | Low      |
  ```

#### File Organization
- Requirements docs at root level: `neoDataCenter.md`
- Detailed designs at root level: `neoDataCenterV2.md`, `neoDataCenterV3.md`
- Planning/spec documents in `docs/plans/`: dated, topic-specific
- Keep files under 500 lines; split larger docs into multiple files

### HTML Presentation File

#### File Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Presentation Title</title>
    <!-- External dependencies (Google Fonts only) -->
    <link href="..." rel="stylesheet">
    <style>
        /* CSS Custom Properties (Design System) */
        :root { /* variables */ }
        
        /* Component Styles */
        .slide { /* styles */ }
        
        /* Responsive Design */
        @media { /* breakpoints */ }
    </style>
</head>
<body>
    <div class="slide-container">
        <div class="slide" id="slide-N">...</div>
    </div>
    <script>
        // Navigation logic, interactive SVG handlers
    </script>
</body>
</html>
```

#### HTML Conventions
- **Self-contained**: No external dependencies except Google Fonts CDN
- **Material Design 3**: Follow Material Design 3 specifications
- **Dark theme**: Use cyberpunk color palette from design spec
- **Semantic HTML**: Use `<header>`, `<main>`, `<nav>`, `<section>` appropriately
- **Accessibility**: Include `alt` attributes, keyboard navigation support
- **File size**: Keep total file under 200KB for fast loading
- **Slide count**: 15-20 slides maximum per presentation

#### CSS Conventions
- **CSS Variables**: Define all colors, spacing, typography in `:root`
- **Naming**: Use BEM-like naming: `.component`, `.component--modifier`, `.component__element`
- **Material Design 3 naming**: Follow `--md-sys-color-*` and `--md-sys-typescale-*` patterns
- **Responsive**: Use `@media` queries for responsive breakpoints
- **No JavaScript styling**: Avoid inline styles; use CSS classes instead
- **Comments**: Group related styles with section headers (see presentation-styles.css)

### CSS Stylesheet (presentation-styles.css)

#### Organization
```css
/* ============================================
   SECTION HEADER (Dividers)
   ============================================ */

/* === SUBSECTION HEADER === */

/* --- Component Name --- */
.component-class {
    /* Property order:
       1. Positioning (position, top, left, z-index)
       2. Box model (display, width, height, margin, padding)
       3. Typography (font-*, line-height, text-*)
       4. Visual (color, background, border, shadow)
       5. Animation (transition, animation)
    */
}
```

#### Naming Conventions
- **Variables**: `--md-sys-[category]-[variant]`
  - Colors: `--md-sys-color-primary`, `--md-sys-color-on-primary`
  - Elevation: `--md-sys-elevation-1`, `--md-sys-elevation-2`
- **Classes**: Use Material Design 3 naming where applicable
  - Layout: `.slide-container`, `.slide`, `.slide-header`, `.slide-content`
  - Components: `.card`, `.chip`, `.button`, `.icon`
  - States: `.selected`, `.hover`, `.focus`

#### Color System (Cyberpunk Dark Theme)
```css
/* Primary accent - Cyan */
--md-sys-color-primary: #00f0ff;

/* Secondary - Amber */
--md-sys-color-secondary: #ffb347;

/* Tertiary - Green */
--md-sys-color-tertiary: #00ff9d;

/* Background surfaces */
--md-sys-color-background: #0a0a0f;
--md-sys-color-surface: #12121a;
```

#### Best Practices
- Use CSS variables for all reusable values
- Follow Material Design 3 elevation/shadow guidelines
- Ensure sufficient color contrast (WCAG AA minimum)
- Test on both light and dark backgrounds (prefer dark theme)
- Keep styles organized by component, not by property

## Important Notes for Agents

1. **No package.json/build system**: This is pure documentation. Use standard tools (markdownlint, stylelint) if available, but prefer manual validation.

2. **HTML presentations are self-contained**: The `neoDataCenter-slides.html` file includes embedded CSS and JS. Do not split into separate files unless creating a new presentation.

3. **Follow existing patterns**: When creating new markdown docs, match the structure of existing files (e.g., `neoDataCenterV2.md`).

4. **Versioning convention**: Use V2, V3, V4 suffixes for major document versions. Use `docs/plans/YYYY-MM-DD-topic.md` for dated planning documents.

5. **File size matters**: Keep HTML presentations under 200KB. Keep markdown files under 500 lines (split if longer).

6. **Check for consistency**: When editing planning docs, ensure technical details (GPU models, budget figures, dates) match across all versions.

7. **Interactive elements**: The HTML presentation includes interactive SVG charts. Test these manually in a browser after making changes.

8. **External links**: Validate all external URLs (Google Fonts CDN, infrastructure docs) remain accessible.

9. **Design spec compliance**: When editing CSS, refer to `docs/plans/2026-04-09-neo-data-center-slides-design.md` for Material Design 3 specifications.

10. **Browser testing**: Always open HTML files in a browser to verify rendering before committing changes.

## Common Tasks

### Creating a New Planning Document
```bash
# Create dated plan file
touch "docs/plans/$(date +%Y-%m-%d)-[topic].md"

# Follow the template:
# # Title - Description
# **Date:** YYYY-MM-DD
# **Purpose:** Detailed description
# ## Overview
# ## Requirements
# ## Implementation
```

### Updating the Presentation
1. Edit `neoDataCenter-slides.html` or `presentation-styles.css`
2. Validate HTML structure
3. Test in browser (all 15-20 slides)
4. Check file size remains under 200KB
5. Verify interactive SVG charts work

### Adding a New Architecture Diagram
1. Use ASCII art in markdown files
2. For interactive diagrams, embed SVG in HTML
3. Follow Material Design 3 color system
4. Add hover/click interactions with JavaScript

### Reviewing Changes
```bash
# Check what changed
git diff neoDataCenterV3.md

# Verify markdown structure
grep "^#" neoDataCenterV3.md  # Show all headings

# Count slides in presentation
grep -c 'class="slide"' neoDataCenter-slides.html
```

## Dependencies

### Required
- None (pure HTML/CSS/Markdown)

### Recommended for Validation
- `markdownlint-cli` - Markdown linting
- `stylelint` - CSS linting
- `html-validate` - HTML validation
- Modern web browser (Chrome/Firefox/Safari) - For testing presentations

## Testing Checklist

Before committing changes:
- [ ] Markdown files follow heading hierarchy
- [ ] Code blocks have language specifiers
- [ ] HTML presentation renders correctly in browser
- [ ] All 15-20 slides are numbered and navigable
- [ ] Interactive SVG charts respond to hover/click
- [ ] File sizes under limits (HTML < 200KB, MD < 500 lines)
- [ ] No broken internal links
- [ ] CSS uses design system variables
- [ ] Technical details consistent across all docs