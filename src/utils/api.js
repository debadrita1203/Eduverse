const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const canvasUrl = 'https://canvas.instructure.com/api/v1/accounts/1/courses';

export const fetchCanvasCourses = async () => {
  try {
    const res = await fetch(proxyUrl + canvasUrl);
    const data = await res.json();
    console.log("✅ Canvas Courses:", data);
    return data || [];
  } catch (error) {
    console.error('❌ Error fetching Canvas courses:', error);
    return [];
  }
};
