const API_URL = process.env.REACT_APP_API_URL;

export async function getAllPosts() {
  try {
    const posts = await fetch(API_URL);
    return posts.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}
