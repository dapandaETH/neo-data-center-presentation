# Neo Data Center Slides - ContentMapping Plan

**Date:** April 9, 2026
**Status:** Approved
**Purpose:** Map V1/V2/V3 content to 20-slide presentation structure

## Design Decisions

### ContentMapping Strategy
- **Approach:** Comprehensive (all content from V1/V2/V3)
- **Source Files:**
  - neoDataCenter.md (initial requirements)
  - neoDataCenterV2.md (complete architecture)
  - neoDataCenterV3.md (implementation plan)

### Interactivity Level
- **SVG Approach:** Static + basic hover effects
- **Rationale:** Faster to build, more reliable for live presentation

### Presentation Context
- **Delivery:** Live presentation (presenter-led)
- **Navigation:** Keyboard controls (arrow keys, spacebar)
- **Format:** Single HTML file, self-contained

### Styling Approach
- **Framework:** Self-contained HTML with Material Design 3 CSS
- **No build process:** Pure HTML/CSS/JavaScript
- **Theme:** Dark cyberpunk color palette
- **Dependencies:** Google Fonts CDN only

## Slide-by-Slide Breakdown

### Slides 1-4: Introduction (V1 Content)

**Slide 1: Title Slide**
- Title: "Neo Data Center: LLM Inference Infrastructure"
- Subtitle: "Transition from BTC Mining to LLM Inference"
- Date: April 9, 2026
- Visual: Gradient background, cyan accent

**Slide 2: Project Overview**
- Content:
  - Transitioning from BTC mining to LLM inference
  - Running open-weight language models for customers
  - Hybrid approach: reusing GPUs + separate infrastructure
  - Target scale: 10-100 GPUs
- Layout: Single column, 4 bullet points
- Source: V1 Project Overview

**Slide 3: Requirements Analysis**
- Content: 3-column grid
  - Column 1: Scale (Medium 10-100 GPUs)
  - Column 2: Models (Large 70B+, Medium 7B-13B, Multimodal)
  - Column 3: Priorities (Cost optimization, Operational simplicity, Security)
- Layout: Material Design 3 cards, 3 columns
- Source: V1 Requirements Analysis

**Slide 4: Approach Comparison**
- Content:
  - Approach 1: vLLM + Kubernetes ⭐ Recommended
  - Approach 2: Ollama + Docker Swarm
  - Approach 3: TensorRT-LLM + Custom
- Layout: 3 cards with pros/cons
- Source: V1 Architectural Approaches

### Slides 5-9: Architecture (V2 Content)

**Slide 5: Architecture Overview** [Interactive SVG]
- Content: High-level flow chart
  - External Clients → API Gateway → Load Balancer → Kubernetes → Storage
- Layout: Centered SVG (800x500px)
- Interactivity: Hover for component details
- Source: V2 High-Level Architecture

**Slide 6: High-Level Architecture Grid**
- Content: 6 core components (2x3 grid)
  - vLLM Inference Service
  - Kubernetes Infrastructure
  - API Gateway Layer
  - Model Management
  - Observability Stack
  - Storage Layer
- Layout: Material Design 3 cards with icons
- Source: V2 Core Components

**Slide 7: Core Components Detail**
- Content: Top 3 components detailed
  - vLLM: PagedAttention, dynamic batching, health checks
  - Kubernetes: Node pools, resource quotas, network policies
  - API Gateway: Kong/Envoy, auth, rate limiting
- Layout: Vertical stack, expandable cards
- Source: V2 Core Components subsections

**Slide 8: Request Processing Flow** [Interactive SVG]
- Content: Sequence diagram
  - Client → API Gateway → Load Balancer → vLLM → Response
- Layout: Horizontal sequence diagram
- Interactivity: Hover shows latency metrics
- Source: V2 Request Processing Flow

**Slide 9: OpenAI v1 API Compatibility**
- Content: Request/response JSON examples
  - Request: model, messages, temperature, max_tokens
  - Response: id, object, choices, usage
  - Error codes: 200,400, 401, 429, 500, 503, 504
- Layout: Side-by-side code blocks
- Source: V2 OpenAI v1 API Compatibility

### Slides 10-13: Implementation (V3 Content)

**Slide 10: Security & Compliance**
- Content: 4 security areas (2x2 grid)
  - Authentication & Authorization
  - Data Security
  - Compliance Features
  - Threat Mitigation
