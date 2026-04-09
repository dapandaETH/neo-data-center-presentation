# Neo Data Center Presentation Slides - Design Document

**Date:**April 9, 2026
**Purpose:** Internal team presentation for LLM Inference Infrastructure
**Format:** 15-20 slides, single HTML file, interactive SVG flow charts
**Style:** Google Material Design 3 with Dark Cyberpunk color palette

## Overview

Technical presentation covering Neo Data Center's journey from BTC mining to LLM inference infrastructure, using vLLM + Kubernetes architecture with GPU sharing. The presentation will be a self-contained HTML file with embedded CSS and JavaScript, featuring interactive SVG flow charts and Material Design 3 components styled with a dark cyberpunk aesthetic.

## Requirements

### Purpose
- **Primary use:** Internal team presentation (technical deep dive)
- **Audience:** Engineering team, DevOps, ML engineers
- **Goals:** Communicate architecture, implementation plan, and technical decisions

### Technical Requirements
- **Format:** Single HTML file (150-200KB)
- **Slides:** 15-20 slides
- **Interactive elements:** 3 SVG flow charts with zoom/pan/click interactions
- **Navigation:** Keyboard controls (arrow keys, spacebar, home, end)
- **Responsive:** Works on desktop and laptop screens
- **Dependencies:** Google Fonts CDN only (Inter/Roboto + Material Symbols)
- **Load time:** < 1 second on modern browsers

### Style Requirements
- **Framework:** Google Material Design 3
- **Theme:** Dark cyberpunk
- **Colors:**
  - Background: #0a0a0f, #12121a, #1a1a25
  - Cyan accent: #00f0ff
  - Amber: #ffb347
  - Green: #00ff9d
  - Magenta: #ff6b9d
  - Red: #ff4757

## Slide Structure (20 slides total)

### Slides 1-4: Introduction
- **Slide 1: Title** - "Neo Data Center: LLM Inference Infrastructure"
- **Slide 2: Project Overview** - BTC Mining to LLM Inference transition
- **Slide 3: Requirements Analysis** - Scale, Models, Priorities (3-column layout)
- **Slide 4: Approach Comparison** - 3 architectural approaches comparison

### Slides 5-9: Architecture
- **Slide 5: Architecture Overview** [Interactive SVG Flow Chart]
- **Slide 6: High-Level Architecture** - 6 core components grid
- **Slide 7: Core Components** - Detailed breakdown
- **Slide 8: Request Processing Flow** [Interactive SVG Sequence Diagram]
- **Slide 9: OpenAI v1 API Compatibility** - Request/response examples

### Slides 10-13: Implementation
- **Slide 10: Security & Compliance** - 4 security areas
- **Slide 11: Phase 1: Foundation** - Weeks 1-6 timeline and deliverables
- **Slide 12: Phase 2: Production** - Weeks 7-12 timeline and deliverables
- **Slide 13: Phase 3: Scale** [Interactive Timeline] - Weeks 13-18, budget hover

### Slides 14-20: Details & Summary
- **Slide 14: Infrastructure Requirements** - Hardware, network, storage specs
- **Slide 15: Budget & Team** - Budget breakdown, team roles
- **Slide 16: Success Metrics** - Technical and business KPIs
- **Slide 17: Testing Strategy** - Dev, staging, production environments
- **Slide 18: Risk Mitigation** - Risk matrix
- **Slide 19: Next Actions** - Action items
- **Slide 20: Summary & Q&A** - Key takeaways, thank you

## Technical Architecture

### HTML Structure
```html
<div class="slide-container">
  <div class="slide" id="slide-N">
    <header class="slide-header">
      <h1>Title</h1>
      <span class="slide-counter">N / 20</span>
    </header>
    <main class="slide-content">
      <!-- Content -->
    </main>
    <div class="slide-nav">
      <button class="prev-btn">←</button>
      <button class="next-btn">→</button>
    </div>
  </div>
</div>
```

### CSS Architecture
- **CSS Variables:** Root-level cyberpunk color definitions
- **Material Design 3:**
  - Elevation shadows (0px-5px spread)
  - Border radius (8px-16px)
  - Typography scale (Display, Headline, Title, Body, Label)
  - Surface tonal overlays
