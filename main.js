// // -----------------------------
// // Section Buttons
// // -----------------------------
// const allButton = document.getElementById("allJobsButton");
// const interviewButton = document.getElementById("allInterviewButton");
// const rejectedButton = document.getElementById("allRejectedButton");

// const allJobsSection = document.getElementById("allJobsSection");
// const allInterviewSection = document.getElementById("allInterviewSection");
// const allRejectedSection = document.getElementById("allRejectedSection");

// // Section toggles
// allButton.addEventListener("click", () => {
//   allButton.classList.add("bg-info", "text-white");
//   interviewButton.classList.remove("bg-accent", "text-white");
//   rejectedButton.classList.remove("bg-error", "text-white");

//   allJobsSection.classList.remove("hidden");
//   allInterviewSection.classList.add("hidden");
//   allRejectedSection.classList.add("hidden");
// });

// interviewButton.addEventListener("click", () => {
//   allButton.classList.remove("bg-info", "text-white");
//   interviewButton.classList.add("bg-accent", "text-white");
//   rejectedButton.classList.remove("bg-error", "text-white");

//   allJobsSection.classList.add("hidden");
//   allInterviewSection.classList.remove("hidden");
//   allRejectedSection.classList.add("hidden");
// });

// rejectedButton.addEventListener("click", () => {
//   allButton.classList.remove("bg-info", "text-white");
//   interviewButton.classList.remove("bg-accent", "text-white");
//   rejectedButton.classList.add("bg-error", "text-white");

//   allJobsSection.classList.add("hidden");
//   allInterviewSection.classList.add("hidden");
//   allRejectedSection.classList.remove("hidden");
// });

// // -----------------------------
// // Job Card Buttons
// // -----------------------------
// const interviewContent = document.getElementById("allInterviewCard");
// const rejectedContent = document.getElementById("allRejectedCard");
// const noInterviewCard = document.getElementById("noInterviewCard");
// const noRejectedCard = document.getElementById("noRejectedCard");

// const interviewCount = document.getElementById("interviewCount");
// const rejectedCount = document.getElementById("rejectedCount");
// const jobs = document.querySelectorAll(".job-card");

// jobs.forEach((job) => {
//   const interviewBtn = job.querySelector(".interviewButton");
//   const rejectedBtn = job.querySelector(".rejectedButton");
//   const status = job.querySelector("span");

//   // -----------------------------
//   // Interview Button Click
//   // -----------------------------
//   interviewBtn.addEventListener("click", () => {
//     const currentStatus = status.innerText;

//     // Remove from rejected section if previously rejected
//     if (currentStatus === "Rejected") {
//       rejectedContent.removeChild(job);
//       rejectedCount.innerText = parseInt(rejectedCount.innerText) - 1;
//       if (rejectedContent.children.length === 0)
//         noRejectedCard.classList.remove("hidden");
//     }

//     // Move to interview section if not already
//     if (currentStatus !== "Interview") {
//       // const clonedJob = job.cloneNode(true);
//       interviewContent.appendChild(job);

//       interviewCount.innerText = parseInt(interviewCount.innerText) + 1;
//       noInterviewCard.classList.add("hidden");
//     }
//     // Update status UI
//     status.innerText = "Interview";
//     status.classList.remove("text-blue-700", "bg-blue-100", "bg-error");
//     status.classList.add("text-white", "bg-accent");
//   });

//   // -----------------------------
//   // Rejected Button Click
//   // -----------------------------
//   rejectedBtn.addEventListener("click", () => {
//     const currentStatus = status.innerText;

//     // Remove from interview section if previously interview
//     if (currentStatus === "Interview") {
//       interviewContent.removeChild(job);
//       interviewCount.innerText = parseInt(interviewCount.innerText) - 1;
//       if (interviewContent.children.length === 0)
//         noInterviewCard.classList.remove("hidden");
//     }

//     // Move to rejected section if not already
//     if (currentStatus !== "Rejected") {
//       // const clonedJob = job.cloneNode(true);
//       // interviewContent.appendChild(clonedJob);
//       rejectedContent.appendChild(job);
//       rejectedCount.innerText = parseInt(rejectedCount.innerText) + 1;
//       noRejectedCard.classList.add("hidden");
//     }

//     // Update status UI
//     status.innerText = "Rejected";
//     status.classList.remove("text-blue-700", "bg-blue-100", "bg-accent");
//     status.classList.add("text-white", "bg-error");
//   });
// });

// =============================
// STATE (JOB DATA)
// =============================

