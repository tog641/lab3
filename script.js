const profileData = {
    fullName: "TOĞRUL NÜSRƏTLİ",
    position: "INFORMATION SECURITY STUDENT",
    contacts: [
        { icon: "phone.png", value: "+994 55 382 95 44" },
        { icon: "email.png", value: "togrulnusrtli2@gmail.com" },
        { icon: "location.png", value: "Azerbaijan, Baku – Ajami" }
    ],
    socials: [
        { icon: "instagram.png", handle: "22togrull" },
        { icon: "tik-tok.png", handle: "10togrull" },
        { icon: "github.png", handle: "tog641" }
    ],
    educationHistory: [
        { duration: "2013 – 2024", institution: "Ahliman Gasimov Secondary School" },
        { duration: "2024 – Present", institution: "AzTU – Information Security" }
    ],
    skills: ["VS Code", "MS Office Tools", "DaVinci Resolve"],
    languages: ["Azerbaijani", "English", "Turkish"],
    summary: "Organized and tech-focused individual with experience in digital content creation and technical support. Strong in teamwork and problem solving.",
    workHistory: [
        {
            role: "Content Creator | Freelance",
            responsibilities: [
                "Developed short-form videos across social platforms.",
                "Built a consistent online presence.",
                "Monitored performance using analytics tools."
            ]
        },
        {
            role: "Customer Service Rep | NetLink Services",
            responsibilities: [
                "Assisted users with technical problems.",
                "Maintained customer satisfaction.",
                "Handled issue escalation effectively."
            ]
        }
    ],
    certifications: [
        {
            title: "AWS Certified Cloud Practitioner",
            detail: "Covers cloud concepts, billing, security, and AWS services basics."
        }
    ],
    projects: [
        {
            name: "Task Manager App",
            description: "Developed a desktop task tracking app using C# and .NET."
        },
        {
            name: "Network Monitoring Lab",
            description: "Simulated a network for security monitoring and analysis."
        }
    ],
    reference: "Ayşe Nur mentored me during my university years, especially guiding me in cybersecurity topics and project planning."
};

// Fill data into HTML
document.getElementById("name").innerText = profileData.fullName;
document.getElementById("position").innerText = profileData.position;
document.getElementById("summary").innerHTML = `<p>${profileData.summary}</p>`;

document.getElementById("contact-info").innerHTML = profileData.contacts
    .map(item => `<p><img src="photos/${item.icon}" class="icon"> ${item.value}</p>`)
    .join("");

document.getElementById("socials").innerHTML = profileData.socials
    .map(item => `<p><img src="photos/${item.icon}" class="icon"> ${item.handle}</p>`)
    .join("");

document.getElementById("education").innerHTML = profileData.educationHistory
    .map(item => `<p><strong>${item.duration}</strong><br>${item.institution}</p>`)
    .join("");

document.getElementById("skill-list").innerHTML = profileData.skills
    .map(skill => `<li>${skill}</li>`)
    .join("");

document.getElementById("language-list").innerHTML = profileData.languages
    .map(lang => `<li>${lang}</li>`)
    .join("");

document.getElementById("work-history").innerHTML = profileData.workHistory
    .map(job => `
        <p><strong>${job.role}</strong></p>
        <ul>${job.responsibilities.map(task => `<li>${task}</li>`).join("")}</ul>
    `)
    .join("");

document.getElementById("certifications").innerHTML = profileData.certifications
    .map(cert => `<p><strong>${cert.title}</strong><br>${cert.detail}</p>`)
    .join("");

document.getElementById("projects").innerHTML = profileData.projects
    .map(project => `<p><strong>${project.name}</strong><br>${project.description}</p>`)
    .join("");

document.getElementById("reference").innerHTML = `<p>${profileData.reference}</p>`;

// Add new skill
function addSkill() {
    const skillInput = document.getElementById("skill-input");
    const skill = skillInput.value.trim();
    if (skill !== "") {
        const li = document.createElement("li");
        li.textContent = skill;
        document.getElementById("skill-list").appendChild(li);
        skillInput.value = "";
    }
}

// Add new language
function addLanguage() {
    const langInput = document.getElementById("language-input");
    const lang = langInput.value.trim();
    if (lang !== "") {
        const li = document.createElement("li");
        li.textContent = lang;
        document.getElementById("language-list").appendChild(li);
        langInput.value = "";
    }
}

// Accordion toggle
document.querySelectorAll(".accordion-btn").forEach(button => {
    button.addEventListener("click", () => {
        const panel = button.nextElementSibling;
        panel.classList.toggle("active");
        panel.style.display = panel.style.display === "block" ? "none" : "block";
    });
});