- Layout: 4 Material Design 3 cards
- Source: V2 Security & Compliance

**Slide 11: Phase 1 - Foundation (Weeks 1-6)**
- Content:
  - Week 1-2: Infrastructure provisioning
  - Week 3-4: Core vLLM deployment
  - Week 5-6: API gateway & monitoring
  - Budget: $150K
- Layout: Timeline cards with progress indicators
- Source: V3 Phase 1

**Slide 12: Phase 2 - Production (Weeks 7-12)**
- Content:
  - Week 7-8: Multi-model support
  - Week 9-10: Advanced API features
  - Week 11-12: Security & compliance
  - Budget: $200K
- Layout: Timeline cards
- Source: V3 Phase 2

**Slide 13: Phase 3 - Scale** [Interactive Timeline]
- Content:
  - Week 13-14: GPU sharing
  - Week 15-16: Auto-scaling
  - Week 17-18: Advanced observability
  - Budget: $150K
  - Total: $500K
- Layout: Gantt chart with budget tooltips
- Interactivity: Hover shows budget allocation
- Source: V3 Phase 3 + Budget

### Slides 14-20: Details & Summary (V2 + V3 Content)

**Slide 14: Infrastructure Requirements**
- Content: Technical specs table
  - Hardware, Network, Storage, Software
- Layout: Material Design 3 data table
- Source: V2 Infrastructure Requirements

**Slide 15: Budget & Team**
- Content: Budget pie chart + Team roles table
  - Budget: $150K + $200K + $150K = $500K
  - Team: DevOps, ML Engineer, Backend, SRE, Support
- Layout: 2-column (left: chart, right: table)
- Source: V2/V3 Budget & Team

**Slide 16: Success Metrics**
- Content: Technical + Business KPIs
  - Technical: Latency, Throughput, GPU utilization, Uptime
  - Business: Cost per token, Customer satisfaction, MTTR
- Layout: Metric cards with icons
- Source: V3 Success Metrics

**Slide 17: Testing Strategy**
- Content: 3 environments
  - Development: Minikube, 1-2 GPUs
  - Staging: Production-like, 5-10 GPUs
  - Production: Blue-green, canary
- Layout: 3 cards
- Source: V2/V3 Testing Strategy

**Slide 18: Risk Mitigation**
- Content: Risk matrix
  - Technical Risks
  - Operational Risks
- Layout: 2x2 matrix with severity
- Source: V3 Risk Mitigation

**Slide 19: Next Actions**
- Content: 4 numbered action items
- Layout: Numbered list with checkboxes
- Source: V3 Next Actions

**Slide 20: Summary & Q&A**
- Content: Key takeaways + Thank you
- Layout: Summary bullets + "Questions?" CTA
- Source: Summary from all versions

## Technical Specifications

### HTML Structure
- Single file: neoDataCenter-slides.html
- Size target: 150-200KB
- Slides: 20 total
- Navigation: Keyboard-only (arrow keys, spacebar, home, end)

### CSS Architecture
- Framework: Material Design 3 (custom implementation)
- Color palette: Dark cyberpunk theme- Background: #0a0a0f, #12121a, #1a1a25
  - Primary: #00f0ff (cyan)
  - Secondary: #ffb347 (amber)
  - Tertiary: #00ff9d (green)
  - Accent: #ff6b9d (magenta)
- Typography: Inter/Roboto (Google Fonts CDN)
- Components: Cards, buttons, chips, tables
- File size: ~40KB embedded CSS

### JavaScript
- Navigation controller (keyboard events)
- SVG interactivity (hover effects only)
- File size: ~20KB embedded JavaScript
- No external dependencies (except Google Fonts)

### Interactive SVGs
- Slide 5: Architecture flow chart (static + hover tooltips)
- Slide 8: Request flow sequence diagram (static + hover tooltips)
- Slide 13: Timeline Gantt chart (static + hover tooltips)
- All SVGs: Inline in HTML, responsive viewBox

## Performance Targets
- Load time: < 1 second
- Animations: 60fps
- File size: 150-200KB total
- Browser support: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+

## Implementation Plan Status
✅ Design approved
→ Next: Invoke writing-plans skill for detailed implementation plan