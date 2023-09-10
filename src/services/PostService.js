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

export async function getPostById(postId) {
  try {
    const post = await fetch(`${API_URL}/${postId}`);
    return post.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function createPost(title, body) {
  try {
    const post = { postName: title, postBody: body };
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
}
