# AI Driven Redesign — Vibe Coding Prompts

## Project Overview

**AI Driven Redesign** is a student-focused 60-day building experience designed to answer one simple question:

> **"What should I do right now?"**

Instead of presenting students with a generic analytics dashboard, the product focuses on daily missions, building momentum, completing projects, and making visible progress through a 60-day journey.

The application is designed mobile-first, with particular attention to a 390px viewport.

---

## Development Approach

The project was developed iteratively with the assistance of an AI coding agent.

The development approach was intentionally lightweight and focused on the hackathon requirements.

Key principles:

* Reuse the existing design system.
* Reuse existing components and tokens.
* Reuse existing mock data.
* Keep the application mobile-first.
* Avoid unnecessary dependencies.
* Avoid over-engineering.
* Build only what is required for the prototype.
* Verify each major implementation phase before continuing.
* Prioritize a polished working experience over unnecessary functionality.

---

# Phase 1 — Foundation

### Prompt

```text
Build the foundational design system for the AI Driven Redesign project.

Use a dark, modern, student-focused visual language.

Core visual direction:

Background: #0D0D0D
Surface: #1A1A1A
Primary accent: #F5A623
Success: green
Warning: amber
Error: red

Create/reuse consistent tokens and components for:

- backgrounds
- surfaces
- borders
- typography
- headings
- body text
- buttons
- inputs
- badges
- progress indicators
- spacing
- responsive behavior

Use Lucide icons instead of manually-created SVGs.

Keep the design mobile-first and optimized for 390px.

Do not introduce unnecessary visual effects or dependencies.
```

---

# Phase 2 — AppShell, Navigation & Data

### Prompt

```text
Continue the AI Driven Redesign using the existing design system.

Build/reuse the shared application structure:

- AppShell
- BottomNav
- page container
- navigation states
- reusable UI components

Prepare the mock student data required by the application.

Support dashboard scenarios:

/dashboard
/dashboard?scenario=first-day
/dashboard?scenario=missed
/dashboard?scenario=empty-profile

Use mock data rather than unnecessary backend infrastructure.

Reuse existing components and tokens.

Keep the implementation lightweight and mobile-first.

Do not introduce unnecessary dependencies or redesign the existing visual system.
```

---

# Phase 3 — Student Dashboard

The Student Dashboard was designed as the primary daily-mission experience.

### Main Prompt

```text
Proceed with Phase 4: build the complete Student Dashboard at /dashboard.

Do not redesign the existing design system. Reuse the components and tokens already implemented.

The dashboard should feel like a "daily mission" screen, NOT a generic analytics dashboard.

Primary question:

"What should I do right now?"

Use the existing mock data and AppShell.

Page structure:

1. Greeting
2. Edge-case banner when applicable
3. Streak card
4. Today's Build — MOST PROMINENT
5. 60-day Journey
6. Recent Achievements
7. Profile completion prompt

Keep the page mobile-first and optimized specifically for 390px.

Greeting:

Good evening, Arjun 👋

Ready for today's build?

Use the student's name from mock data.

Support:

/dashboard?scenario=first-day
/dashboard?scenario=missed
/dashboard?scenario=empty-profile

Default should have no edge-case banner.

First day should communicate:

🌱 Your streak starts today.

Everyone starts at Day 1.

Primary action:

Start your first build →

Do not make a 0 streak feel negative.

Missed should communicate:

You missed yesterday.

That's okay. Your challenge isn't over.

Today's build is waiting for you.

CTA:

Resume challenge →

Use a gentle warning treatment.

The Streak Card should show the student's real streak data.

Today's Build must have the strongest visual hierarchy.

Today's Build:

TODAY'S BUILD · DAY 12

GitHub Profile Analyzer

Intermediate · ~60 min

Build a web app that takes a GitHub username and displays useful profile and repository statistics.

Requirements preview:

✓ GitHub username input
✓ Profile information
✓ Repository statistics
✓ Responsive interface

Primary CTA:

Start today's build →

Link to:

/day/12

Reuse the existing JourneyCalendar for the 60-day journey.

Show:

12 / 60 days
20% complete

Use existing achievement data.

If no achievements exist for first-day, show a friendly empty state.

If profileComplete is false, show a profile completion prompt.

Reuse the existing BottomNav with Home active.

Use Lucide icons.

Do not add unnecessary navigation.

Keep the page lightweight.

Do not build /day/12 yet.

Do not add backend services, unnecessary dependencies, complex state management, or unnecessary animations.

Verify:

npx tsc --noEmit
npm run lint
npm run build

Test:

/dashboard
/dashboard?scenario=first-day
/dashboard?scenario=missed
/dashboard?scenario=empty-profile

Check specifically at 390px and ensure there is no horizontal overflow.
```

