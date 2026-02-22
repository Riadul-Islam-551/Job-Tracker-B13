// all button configuration
// interview button
document
  .getElementById("allInterviewButton")
  .addEventListener("click", function () {
    const allJobs = document.getElementById("allJobsSection");
    const allInterview = document.getElementById("allInterviewSection");
    const allRejected = document.getElementById("allRejectedSection");

    allJobs.classList.add("hidden");
    allRejected.classList.add("hidden");
    allInterview.classList.remove("hidden");
  });
// rejected button
document
  .getElementById("allRejectedButton")
  .addEventListener("click", function () {
    const allJobs = document.getElementById("allJobsSection");
    const allInterview = document.getElementById("allInterviewSection");
    const allRejected = document.getElementById("allRejectedSection");

    allJobs.classList.add("hidden");
    allInterview.classList.add("hidden");
    allRejected.classList.remove("hidden");
  });
// all jobs button
document.getElementById("allJobsButton").addEventListener("click", function () {
  const allJobs = document.getElementById("allJobsSection");
  const allInterview = document.getElementById("allInterviewSection");
  const allRejected = document.getElementById("allRejectedSection");

  allInterview.classList.add("hidden");
  allRejected.classList.add("hidden");
  allJobs.classList.remove("hidden");
});
