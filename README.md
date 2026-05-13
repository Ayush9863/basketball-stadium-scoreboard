# Stadium Scoreboard 

**🌐 Live Demo:** [stadium-scoreboard.netlify.app](https://stadium-scoreboard.netlify.app)

An immersive, arcade-style basketball scoreboard built with Vanilla JavaScript. This project focuses on high-quality UI/UX design, featuring a digital-font display and a smart history-tracking system.

## Key Features 
* **Pro Digital Display:** Uses custom `@font-face` digital fonts with a neon glow effect to mimic real stadium scoreboards.
* **Smart Undo System:** Unlike basic counters, this app uses Array-based history tracking. You can undo multiple steps for both Home and Guest scores without losing data.
* **Responsive Stadium UI:** A dark, moody stadium background with semi-transparent (glassmorphism) containers for a premium feel.
* **Game Reset:** A "New Game" button that clears all scores and history arrays in one click.

## Tech Stack 
* **HTML5:** Clean and semantic structure.
* **CSS3:** Custom fonts, Flexbox centering, neon text-shadows, and RGBA transparency.
* **Vanilla JavaScript:** Array manipulation (`push`, `pop`), DOM updates, and state management.

## My Learnings 
While building this, I practiced:
1. **State Management:** How to use arrays to keep track of every score change so that 'Undo' works perfectly.
2. **Visual Design:** Combining background images with specific color palettes (Gold, Neon Red, and Dark Grey) to create a consistent theme.
3. **Typography:** Integrating custom `.ttf` fonts into a web project.

## How to Play 
1. Visit the [Live Demo](https://stadium-scoreboard.netlify.app) or clone this repository.
2. Use the **+1, +2, +3** buttons to update scores.
3. Use **UNDO** if you make a mistake, or **NEW GAME** to start over!
