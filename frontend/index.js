
// Project details for the modal

const projects = [
  {
    title: "Stopwatch Web App",
    details: `
      <p><strong>Features:</strong></p>
      <ul>
        <li>Start, Stop, and Reset functionality with millisecond accuracy</li>
        <li>Lap timer and session storage using JSON and localStorage</li>
        <li>Minimal, interactive UI with responsive design</li>
        <li><a href="https://rguptaprofile.github.io/Stopwatch/" target="_blank">Live Demo</a></li>
      </ul>
      <p><strong>Technologies:</strong> HTML5, CSS3, JavaScript, JSON</p>
      <p>Perfect for productivity, sports, and educational use-cases.</p>
    `
  },

  {
    title: "Quiz App",
    details: `
      <p><strong>Features:</strong></p>
      <ul>
        <li>Dynamic question loading from JSON</li>
        <li>Real-time feedback and score tracking</li>
        <li>Responsive design for all devices</li>
        <li><a href="https://rguptaprofile.github.io/Quiz-App/" target="_blank">Live Demo</a></li>
      </ul>
      <p><strong>Technologies:</strong> HTML5, CSS3, JavaScript, JSON</p>
      <p>Ideal for learning, self-assessment, and recruitment screening.</p>
    `
  },

  {
    title: "Amazon Web Clone",
    details: `
      <p><strong>Features:</strong></p>
      <ul>
        <li>✅ Responsive Design: Seamless layout adjustment for all screen sizes.</li>
        <li>🎨 Modern UI/UX: Clean design using CSS3 for visually appealing aesthetics.</li>
        <li>📱 Mobile-Friendly Navigation: Optimized user experience for mobile devices.</li>
        <li>this clone adapts seamlessly across devices — offering an optimized viewing experience on desktops, tablets, and smartphones.</li>
        <li>It serves as a front-end project to demonstrate responsive design, layout structuring, and modern web styling techniques.</li>
        <li>It replicates the layout and visual design of Amazon’s homepage, including key UI components like the header, search bar, product categories, banners, and product cards. Built with clean and structured code</li>
        <li><a href="https://rguptaprofile.github.io/Amazon-Clone/" target="_blank">Live Demo</a></li>
      </ul>
      <p><strong>Technologies:</strong> HTML5, CSS3, JSON\r\n</p>
      <p>Ideal for learning, self-assessment, and recruitment screening.</p>
    `
  }
];

// Modal functions

function showProjectModal(index) {
  document.getElementById('modal-body').innerHTML = `
    <h2>${projects[index].title}</h2>
    ${projects[index].details}
  `;
  document.getElementById('project-modal').style.display = 'block';
}
function closeModal() {
  document.getElementById('project-modal').style.display = 'none';
}

// Contact form "database" using localStorage

// const form = document.getElementById('contact-form');
// const alertBox = document.getElementById('form-alert');

// form.addEventListener('submit', function (e) {
//   e.preventDefault();
//   const name = document.getElementById('name').value.trim();
//   const email = document.getElementById('email').value.trim();
//   const message = document.getElementById('message').value.trim();

//   // Save to localStorage as a simple "database"

//   const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || "[]");
//   submissions.push({ name, email, message, date: new Date().toISOString() });
//   localStorage.setItem('contactSubmissions', JSON.stringify(submissions));

//   alertBox.textContent = "Thank you! Your message has been saved.";
//   form.reset();

//   setTimeout(() => { alertBox.textContent = ""; }, 4000);
// });

// Modal close on outside click

window.onclick = function (event) {
  const modal = document.getElementById('project-modal');
  if (event.target == modal) closeModal();
}



//  Setup and start animation!

var typed = new Typed('#element', {
  strings: ['Software Developer', 'Front-end Developer', 'Web Developer', 'Artificial Intelligence', 'Cloud computing', 'Machine Learning', 'Software Engineer'],
  typeSpeed: 80,
});

// end of animation section



// (3D Tilt Based on Mouse Movement)   &    (3D + Responsive + Overflow Visible + Styling)

const container = document.querySelector('.profile-container');
const image = container.querySelector('.profile-img');

container.addEventListener('mousemove', (e) => {
  const rect = container.getBoundingClientRect();
  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.height / 2;

  const rotateX = (-y / rect.height) * 15; // Tilt up/down
  const rotateY = (x / rect.width) * 15;  // Tilt left/right

  image.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
});

container.addEventListener('mouseleave', () => {
  image.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
});




// Animate 3D skills on scroll for skills section
document.addEventListener('DOMContentLoaded', () => {
  const skills = document.querySelectorAll('.skills-list span');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  skills.forEach((skill) => {
    skill.style.animationPlayState = 'paused';
    observer.observe(skill);
  });
});




//  javascript for making functinal the contact infomation like directly into mail

document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contact-form");
  const alertBox = document.getElementById("form-alert");

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const country = document.getElementById("country").value;
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alertBox.innerHTML = "<p style='color:red;'>Please fill in all required fields.</p>";
      return;
    }

    const subject = encodeURIComponent(`New Contact from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCountry: ${country}\n\nMessage:\n${message}`
    );

    // Replace with your receiving email address
    const mailtoLink = `mailto:rahulgupt1231@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;

    alertBox.innerHTML = "<p style='color:green;'>Opening your email client...</p>";
  });
});




// javascript for social media
document.querySelectorAll('.social-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    console.log(`Clicked: ${btn.classList[1]}`);
    // You can also integrate with Google Analytics or custom tracking here
  });
});






// Scroll-based fade-in animation for internships Section

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.internship-card');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, {
    threshold: 0.2
  });

  cards.forEach(card => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(50px)';
    observer.observe(card);
  });
});


// javascript for header section 


const toggleBtn = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

toggleBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});



