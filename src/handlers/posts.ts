import Store from "../posts_store";

const Posts = async () => {
  const posts = new Store();
  const body = JSON.stringify(posts);
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-type': 'application/json',
  };
  return new Response(body, { headers });
};

export default Posts;
