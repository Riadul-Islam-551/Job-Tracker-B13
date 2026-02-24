// // Section Buttons
// const allButton = document.getElementById("allJobsButton");
// const interviewButton = document.getElementById("allInterviewButton");
// const rejectedButton = document.getElementById("allRejectedButton");

// const allJobsSection = document.getElementById("allJobsSection");
// const allInterviewSection = document.getElementById("allInterviewSection");
// const allRejectedSection = document.getElementById("allRejectedSection");

// const totalInterview = document.getElementById("interviewNumber");
// const totalRejected = document.getElementById("rejectedNumber");

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

// // Job Card Buttons
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
//   const deleteJob = job.querySelectorAll(".deleteCard");
//   console.log(deleteJob);

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
//       console.log(interviewContent.children);
//       totalInterview.innerText = interviewContent.children.length;

//       interviewCount.innerText = parseInt(interviewCount.innerText) + 1;
//       noInterviewCard.classList.add("hidden");
//     }
//     // Update status UI
//     status.innerText = "Interview";
//     status.classList.remove("text-blue-700", "bg-blue-100", "bg-error");
//     status.classList.add("text-white", "bg-accent");
//     // totalInterview.innerText = interviewContent.children.length;
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
//       totalRejected.innerText = rejectedContent.children.length;
//       rejectedCount.innerText = parseInt(rejectedCount.innerText) + 1;
//       noRejectedCard.classList.add("hidden");
//     }

//     // Update status UI
//     status.innerText = "Rejected";
//     status.classList.remove("text-blue-700", "bg-blue-100", "bg-accent");
//     status.classList.add("text-white", "bg-error");
//   });
// });

// ===============================
// Section Buttons
// ===============================
const allButton = document.getElementById("allJobsButton");
const interviewButton = document.getElementById("allInterviewButton");
const rejectedButton = document.getElementById("allRejectedButton");

const allJobsSection = document.getElementById("allJobsSection");
const allInterviewSection = document.getElementById("allInterviewSection");
const allRejectedSection = document.getElementById("allRejectedSection");

const totalInterview = document.getElementById("interviewNumber");
const totalRejected = document.getElementById("rejectedNumber");

// ===============================
// Section Toggle Logic
// ===============================
allButton.addEventListener("click", () => {
  allButton.classList.add("bg-info", "text-white");
  interviewButton.classList.remove("bg-accent", "text-white");
  rejectedButton.classList.remove("bg-error", "text-white");

  allJobsSection.classList.remove("hidden");
  allInterviewSection.classList.add("hidden");
  allRejectedSection.classList.add("hidden");
});

interviewButton.addEventListener("click", () => {
  allButton.classList.remove("bg-info", "text-white");
  interviewButton.classList.add("bg-accent", "text-white");
  rejectedButton.classList.remove("bg-error", "text-white");

  allJobsSection.classList.add("hidden");
  allInterviewSection.classList.remove("hidden");
  allRejectedSection.classList.add("hidden");
});

rejectedButton.addEventListener("click", () => {
  allButton.classList.remove("bg-info", "text-white");
  interviewButton.classList.remove("bg-accent", "text-white");
  rejectedButton.classList.add("bg-error", "text-white");

  allJobsSection.classList.add("hidden");
  allInterviewSection.classList.add("hidden");
  allRejectedSection.classList.remove("hidden");
});

// ===============================
// Job Sections
// ===============================
const interviewContent = document.getElementById("allInterviewCard");
const rejectedContent = document.getElementById("allRejectedCard");

const noInterviewCard = document.getElementById("noInterviewCard");
const noRejectedCard = document.getElementById("noRejectedCard");

const jobs = document.querySelectorAll(".job-card");

// ===============================
// Helper Function (Update Counts)
// ===============================
function updateCounts() {
  totalInterview.innerText = interviewContent.children.length;
  totalRejected.innerText = rejectedContent.children.length;

  // Show empty message if needed
  if (interviewContent.children.length === 0) {
    noInterviewCard.classList.remove("hidden");
  } else {
    noInterviewCard.classList.add("hidden");
  }

  if (rejectedContent.children.length === 0) {
    noRejectedCard.classList.remove("hidden");
  } else {
    noRejectedCard.classList.add("hidden");
  }
}

// ===============================
// Job Card Logic
// ===============================
jobs.forEach((job) => {
  const interviewBtn = job.querySelector(".interviewButton");
  const rejectedBtn = job.querySelector(".rejectedButton");
  const deleteBtn = job.querySelector(".deleteCard");
  const status = job.querySelector("span");

  // -----------------------------
  // Interview Button
  // -----------------------------
  interviewBtn.addEventListener("click", () => {
    interviewContent.appendChild(job);

    status.innerText = "Interview";
    status.classList.remove("bg-error");
    status.classList.add("bg-accent", "text-white");

    updateCounts();
  });

  // -----------------------------
  // Rejected Button
  // -----------------------------
  rejectedBtn.addEventListener("click", () => {
    rejectedContent.appendChild(job);

    status.innerText = "Rejected";
    status.classList.remove("bg-accent");
    status.classList.add("bg-error", "text-white");

    updateCounts();
  });

  // -----------------------------
  // Delete Button
  // -----------------------------
  deleteBtn.addEventListener("click", () => {
    job.remove();
    updateCounts();
  });
});
