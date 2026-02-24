const allButton = document.getElementById("allJobsButton");
const interviewButton = document.getElementById("allInterviewButton");
const rejectedButton = document.getElementById("allRejectedButton");

const allJobsSection = document.getElementById("allJobsSection");
const allInterviewSection = document.getElementById("allInterviewSection");
const allRejectedSection = document.getElementById("allRejectedSection");

const totalInterview = document.getElementById("interviewNumber");
const totalRejected = document.getElementById("rejectedNumber");

const interviewContent = document.getElementById("allInterviewCard");
const rejectedContent = document.getElementById("allRejectedCard");

const noInterviewCard = document.getElementById("noInterviewCard");
const noRejectedCard = document.getElementById("noRejectedCard");

const jobs = document.querySelectorAll(".job-card");

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

// count updating

function updateCounts() {
  totalInterview.innerText = interviewContent.children.length;
  totalRejected.innerText = rejectedContent.children.length;

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

// job card logic

jobs.forEach((job) => {
  const interviewBtn = job.querySelector(".interviewButton");
  const rejectedBtn = job.querySelector(".rejectedButton");
  const deleteBtn = job.querySelector(".deleteCard");
  const status = job.querySelector("span");

  // interview button functionality

  interviewBtn.addEventListener("click", () => {
    interviewContent.appendChild(job);

    status.innerText = "Interview";
    status.classList.remove("bg-error");
    status.classList.add("bg-accent", "text-white");

    updateCounts();
  });

  // rejected button functionality

  rejectedBtn.addEventListener("click", () => {
    rejectedContent.appendChild(job);

    status.innerText = "Rejected";
    status.classList.remove("bg-accent");
    status.classList.add("bg-error", "text-white");

    updateCounts();
  });

  // delete button functionality

  deleteBtn.addEventListener("click", () => {
    job.remove();
    updateCounts();
  });
});
