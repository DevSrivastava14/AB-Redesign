# ABTalks Redesign — Hackathon Project

## Goal

Redesign and build the ABTalks 60-day coding challenge experience for Indian college students.

The product helps students build something every day for 60 days and publicly prove their work through:

1. GitHub commit
2. LinkedIn post

The redesign must be mobile-first and optimized for a 390px viewport.

The three required routes are:

/
/dashboard
/day/12

Authentication, database, real user accounts, recruiter dashboard and admin panel are OUT OF SCOPE.

Use realistic mocked JSON data.

---

# Product Philosophy

ABTalks is not another coding course.

It is a system that helps students:

BUILD → PROVE → GROW

Core product idea:

> ABTalks turns 60 days of coding into 60 days of public proof.

The experience should make students want to return tomorrow.

The primary question every screen should answer is:

> What do I need to do next?

---

# Target User

Indian college students.

The primary device is a phone.

Assume the student may be using the product late at night after college.

Therefore:

* Keep the interface focused.
* Avoid unnecessary information.
* Make primary actions obvious.
* Make buttons thumb-friendly.
* Keep critical information above the fold where possible.
* Optimize specifically for 390px width.

---

# Visual Direction

Style:

Developer-native + premium + energetic.

Visual inspiration in spirit:

* GitHub
* Linear
* modern developer tools
* premium startup products

Do NOT make it look like a generic EdTech dashboard.

Avoid:

* excessive gradients
* excessive glassmorphism
* giant illustrations
* generic purple AI aesthetics
* excessive cards
* unnecessary charts
* desktop-first layouts

Use:

* dark-first interface
* deep charcoal background
* slightly lighter surfaces
* strong typography
* subtle borders
* compact cards
* generous spacing
* one distinctive warm orange/yellow accent
* green for successful states
* amber for warnings
* muted red for missed/error states

Use Inter or Geist typography.

Use Lucide icons.

---

# Global Navigation

Mobile authenticated screens should have:

ABTalks logo/name on the left.

Small profile/avatar action on the right.

Bottom navigation:

* Home
* Journey
* Profile

Keep navigation minimal.

---

# ROUTE 1: /

## Landing Page

Purpose:

Convince a student who has never heard of ABTalks to commit to the 60-day challenge.

### Hero

Small eyebrow:

THE 60-DAY BUILD CHALLENGE

Headline:

60 days.
60 things built.
A portfolio that proves it.

Supporting copy:

Stop collecting tutorials. Start shipping real work every day.

Primary CTA:

Start the 60-Day Challenge →

Secondary CTA:

See how it works

Hero visual:

Create a compact 60-day progress grid/timeline.

It should visually communicate:

Day 01 ✓
Day 02 ✓
Day 03 ✓
...
Day 60 ○

This 60-day visual motif should appear throughout the product.

---

## Problem Section

Heading:

Learning isn't the hard part. Showing up is.

Explain:

College gives students lectures.
The internet gives students tutorials.
What many students lack is a reason to build consistently.

ABTalks gives students a 60-day reason to show up, build something and prove it publicly.

---

## Daily Loop

Heading:

Every day, three things happen.

Three steps:

01 — BUILD

Complete today's challenge and ship something real.

02 — PROVE

Push your work to GitHub and share your progress on LinkedIn.

03 — GROW

Build a public record of consistency that compounds over 60 days.

Visual:

BUILD → PROVE → STREAK → PORTFOLIO

---

## 60-Day Progress

Heading:

Your progress becomes visible.

Show a realistic 60-day grid.

Explain:

One day doesn't change your career.
Sixty days of proof can change how people see you.

---

## Tracks

Heading:

Choose what you want to build.

Use realistic mocked tracks:

Web Development
AI & ML
App Development
Data

Do not claim fake statistics.

---

## Social Proof

Heading:

Built for students who want to ship.

Use clearly fictional/mock testimonial data.

Example:

"I stopped saying I was learning and started having things to show."

Aarav · Computer Science, 3rd year

Do not invent fake ABTalks user counts, placement numbers or success statistics.

---

## Final CTA

Headline:

Your Day 1 starts with one decision.

Copy:

You don't need to be ready for Day 60.
You only need to show up for Day 1.

CTA:

Start Day 1 →

---

# ROUTE 2: /dashboard

## Purpose

This is NOT a traditional analytics dashboard.

It is the student's:

"What should I do right now?" screen.

---

## Greeting

Good evening, Arjun 👋

Ready for today's build?

---

## Streak

Large visual:

🔥
11
DAY STREAK

Day 12 of 60

Progress bar.

48 days to go.

Supporting message:

You're building momentum. Keep it going.

---

# Today's Build

This must be the most prominent dashboard component.

Label:

TODAY'S BUILD · DAY 12

Title:

GitHub Profile Analyzer

Meta:

Intermediate · ~60 min

Description:

Build a web app that takes a GitHub username and displays useful profile and repository statistics.

Requirements preview:

GitHub username input
Profile information
Repository statistics
Responsive interface

CTA:

Start today's build →

---

# Journey

Heading:

Your 60-day journey

Show:

12 / 60 days

20% complete

Use the same 60-day visual motif as the landing page.

States:

Completed = check
Today = active dot
Upcoming = empty
Missed = warning indicator

---

# Achievements

Heading:

Recent wins

Example:

7-day streak
First project shipped
Public builder

Keep this section compact.

---

# Profile

Show:

Your profile is 60% complete

Add your college and profile details.

CTA:

Complete profile →

---

# ROUTE 3: /day/12

## Purpose

This is the main working screen.

The student should be able to understand the task and submit proof without searching.

---

# Header

