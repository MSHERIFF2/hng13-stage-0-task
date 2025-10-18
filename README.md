# Profile Card Project

A responsive profile card implementation for HNG13 Stage 0 task. This project showcases a modern, responsive profile card with real-time updates and interactive elements.

## Live Demo

[View Live Demo](https://msheriff2.github.io/hng13-stage-0-task/)

## Features

- 🎨 Responsive design that works on mobile, tablet, and desktop
- ⚡ Real-time display of current time in milliseconds
- 🖼️ Profile avatar with hover effects
- 🎯 Interactive social media links
- 📱 Mobile-first approach
- ⌨️ Keyboard-accessible navigation
- 🎭 Smooth hover and focus animations
- 🔍 Semantic HTML structure

## Technologies Used

- HTML5
- CSS3 (Flexbox for layout)
- JavaScript (ES6+)
- No external dependencies

## Getting Started

### Prerequisites

- A modern web browser
- A code editor (VS Code recommended)
- Basic knowledge of HTML, CSS, and JavaScript

### Running Locally

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd stage-0
   ```

2. Open the project
   - Open the folder in your preferred code editor
   - Right-click on `index.html` and select "Open with Live Server" if you're using VS Code
   - Alternatively, you can directly open the `index.html` file in your web browser

## Project Structure

```
stage-0/
├── index.html          # Main HTML file
├── style.css          # Stylesheet
├── profile-card.js    # JavaScript for time updates
├── myPhoto.png        # Profile image
└── README.md          # Project documentation
```

## Required Elements

All elements include the specified data-testid attributes:

- Profile card container: `test-profile-card`
- Name: `test-user-name`
- Biography: `test-user-bio`
- Current time: `test-user-time`
- Avatar image: `test-user-avatar`
- Social links: `test-user-social-links`
- Hobbies: `test-user-hobbies`
- Dislikes: `test-user-dislikes`

## Implementation Details

### HTML Structure
- Semantic HTML5 elements (`<article>`, `<header>`, `<main>`, etc.)
- Proper data-testid attributes for testing
- Accessible structure with ARIA attributes
- Proper heading hierarchy
- Clean and organized markup

### CSS Features
- Responsive design using media queries
- Flexbox layout system
- Fluid typography using clamp()
- Custom blue color scheme
- Smooth transitions and hover effects
- Accessible focus states
- Mobile-first approach

### JavaScript Functionality
- Real-time clock update in milliseconds using `Date.now()`
- Efficient update cycle using `setInterval`
- Clean code structure

## Responsive Breakpoints

The design adapts to different screen sizes with the following breakpoints:
- Small mobile: up to 480px
- Large mobile: 481px - 767px
- Tablet: 768px - 1024px
- Desktop: 1025px - 1440px
- Large Desktop: 1441px and above

## Testing

### Automated Testing Support
All elements include required data-testid attributes for automated testing:
- Profile card: `test-profile-card`
- User name: `test-user-name`
- User bio: `test-user-bio`
- Current time: `test-user-time`
- Avatar: `test-user-avatar`
- Social links: `test-user-social-links`
- Hobbies: `test-user-hobbies`
- Dislikes: `test-user-dislikes`

### Manual Testing Checklist
✅ Responsive layout at all breakpoints
✅ Social links open in new tabs
✅ Keyboard navigation works
✅ Time updates properly
✅ Images load correctly
✅ Hover and focus states work
✅ Content remains readable at all sizes

## Author

Muritala Sheriffdeen Adegoke

## Acknowledgments

- HNG Internship Team
- Task reviewers and mentors
- The developer community

## License

This project is open source and available for educational purposes.

---

All data-testid attributes are required exactly as shown so tests are stable.
HTML & semantics

Use semantic tags. Example suggestions:
Wrap the card in <article> (test-profile-card)
Name inside a <header> or an <h2> with aria-label as needed
Bio in a <p>
Avatar inside a <figure> with <img> and <figcaption> (if caption used)
Social links inside a <nav> or <ul>
Hobbies/dislikes each inside <section> and presented as <ul>/<li>
All interactive items (links/buttons) must be keyboard-focusable.
Responsiveness
Card must look good on mobile, tablet, and desktop.
On small screens, stack content vertically; on wider screens, arrange avatar to the left and text to the right (or any clean layout).
Use CSS that doesn’t break layout when content length changes (word-wrap, truncation with accessible expansion, etc.)
Behavior / Implementation guidance
The time in milliseconds should be accurate and reflect Date.now() at render or on an update tick (if you choose to update it, do so reasonably.
Avatar should accept either a URL or an uploaded image (if upload used, the component must ultimately display an image URL).
Social links should open in a new tab (target="_blank") with rel="noopener noreferrer".
Use semantic markup and modern CSS (Flexbox or Grid).
Acceptance criteria (checklist for grading / automated tests)
All required elements exist and are discoverable by the given data-testids.
HTML uses semantic tags (article, figure, nav, section, headings).
The test-user-time value equals Date.now() (or a value within a reasonable delta if rendering delay exists) and is shown in milliseconds.
Avatar renders with an alt attribute and data-testid="test-user-avatar".
Social links present inside test-user-social-links and optionally individually testable (e.g., test-user-social-twitter).
Hobbies and dislikes are distinct lists with their respective data-testids.
Keyboard navigation works for links; focus styles are visible.
Layout is responsive at typical breakpoints (mobile/tablet/desktop).
Submission instructions
Host the completed project (Netlify, GitHub Pages, etc.) and include the live URL.
Include the GitHub repo link with clear README and instructions to run locally.
Provide any relevant tests or notes in the repo
Submission Link - https://forms.gle/p7PcQ8nqVeH7rVcs9
Submission Deadline - 19th October, 2025.
TikTok | HNG Internship
HNG Internship
frontend stage 0 task (832 kB)
https://www.tiktok.com/@hnginternship/video/7561497217119440150?_t=ZM-90adUeCO9fc&_r=1

MDN Web DocsMDN Web Docs
HTML elements reference - HTML | MDN
This page lists all the HTML elements, which are created using tags. (24 kB)