- **Dark Theme:**
  - Gradient backgrounds (#0a0a0f → #1a1a25)
  - Primary accent: Cyan (#00f0ff)
  - Secondary accents: Amber, Green, Magenta
- **Animations:**
  - Slide transitions: 400ms fade in/out
  - Card hover: 200ms box-shadow
  - Button hover: 150ms background/border
  - SVG hover: 300ms glow effect

### JavaScript Navigation (navigation.js)
```javascript
// Keyboard Controls:
- Arrow Right / Spacebar: Next slide
- Arrow Left: Previous slide
- Home: First slide
- End: Last slide
- Escape: Toggle overview mode

// State Management:
- Current slide index (0-19)
- Slide transition animations
- SVG interaction state (zoom/pan)
```

## Interactive SVG Flow Charts

### Slide 5: Architecture Overview
**Components:**
```
[External Clients]
        ↓
[API Gateway (Kong)] → Authentication, Rate Limiting
        ↓
[Load Balancer (MetalLB)]
        ↓
[Kubernetes Cluster]
    ├── [vLLM Inference Pods]
    │   ├── GPU Sharing (MIG/Time-slice)
    │   └── Model Storage (PVC)
    ├── [Model Registry Pod]
    ├── [Monitoring Stack]
    └── [Logging Stack]
        ↓
[Storage Layer] + [Database]
```

**SVG Implementation:**
- **Nodes:** Material Design 3 cards
  - Background: Dark gradient (#12121a)
  - Border: Cyan (#00f0ff) for primary nodes
  - Secondary: Amber (#ffb347), Green (#00ff9d)
  - Padding: 16px, Border-radius: 12px
  
- **Connections:** Bezier curves with arrows
  - Stroke: Cyan (#00f0ff), width: 2px
  - Arrow markers at endpoints
  - Animated dash array on hover

- **Interactivity:**
  - Click node → Shows tooltip/modal with details
  - Hover → Cyan glow effect (box-shadow)
  - Zoom: Ctrl+scroll (0.5x - 3x)
  - Pan: Click+drag background

### Slide 8: Request Processing Flow
**Sequence:**
```
Client → API Gateway → Load Balancer → vLLM Engine → Response
  ↓         ↓               ↓                ↓           ↓
API Key   Validate        Route to         Process      Format
 Request  & Rate Limit   Model Pod        Request      OpenAI v1
```

**SVG Features:**
- Animated flow arrows (stroke-dasharray animation)
- Click stages → Shows timing/throughput metrics
- Color-coded: Input (cyan), Processing (amber), Output (green)
- Performance metrics tooltip on hover

### Slide 13: Implementation Timeline
**Gantt Chart:**
```
Week 1-6:   Foundation Setup    [████████]
Week 7-12:  Production Ready    [████████████████]
Week 13-18: Scale & Optimize    [████████████████████]
```

**SVG Features:**
- Horizontal bar chart with Material Design 3 cards
- Click bars → Shows deliverables checklist
- Hover → Shows budget allocation ($150K, $200K, $150K)
- Animated progress bars on slide entrance

**Technical Details:**
- All SVGs: `<viewBox>` for responsive scaling
- `preserveAspectRatio="xMidYMid meet"` for centering
- CSS transforms for zoom/pan (transform-origin: center)
- Event listeners: mousedown, mousemove, mouseup, wheel
- Touch support: touchstart, touchmove, touchend

## Material Design 3 Implementation

### Color System
```css
:root {
  /* Background gradients */
  --bg-primary: #0a0a0f;
  --bg-secondary: #12121a;
  --bg-tertiary: #1a1a25;
  --bg-surface: linear-gradient(135deg, #0a0a0f 0%, #1a1a25 100%);
  
  /* Accent colors */
  --cyan-accent: #00f0ff;
  --amber-accent: #ffb347;
  --green-accent: #00ff9d;
  --magenta-accent: #ff6b9d;
  --red-accent: #ff4757;
  
  /* Text colors */
  --text-primary: #ffffff;
  --text-secondary: #b0b0b0;
  --text-accent: #00f0ff;
  
  /* Elevation */
  --elevation-1: 0px 1px 3px rgba(0, 240, 255, 0.12);
  --elevation-2: 0px 2px 6px rgba(0, 240, 255, 0.16);
  --elevation-3: 0px 4px 8px rgba(0, 240, 255, 0.20);
}
```

### Typography
- **Display Large:** 57px, Light, Cyan
- **Headline Large:** 32px, Medium, White
- **Title Large:** 22px, Medium, Amber or Cyan
- **Body Large:** 16px, Regular, White
- **Label Large:** 14px, Medium, Cyan
- **Font:** Inter or Roboto (Google Fonts CDN)

### Components

**Cards:**
```css
.card {
  background: var(--bg-secondary);
  border-radius: 16px;
  box-shadow: var(--elevation-2);
  border: 1px solid var(--bg-tertiary);
  padding: 24px;
  transition: all 0.3s ease;
}
.card:hover {
  box-shadow: var(--elevation-3);
  border-color: var(--cyan-accent);
}
```

**Buttons:**
```css
.button {
  background: var(--bg-secondary);
  border: 1px solid var(--cyan-accent);
  color: var(--cyan-accent);
  border-radius: 20px;
  padding: 10px 24px;
}
.button:hover {
  background: var(--cyan-accent);
  color: var(--bg-primary);
}
```

**Chips:**
- Small rounded pills for tags/labels
- Background: transparent, border: cyan
- Font: Label Medium

### Layout
- **Header:** Fixed top (0px-80px), cyan gradient border-bottom
- **Content Area:** Flexible height, centered content
- **Navigation:** Fixed bottom (calc(100vh - 60px)), transparent background
- **Slide Counter:** Top-right corner, cyan text

### Accessibility
- High contrast text (white on dark)
- Focus states: Cyan ring outline for keyboard navigation
- Reduced motion media query support
- Semantic HTML structure

## Content Organization

### Introduction Slides (1-4)
- Clear titles with cyan accent
- Use Material Design 3 cards for content
- 3-column layouts for comparisons
- Highlighted recommendations with cyan borders

### Architecture Slides (5-9)
- Interactive SVG diagrams (slides 5, 8)
- Component grids with icons
- JSON code snippets with syntax highlighting
- Material Design 3 tables for comparisons

### Implementation Slides (10-13)
- Timeline cards with progress indicators
- Budget breakdown with pie charts (SVG)
- Deliverables checklists
- Interactive Gantt chart (slide 13)

### Details Slides (14-20)
- Technical specs in table format
- KPI cards with metrics
- Risk matrix with severity indicators
- Numbered action items

### Formatting Guidelines
- Bullet points: Material Design 3 lists
- Code snippets: Monospace, dark background, cyan syntax
- Tables: Bordered grid, cyan headers
- Callout boxes: Amber-bordered for important notes
- Icons: Material Symbols (outlined) from Google Fonts

## File Structure
```
neoDataCenter-slides.html  (single file, ~150-200KB)
├── <style>               (embedded CSS ~40KB)
├── <div class="slide-container">
│   ├── Slide 1-20
│   └── Interactive SVGs (inline)
└── <script>             (embedded JavaScript ~20KB)
    └── navigation.js    (keyboard controls, SVG interactions)
```

## Performance Targets
- **File size:** 150-200KB total
- **Load time:** < 1 second
- **Interactions:** 60fps animations
- **Zoom range:** 0.5x - 3x
- **Browser support:** Modern browsers (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)

## Acceptance Criteria
1. ✅ Single HTML file works offline
2. ✅ Keyboard navigation functions correctly
3. ✅ All 20 slides render properly
4. ✅ 3 interactive SVG flow charts with zoom/pan
5. ✅ Material Design 3 styling applied throughout
6. ✅ Dark cyberpunk color palette matches specification
7. ✅ Responsive on desktop/laptop screens
8. ✅ Load time < 1 second
9. ✅ Smooth60fps animations
10. ✅ Accessible (semantic HTML, focus states)

## Next Steps
1. Create implementation plan using writing-plans skill
2. Build HTML structure with all 20 slides
3. Implement embedded CSS with Material Design 3 components
4. Create inline SVG diagrams for slides 5, 8, 13
5. Implement navigation.js with keyboard controls
6. Add SVG interactivity (zoom, pan, click)
7. Test across browsers and screen sizes
8. Optimize for performance
9. Validate accessibility
10. Final testingand delivery

## References
- Material Design 3: https://m3.material.io/
- Source documentation: neoDataCenter.md, neoDataCenterV2.md, neoDataCenterV3.md
- Color palette: Dark Cyberpunk theme
- Architecture: vLLM + Kubernetes with GPU sharing