Back to dashboard.

DAY 12 OF 60

🔥 11

---

# Mission

Title:

Build a GitHub Profile Analyzer

Meta:

Intermediate · ~60 min

Description:

Create a web application that accepts a GitHub username and displays their profile information and repository statistics.

---

# Requirements

Heading:

What to build

Checklist:

GitHub username input
Profile information
Repository count
Most-used languages
Responsive UI

Supporting copy:

You don't need to build everything perfectly. Ship a working version first.

---

# AI Coach

This is the signature AI feature.

Card heading:

🧠 Stuck? Ask your AI Coach.

Copy:

Get a hint without getting the answer.

Options:

I don't know where to start
I'm stuck planning
I'm debugging
Give me a hint

The AI Coach should behave like a mentor.

It should provide progressive hints rather than immediately generating the complete solution.

Example:

Hint 1:

Start by identifying the GitHub API endpoint you'll need. Once you know what data comes back, decide which pieces belong in your interface.

Then:

Need another hint?

The goal is to help the student learn, not bypass the challenge.

For this hackathon implementation, the AI Coach may use realistic mocked responses if an actual AI API is not configured.

---

# Resources

Useful resources:

GitHub API Docs →
Example project →
Submission guidelines →

These can be placeholder links.

---

# Proof of Work

Heading:

Prove your work

Supporting copy:

Complete both submissions to finish Day 12.

---

## GitHub

Label:

01 · GITHUB

Input:

Repository URL

Placeholder:

github.com/username/project

Input:

Commit URL

Placeholder:

github.com/.../commit/...

Validate the URLs.

Show a success state when valid.

---

## LinkedIn

Label:

02 · LINKEDIN

Input:

Post URL

Placeholder:

linkedin.com/posts/...

Supporting copy:

Your post should show what you built and what you learned.

---

# Submit

Primary button:

Submit Day 12 →

Do not allow submission until required fields are valid.

Submission state:

Submitting...

Then:

✓ DAY 12 COMPLETE

You just added another proof point to your 60-day journey.

🔥 12 day streak

Button:

Back to dashboard →

---

# Edge Cases

The application must include UI support for these cases.

## First Day

Show:

🌱 Your streak starts today.

Everyone starts at Day 1.

Start your first build →

Do not show a depressing "0 streak" experience.

---

## Missed Day

Show:

You missed yesterday.

That's okay. Your challenge isn't over.

Today's build is waiting for you.

Resume challenge →

In the journey:

Yesterday = missed

Do not make the UI punitive.

---

## Empty Profile

Show:

Make your journey yours.

Add a few details so your 60-day progress has a face.

Fields:

Name
College
Track
Profile photo

CTA:

Complete profile →

---

## Invalid Submission

Show useful inline validation.

Example:

That doesn't look like a GitHub repository URL.

Never erase the user's input.

---

# Mock Data

Create:

data/student.json
data/challenge.json
data/submissions.json

Example student:

{
"name": "Arjun Sharma",
"college": "VIT",
"track": "Web Development",
"currentDay": 12,
"streak": 11,
"completedDays": 11,
"completionPercentage": 18.3,
"achievements": [
"7 Day Streak",
"First Project Shipped"
]
}

Example challenge:

{
"day": 12,
"title": "GitHub Profile Analyzer",
"difficulty": "Intermediate",
"estimatedTime": "60 min",
"description": "Build a web application that accepts a GitHub username and displays profile and repository statistics.",
"requirements": [
"GitHub username input",
"Profile information",
"Repository count",
"Most-used languages",
"Responsive interface"
]
}

Example submission:

{
"day": 12,
"githubRepository": "",
"githubCommit": "",
"linkedinPost": "",
"submitted": false
}

---

# Component Architecture

Prefer reusable components.

Suggested components:

Navbar
Button
ProgressBar
StreakCard
TodayBuildCard
JourneyCalendar
AchievementCard
TaskRequirements
AICoach
SubmissionForm
GitHubProof
LinkedInProof
BottomNav

Avoid giant monolithic page components.

---

# Interaction Requirements

Use subtle animations.

Progress bars may animate on load.

Checklist completion should have a small animation.

Submission should transition:

Submit Day 12
→
Submitting...
→
✓ Day 12 Complete

AI hints should appear progressively.

Avoid excessive animation.

---

# Accessibility

Use semantic HTML.

All buttons must be keyboard accessible.

Inputs need labels.

Use sufficient contrast.

Do not rely only on color to communicate state.

Focus states should be visible.

---

# Responsive Requirements

Primary viewport:

390px.

Use approximately 20px horizontal padding on mobile.

Buttons:

minimum 48px height.

Inputs:

minimum 48px height.

Critical information should remain easy to see without excessive scrolling.

Desktop should expand naturally from the mobile layout.

Do not create an entirely separate desktop product.

---

# Technical Requirements

Use:

Next.js
TypeScript
Tailwind CSS
Lucide icons
JSON mock data

No authentication.

No database.

No production backend.

No recruiter dashboard.

No admin dashboard.

Do not attempt to integrate real GitHub or LinkedIn authentication.

Keep the implementation clean and hackathon-ready.

---

# Required Routes

/
/dashboard
/day/12

These exact routes must work.

---

# Quality Bar

The final product should feel like a real startup product rather than a hackathon template.

Prioritize:

1. Mobile UX
2. Visual hierarchy
3. Clear primary actions
4. Strong typography
5. Consistent design system
6. Realistic data
7. Thoughtful edge states
8. Useful AI Coach
9. Fast interaction
10. Polish

Do not overbuild features outside the brief.

Build the smallest polished product that convincingly demonstrates the concept.