---

# Phase 4 — Today's Build

### Prompt

```text
Build the Today's Build experience at:

/day/12

Keep this implementation lightweight and hackathon-ready.

Reuse the existing design system, AppShell, components, tokens, and mock data.

The experience should feel like a daily mission.

Show:

Day 12 of 60

GitHub Profile Analyzer

Intermediate · ~60 min

Build a web app that takes a GitHub username and displays useful profile and repository statistics.

Requirements:

✓ GitHub username input
✓ Profile information
✓ Repository statistics
✓ Responsive interface

Add a simple primary CTA:

Start building →

Show a simple requirements/checklist section.

Add a clear completion action such as:

Mark build complete

This may use mock/local state only.

No backend.
No authentication.
No database.
No AI API.
No code editor.
No new dependencies.
No unnecessary functionality.

Optimize for 390px.

Use Lucide icons.

Minimum 48px touch targets.

No horizontal overflow.

Run:

npx tsc --noEmit
npm run lint
npm run build
```

---

# Phase 5 — Final Hackathon QA

### Prompt

```text
Perform final lightweight QA of the AI Driven Redesign project.

Do not add new features.

Do not redesign the application.

Do not introduce new dependencies.

Fix only issues affecting:

- visual polish
- mobile layout
- spacing
- typography
- button usability
- navigation
- accessibility
- horizontal overflow
- broken links
- console errors

Verify:

/dashboard
/dashboard?scenario=first-day
/dashboard?scenario=missed
/dashboard?scenario=empty-profile
/day/12

Test primarily at 390px.

Run:

npx tsc --noEmit
npm run lint
npm run build

Make sure the project is ready for hackathon demonstration and submission.

Do not make speculative changes.
```

---

# AI Development Principles

Throughout development, the AI coding agent was instructed to:

1. Preserve the existing design system.
2. Reuse existing components and tokens.
3. Reuse existing mock data.
4. Keep the implementation lightweight.
5. Avoid unnecessary dependencies.
6. Avoid over-engineering.
7. Prioritize mobile-first design.
8. Optimize specifically for 390px.
9. Avoid inventing unsupported statistics or data.
10. Build only the features required for the current phase.
11. Verify the project after major implementation steps.
12. Prefer a polished prototype over unnecessary production infrastructure.

---

# Verification Commands

The project was intended to be verified using:

```bash
npx tsc --noEmit
npm run lint
npm run build
```

Important routes and scenarios:

```text
/dashboard
/dashboard?scenario=first-day
/dashboard?scenario=missed
/dashboard?scenario=empty-profile
/day/12
```

---

# AI-Assisted Development Note

This project was developed using an iterative AI-assisted coding workflow.

The AI coding agent was used to:

* understand the project requirements
* inspect the existing codebase
* implement individual development phases
* reuse and extend existing components
* implement responsive UI
* handle mock-data scenarios
* identify implementation issues
* perform TypeScript, lint, build, and responsive verification

The development process intentionally avoided unnecessary infrastructure and focused on delivering a lightweight, functional hackathon prototype.
