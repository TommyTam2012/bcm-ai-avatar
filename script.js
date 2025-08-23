// === Example: Fetch courses summary ===
async function fetchCourses() {
  try {
    const res = await fetch("https://bcm-demo.onrender.com/courses/summary/all");
    if (!res.ok) throw new Error("API failed");
    const data = await res.json();
    return data.courses.map(c => c.summary).join("\n");
  } catch (err) {
    return "Sorry, my live system is unreachable. Please try again later.";
  }
}

// === Example: Fetch FAQs ===
async function fetchFaqs() {
  try {
    const res = await fetch("https://bcm-demo.onrender.com/faqs");
    if (!res.ok) throw new Error("API failed");
    const data = await res.json();
    return data.map(f => `${f.question}: ${f.answer}`).join("\n");
  } catch (err) {
    return "Sorry, FAQs are not available right now.";
  }
}

// === Example: Fetch recent enrollments ===
async function fetchRecentEnrollments() {
  try {
    const res = await fetch("https://bcm-demo.onrender.com/enrollments/recent", {
      headers: { "X-Admin-Key": "<YOUR_ADMIN_KEY>" }
    });
    if (!res.ok) throw new Error("API failed");
    const data = await res.json();
    return data.map(e => `${e.full_name} enrolled in ${e.program_code || "a course"} on ${e.created_at}`).join("\n");
  } catch (err) {
    return "Sorry, I can’t retrieve recent enrollments right now.";
  }
}
