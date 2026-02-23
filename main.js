// all button configuration
const allButton = document.getElementById("allJobsButton");
const interviewButton = document.getElementById("allInterviewButton");
const rejectedButton = document.getElementById("allRejectedButton");

// interview button
interviewButton.addEventListener("click", function () {
  const allJobs = document.getElementById("allJobsSection");
  const allInterview = document.getElementById("allInterviewSection");
  const allRejected = document.getElementById("allRejectedSection");

  interviewButton.classList.add("bg-accent", "text-white");
  allButton.classList.remove("bg-info", "text-white");
  rejectedButton.classList.remove("bg-error", "text-white");

  allJobs.classList.add("hidden");
  allRejected.classList.add("hidden");
  allInterview.classList.remove("hidden");
});
// rejected button
rejectedButton.addEventListener("click", function () {
  const allJobs = document.getElementById("allJobsSection");
  const allInterview = document.getElementById("allInterviewSection");
  const allRejected = document.getElementById("allRejectedSection");

  rejectedButton.classList.add("bg-error", "text-white");
  interviewButton.classList.remove("bg-accent", "text-white");
  allButton.classList.remove("bg-info", "text-white");

  allJobs.classList.add("hidden");
  allInterview.classList.add("hidden");
  allRejected.classList.remove("hidden");
});
// all jobs button
allButton.addEventListener("click", function () {
  const allJobs = document.getElementById("allJobsSection");
  const allInterview = document.getElementById("allInterviewSection");
  const allRejected = document.getElementById("allRejectedSection");

  allButton.classList.add("bg-info", "text-white");
  rejectedButton.classList.remove("bg-error", "text-white");
  interviewButton.classList.remove("bg-accent", "text-white");

  allInterview.classList.add("hidden");
  allRejected.classList.add("hidden");
  allJobs.classList.remove("hidden");
});

// interview button integration
const jobs = document.querySelectorAll(".job-card");
for (const job of jobs) {
  const interviewBtn = job.querySelector(".interviewButton");
  interviewBtn.addEventListener("click", function () {
    // console.log("interview button is clicked for :", job);
    const interviewNumber = document.getElementById("interviewCount");
    // console.log(interviewNumber.innerText);
    let totalInterview = parseInt(interviewNumber.innerText);
    totalInterview += 1;

    interviewNumber.innerText = totalInterview;
    interviewBtn.disabled = true;
    console.log(interviewNumber);

    // status setting
    const status = job.querySelector("span");
    status.innerText = "Interview";

    status.classList.remove("text-blue-700", "bg-blue-100", "bg-error");
    status.classList.add("text-white", "bg-accent");
    console.log(status);

    // interview section added
    const noInterview = document.getElementById("noInterviewCard");
    const interviewContent = document.getElementById("allInterviewCard");
    noInterview.classList.add("hidden");
    const clonedJob = job.cloneNode(true);
    interviewContent.appendChild(clonedJob);

    const interviewCards = interviewContent.getElementsByClassName("job-card");
    const numbersOfInterview = document.getElementById("interviewNumber");
    numbersOfInterview.innerText = interviewCards.length;
    console.log(interviewCards.length);
    console.log(numbersOfInterview);
  });
}

// reject button integration
for (const job of jobs) {
  const rejectedBtn = job.querySelector(".rejectedButton");
  rejectedBtn.addEventListener("click", function () {
    // console.log("interview button is clicked for :", job);
    const rejectedNumber = document.getElementById("rejectedCount");
    // console.log(interviewNumber.innerText);
    let totalRejected = parseInt(rejectedNumber.innerText);
    totalRejected += 1;

    rejectedNumber.innerText = totalRejected;
    rejectedBtn.disabled = true;
    console.log("rejected number", rejectedNumber);

    // status setting
    const status = job.querySelector("span");
    status.innerText = "Rejected";

    status.classList.remove("text-blue-700", "bg-blue-100", "bg-accent");
    status.classList.add("text-white", "bg-error");
    console.log(status);

    // rejected section added
    const noRejectedContent = document.getElementById("noRejectedCard");
    const rejectedContent = document.getElementById("allRejectedCard");
    noRejectedContent.classList.add("hidden");
    const clonedJob = job.cloneNode(true);
    rejectedContent.appendChild(clonedJob);

    const rejectedCards = rejectedContent.getElementsByClassName("job-card");
    const numbersOfReject = document.getElementById("rejectedNumber");
    numbersOfReject.innerText = rejectedCards.length;
    console.log(rejectedCards.length);
    console.log(numbersOfReject);
  });
}
