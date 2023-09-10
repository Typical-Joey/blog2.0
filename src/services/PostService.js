const API_URL = "http://localhost:3001/api/v1/post";

export async function getAllPosts() {
  try {
    const posts = await fetch(API_URL);
    return posts.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}