const jobs = [
  {
    id: 1,
    company: "Mobile First Corp",
    role: "React Native Developer",
    location: "Remote • Full-time • $130,000 – $175,000",
    description:
      "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",
    status: "not_applied",
  },
  {
    id: 2,
    company: "WebFlow Agency",
    role: "Frontend Developer",
    location: "Remote • Full-time • $95,000 – $120,000",
    description:
      "Build responsive web apps using modern frameworks like React and Tailwind CSS.",
    status: "not_applied",
  },
  {
    id: 3,
    company: "DataViz Solutions",
    role: "Backend Developer",
    location: "Hybrid • Full-time • $110,000 – $140,000",
    description:
      "Work with Node.js and databases to develop secure backend services.",
    status: "not_applied",
  },
  {
    id: 4,
    company: "CloudStack Inc.",
    role: "Cloud Engineer",
    location: "Onsite • Full-time • $120,000 – $150,000",
    description:
      "Manage cloud infrastructure and automate deployment pipelines.",
    status: "not_applied",
  },
  {
    id: 5,
    company: "Innovate Labs",
    role: "UX Designer",
    location: "Remote • Part-time • $70,000 – $90,000",
    description:
      "Design intuitive and engaging user experiences for web platforms.",
    status: "not_applied",
  },
  {
    id: 6,
    company: "MegaCorp Solutions",
    role: "JavaScript Developer",
    location: "New York, NY • Full-time • $130,000 - $170,000",
    description:
      "Build enterprise applications with JavaScript and modern frameworks.",
    status: "not_applied",
  },
  {
    id: 7,
    company: "StartupXYZ",
    role: "Full Stack Engineer",
    location: "Remote • Full-time • $120,000 - $160,000",
    description:
      "Build enterprise applications with JavaScript and modern frameworks.",
    status: "not_applied",
  },
  {
    id: 8,
    company: "TechCorp Industries",
    role: "Senior Frontend Developer",
    location: "San Francisco, CA • Full-time • $130,000 - $175,000",
    description:
      "We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript.",
    status: "not_applied",
  },
];

// =============================
// DOM ELEMENTS
// =============================

const allJobsSection = document.getElementById("allJobsSection");
const interviewContainer = document.getElementById("allInterviewCard");
const rejectedContainer = document.getElementById("allRejectedCard");

const interviewCount = document.getElementById("interviewCount");
const rejectedCount = document.getElementById("rejectedCount");

const noInterviewCard = document.getElementById("noInterviewCard");
const noRejectedCard = document.getElementById("noRejectedCard");

// Section Buttons
const allButton = document.getElementById("allJobsButton");
const interviewButton = document.getElementById("allInterviewButton");
const rejectedButton = document.getElementById("allRejectedButton");

const allInterviewSection = document.getElementById("allInterviewSection");
const allRejectedSection = document.getElementById("allRejectedSection");

// =============================
// SECTION TOGGLE LOGIC
// =============================

allButton.addEventListener("click", () => {
  allJobsSection.classList.remove("hidden");
  allInterviewSection.classList.add("hidden");
  allRejectedSection.classList.add("hidden");
});

interviewButton.addEventListener("click", () => {
  allJobsSection.classList.add("hidden");
  allInterviewSection.classList.remove("hidden");
  allRejectedSection.classList.add("hidden");
});

rejectedButton.addEventListener("click", () => {
  allJobsSection.classList.add("hidden");
  allInterviewSection.classList.add("hidden");
  allRejectedSection.classList.remove("hidden");
});

// =============================
// CREATE CARD
// =============================

function createJobCard(job) {
  const div = document.createElement("div");
  div.className = "bg-base-100 rounded-xl p-6 border border-base-300 my-3";

  let statusText = "NOT APPLIED";
  let statusClass = "text-blue-700 bg-blue-100";

  if (job.status === "interview") {
    statusText = "Interview";
    statusClass = "text-white bg-accent";
  }

  if (job.status === "rejected") {
    statusText = "Rejected";
    statusClass = "text-white bg-error";
  }

  div.innerHTML = `
    <h2 class="text-lg font-semibold">${job.company}</h2>
    <p>${job.role}</p>
    <p class="text-sm mt-2">${job.location}</p>
    <span class="inline-block mt-3 px-4 py-2 text-sm rounded-md ${statusClass}">
      ${statusText}
    </span>
    <p class="mt-4 text-sm">${job.description}</p>
    <div class="mt-5 flex gap-3">
      <button class="px-4 py-2 border border-green-500 rounded-md">
        INTERVIEW
      </button>
      <button class="px-4 py-2 border border-red-500 rounded-md">
        REJECTED
      </button>
    </div>
  `;

  const buttons = div.querySelectorAll("button");

  buttons[0].addEventListener("click", () => {
    updateStatus(job.id, "interview");
  });

  buttons[1].addEventListener("click", () => {
    updateStatus(job.id, "rejected");
  });

  return div;
}

// =============================
// RENDER FUNCTION
// =============================

function renderJobs() {
  allJobsSection.innerHTML = "";
  interviewContainer.innerHTML = "";
  rejectedContainer.innerHTML = "";

  let interviewTotal = 0;
  let rejectedTotal = 0;

  jobs.forEach((job) => {
    const card = createJobCard(job);

    // Always show in All Jobs
    allJobsSection.appendChild(card);

    if (job.status === "interview") {
      interviewContainer.appendChild(createJobCard(job));
      interviewTotal++;
    }

    if (job.status === "rejected") {
      rejectedContainer.appendChild(createJobCard(job));
      rejectedTotal++;
    }
  });

  interviewCount.innerText = interviewTotal;
  rejectedCount.innerText = rejectedTotal;

  noInterviewCard.classList.toggle("hidden", interviewTotal > 0);
  noRejectedCard.classList.toggle("hidden", rejectedTotal > 0);
}

// =============================
// UPDATE STATUS
// =============================

function updateStatus(id, newStatus) {
  const job = jobs.find((j) => j.id === id);
  job.status = newStatus;
  renderJobs();
}

// =============================
// INITIAL RENDER
// =============================

renderJobs();
