// Initialize AOS animations
AOS.init({
    once: true,
    duration: 800,
    easing: 'ease-out-quart'
});

// Theme Toggle Functionality
document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('theme-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    // Check for saved theme preference or use system preference
    let currentTheme = localStorage.getItem('theme') ||
        (prefersDarkScheme.matches ? 'dark' : 'light');

    // Apply the current theme
    if (currentTheme === 'light') {
        document.body.classList.add('light-theme');
    }

    // Theme toggle button event
    themeToggle.addEventListener('click', function () {
        // Add instant layout update class
        document.body.classList.add('theme-transition');
      
        // Toggle the theme
        document.body.classList.toggle('light-theme');
      
        // Save user preference
        const theme = document.body.classList.contains('light-theme') ? 'light' : 'dark';
        localStorage.setItem('theme', theme);
      
        // Force reflow for layout fix (magic line 😎)
        void document.body.offsetWidth;
      
        // Remove transition override after a short delay
        setTimeout(() => {
          document.body.classList.remove('theme-transition');
        }, 50); // even 50ms is enough
      });
      
    // Projects data
    const projects = [
        {
            title: "Spotify Functional Clone",
            description: "Spotify UI clone with music playback functionality built with React and Spotify API integration.",
            link: "https://github.com/shiv508/Spotify-Functional-Clone"
        },
        {
            title: "Student Management System",
            description: "Complete student record management system using Java Swing and Oracle database.",
            link: "https://github.com/shiv508/StudentManagementSystem"
        },
        {
            title: "Weather App",
            description: "Real-time weather updates application using OpenWeatherMap API with location detection.",
            link: "https://github.com/shiv508/Weather-App"
        },
        {
            title: "Amazon UI Clone",
            description: "Responsive Amazon home page UI clone built with HTML, CSS and JavaScript.",
            link: "https://github.com/shiv508/Amazon-clone"
        },
        {
            title: "Netflix UI Clone",
            description: "Netflix-inspired responsive dark UI with movie browsing functionality.",
            link: "https://github.com/shiv508/Netflix-Clone"
        }
    ];

    // Render projects
    const projectsContainer = document.getElementById('projects-container');
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank"><i class="fas fa-external-link-alt"></i> View Project</a>
      `;
        projectsContainer.appendChild(projectCard);
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});