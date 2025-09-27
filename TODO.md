# TODO: Convert Skills Grid to Horizontal Carousel

## Tasks
- [x] Update `src/app/pages/skills/skills.component.html`:
  - Replace `*ngFor="let skill of skills"` with `*ngFor="let skill of skills"` (kept full list for sliding)
  - Wrap skill cards in a new `.skills-carousel-track` div
  - Add prev/next navigation buttons below the track
- [x] Update `src/app/pages/skills/skills.component.css`:
  - Change `.skills-grid` to flex column container
  - Add styles for `.skills-carousel-track` (flex row, overflow hidden, transform for sliding)
  - Style skill cards for carousel (fixed width ~400px, flex-shrink: 0)
  - Add styles for navigation arrows (positioned below, hover effects)
  - Update responsive design (mobile: adjust card width and nav size)
- [ ] Test carousel functionality:
  - Run `ng serve` and verify prev/next navigation
  - Check responsiveness and looping behavior
  - Ensure hover effects and animations work
