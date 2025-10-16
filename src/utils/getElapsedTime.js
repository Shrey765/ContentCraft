export default function getElapsedTime(submittedTime) {
  if (!submittedTime) return "invalid time";

  const submitted = new Date(Number(submittedTime));
  if (isNaN(submitted)) return "invalid time";

  const now = new Date();
  const seconds = Math.floor((now - submitted) / 1000);

  if (seconds < 60) {
    return `${seconds} second${seconds !== 1 ? "s" : ""} ago`;
  }

  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) {
    return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
  }

  const hours = Math.floor(minutes / 60);
  if (hours < 24) {
    return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
  }

  const days = Math.floor(hours / 24);
  return `${days} day${days !== 1 ? "s" : ""} ago`;
}
